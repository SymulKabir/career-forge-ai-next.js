import React from "react";
import SubSectionToolBar from "../SubSectionToolBar";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";
import { useResume } from "../../../../hooks";
import InputField from "../InputField";

const Index: React.FC = () => {
  const { setting, resumeData } = useResumeContext();
  const { getResumeValue } = useResume();

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
    imageSize: setting?.header?.imageSize,
    imageRadius: setting?.header?.imageRadius,
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
          --img-size: ${px(config.imageSize)};
          --img-radius: ${config.imageRadius};
        } 

        .resume-header:focus-within { 
          outline: 5px solid #ffffff;
          background: #dcdbe0 !important;
        }

        .resume-header:focus-within > .section-tools {
          display: flex;
        }

        /* Layout Variations */
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

        .resume-header.layout-minimal .header-image-container {
          display: none;
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

        .resume-header .header-image-container {
          flex-shrink: 0;
          width: var(--img-size);
          height: var(--img-size);
          border-radius: var(--img-radius);
          overflow: hidden;
          background-color: #f3f4f6;
          border: 2px solid #e5e7eb;
          position: relative;
        }

        .resume-header .header-image-container .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .resume-header .header-image-container .profile-img-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <header
        className={`resume-header layout-${config.layout} active-focus`}
        tabIndex={0}
      >
        <SubSectionToolBar variant="subsection" propertyPath="personalInfo" />

        <div className="header-content-wrapper">
          <div className="header-text-block">
            {resumeData.personalInfo.fullName.isVisible && (
              <InputField
                tag="h1"
                name={"personalInfo.fullName.content"}
                className="resume-name"
              />
            )}
            {resumeData.personalInfo.headline.isVisible && (
              <InputField
                tag="h2"
                name={"personalInfo.headline.content"}
                className="resume-title"
              />
            )}

            <div className="contact-info-grid">
              {resumeData.personalInfo.phone.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <InputField tag="span" name={"personalInfo.phone.content"} />
                </div>
              )}
              {resumeData.personalInfo.email.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <InputField tag="span" name={"personalInfo.email.content"} />
                </div>
              )}
              {resumeData.personalInfo.website.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">🔗</span>
                  <InputField
                    tag="span"
                    name={"personalInfo.website.content"}
                  />
                </div>
              )}
              {resumeData.personalInfo.github.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">🔗</span>
                  <InputField tag="span" name={"personalInfo.github.content"} />
                </div>
              )}
              {resumeData.personalInfo.location.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <InputField
                    tag="span"
                    name={"personalInfo.location.content"}
                  />
                </div>
              )}
              {resumeData.personalInfo.dob.isVisible && (
                <div className="contact-item">
                  <span className="contact-icon">📅</span>
                  <InputField tag="span" name={"personalInfo.dob.content"} />
                </div>
              )}
            </div>
          </div>

          {resumeData.personalInfo.picture.isVisible && (
            <div className="header-image-container">
              {resumeData.personalInfo.picture.content ? (
                <img
                  src={getResumeValue("personalInfo.picture.content")}
                  alt={getResumeValue("personalInfo.fullName.content")}
                  className="profile-img"
                />
              ) : (
                <div className="profile-img-placeholder">
                  <div className="avatar-silhouette" />
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Index;
