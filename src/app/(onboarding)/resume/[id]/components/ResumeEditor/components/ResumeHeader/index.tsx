import React from "react";
import SubSectionToolBar from "../SubSectionToolBar";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor"; 
import InputField from "../InputField";
import ImgPreview from "../../ImgPreview";

const Index: React.FC = () => {
  const { setting, resumeData } = useResumeContext(); 

  const config = {
    layout: setting?.header?.layout,
    background: setting?.header?.background,
    nameSize: setting?.header?.nameSize,
    nameWeight: setting?.header?.nameWeight,
    nameColor: setting?.header?.nameColor,
    titleSize: setting?.header?.titleSize,
    titleWeight: setting?.header?.titleWeight,
    titleColor: setting?.header?.titleColor,
    metaTextSize: setting?.header?.metaTextSize,
    metaTextColor: setting?.header?.metaTextColor,
    imageSize: setting?.header?.imageSize ?? 100,
    imageRadius: setting?.header?.imageRadius ?? "8px",
    gap: setting?.header?.gap,
    paddingBottom: setting?.header?.paddingBottom,
  };

  return (
    <>
      <style>{`
        .resume-header {
          width: 100%;
          background-color: ${config.background};
          padding-bottom: ${px(config.paddingBottom)};
          --header-gap: ${px(config.gap)};
          --name-size: ${px(config.nameSize)};
          --name-weight: ${config.nameWeight};
          --name-color: ${config.nameColor};
          --title-size: ${px(config.titleSize)};
          --title-weight: ${config.titleWeight};
          --title-color: ${config.titleColor};
          --meta-size: ${px(config.metaTextSize)};
          --meta-color: ${config.metaTextColor}; 
        } 

        .resume-header:focus-within { 
          outline: 5px solid #ffffff;
          background: #dcdbe0 !important;
        }

        .resume-header:focus-within > .section-tools {
          display: flex;
        }

        .resume-header.layout-split .header-content-wrapper {
          flex-direction: row;
          justify-content: space-between;
          text-align: left;
        }

        .resume-header.layout-reverse .header-content-wrapper {
          flex-direction: row-reverse;
          justify-content: space-between;
          text-align: left;
        }

        .resume-header.layout-center .header-content-wrapper {
          flex-direction: column-reverse;
          align-items: center;
          text-align: center;
        }

        .resume-header.layout-center .contact-info-grid {
          justify-content: center;
        }
 

        .resume-header .header-content-wrapper {
          display: flex;
          align-items: flex-start;
          gap: var(--header-gap);
        }

        .resume-header .header-text-block {
          flex: 1;
        }

        .resume-header .header-text-block .resume-name {
          font-size: var(--name-size);
          font-weight: var(--name-weight);
          letter-spacing: 0.5px;
          color: var(--name-color);
          margin: 0 0 4px 0;
          line-height: 1.1;
        }

        .resume-header .header-text-block .resume-title {
          font-size: var(--title-size);
          font-weight: var(--title-weight);
          color: var(--title-color);
          margin: 0 0 16px 0;
        }

        .resume-header .header-text-block .contact-info-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 20px;
        }

        .resume-header .header-text-block .contact-info-grid .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: var(--meta-size);
          color: var(--meta-color);
        }

        .resume-header .header-text-block .contact-info-grid .contact-item .contact-icon {
          font-size: 13px;
          opacity: 0.7;
        }   
  
      `}</style>

      <header
        className={`resume-header layout-${config.layout} active-focus`}
        tabIndex={0}
      >
        <SubSectionToolBar variant="subsection" propertyPath="header" />

        <div className="header-content-wrapper">
          <div className="header-text-block">
            {resumeData.header.fullName.isVisible && (
              <InputField
                tag="h1"
                name={"header.fullName.content"}
                className="resume-name"
              />
            )}
            {resumeData.header.headline.isVisible && (
              <InputField
                tag="h2"
                name={"header.headline.content"}
                className="resume-title"
              />
            )}

            <div className="contact-info-grid">
              {resumeData.header.phone.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <InputField tag="span" name={"header.phone.content"} />
                </div>
              )}
              {resumeData.header.email.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <InputField tag="span" name={"header.email.content"} />
                </div>
              )}
              {resumeData.header.website.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">🔗</span>
                  <InputField tag="span" name={"header.website.content"} />
                </div>
              )}
              {resumeData.header.github.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">🔗</span>
                  <InputField tag="span" name={"header.github.content"} />
                </div>
              )}
              {resumeData.header.location.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <InputField tag="span" name={"header.location.content"} />
                </div>
              )}
              {resumeData.header.dob.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">📅</span>
                  <InputField tag="span" name={"header.dob.content"} />
                </div>
              )}
            </div>
          </div>
          <ImgPreview
            rootPath="header.picture"
            placeholder={`
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTMlUueMhaERNUMQGPftBgPnFK3C6u1-By5TcC7Jo7g&s=10" alt=""/>
              `}
            styles={{
              size: px(config.imageSize),
              radius:
                typeof config.imageRadius === "number"
                  ? px(config.imageRadius)
                  : config.imageRadius,
            }}
          />
        </div>
      </header>
    </>
  );
};

export default Index;
