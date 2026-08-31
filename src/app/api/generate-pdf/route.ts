import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(req) {
  try {
    const { htmlContent } = await req.json();

    if (!htmlContent) {
      return NextResponse.json({ error: "HTML content is required" }, { status: 400 });
    }

    // 1. Launch Headless Browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    // 2. Load the HTML string with your CSS styles included
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // 3. Generate a pure vector PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true, // Retains background colors/gradients
      preferCSSPageSize: true,
    });

    await browser.close();

    // 4. Stream the binary PDF back to the frontend client
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    });

  } catch (error) {
    console.error("PDF Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate vector PDF" }, { status: 500 });
  }
}