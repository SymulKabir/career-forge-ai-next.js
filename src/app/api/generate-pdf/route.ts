import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";

export async function POST(req) {
  const { cssText, pages } = await req.json();

  if (!pages || !pages.length) {
    return new Response(JSON.stringify({ error: "No pages provided" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const mergedPdf = await PDFDocument.create();

    for (const pageData of pages) {
      const browserPage = await browser.newPage();

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />

            <style>
              ${cssText}

              *,
              *::before,
              *::after {
                box-sizing: border-box;
              }

              html,
              body {
                margin: 0;
                padding: 0;
                width: 210mm;
                min-height: 297mm;
                background: #ffffff;
              }

              body {
                overflow: hidden;
              }

              .page {
                width: 210mm !important;
                height: 297mm !important;

                margin: 0 !important;
                border: none !important;
                box-shadow: none !important;

                overflow: hidden !important;

                background: #ffffff !important;
              }
            </style>
          </head>

          <body>
            ${pageData.html}
          </body>
        </html>
      `;

      await browserPage.setContent(html, {
        waitUntil: "networkidle0",
      });

      // Generate exactly ONE PDF page
      const pdfBuffer = await browserPage.pdf({
        width: "210mm",
        height: "297mm",

        printBackground: true,

        margin: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },

        pageRanges: "1",
      });

      await browserPage.close();

      // Load individual PDF
      const singlePdf = await PDFDocument.load(pdfBuffer);

      // Copy its page into final PDF
      const [copiedPage] = await mergedPdf.copyPages(singlePdf, [0]);

      mergedPdf.addPage(copiedPage);
    }

    // Generate final combined PDF
    const finalPdf = await mergedPdf.save();

    return new Response(finalPdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } finally {
    await browser.close();
  }
}
