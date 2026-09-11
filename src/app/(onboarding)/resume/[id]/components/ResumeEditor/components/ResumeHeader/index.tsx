import React, { useState, useRef } from "react";
import SubSectionToolBar from "../SubSectionToolBar";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";
import { useResume } from "../../../../hooks";
import InputField from "../InputField";
import { CloudUpload, Eye, EyeOff, X } from "lucide-react";

const Index: React.FC = () => {
  const { setting, resumeData, setResumeData } = useResumeContext();
  const { getResumeValue } = useResume();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setZoom(1);
        setPosition({ x: 0, y: 0 });
        setIsModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    if (selectedImage) {
      setResumeData((prev: any) => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          picture: {
            ...prev.personalInfo.picture,
            content: selectedImage,
            zoom: zoom,
            position: position,
          },
        },
      }));
    }
    setIsModalOpen(false);
  };

  const togglePictureVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setResumeData((prev: any) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        picture: {
          ...prev.personalInfo.picture,
          isVisible: !prev.personalInfo.picture.isVisible,
        },
      },
    }));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const isPictureVisible = resumeData?.personalInfo?.picture?.isVisible ?? true;
  const pictureData = resumeData?.personalInfo?.picture;
  
  const currentZoom = pictureData?.zoom ?? 1;
  const currentPosition = pictureData?.position ?? { x: 0, y: 0 };

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
          --img-radius: ${typeof config.imageRadius === 'number' ? px(config.imageRadius) : config.imageRadius};
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
          position: relative;
        }

        .resume-header .header-image-container .img-inner-container {
          flex-shrink: 0;
          width: var(--img-size);
          height: var(--img-size);
          border-radius: var(--img-radius);
          overflow: hidden;
          background-color: #f3f4f6;
          border: 2px solid #e5e7eb;
          position: relative;
        }

        .resume-header .header-image-container .img-inner-container .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(${currentPosition.x}px, ${currentPosition.y}px) scale(${currentZoom});
          transform-origin: center center;
        }

        .resume-header .header-image-container .img-inner-container .profile-img-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-hover-actions {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
          border-radius: var(--img-radius);
        }

        .header-image-container:hover .image-hover-actions {
          opacity: 1;
        }

        .action-btn {
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
        }

        .upload-action-btn {
          background-color: #059669;
        }

        .visibility-action-btn {
          background-color: #e11d48;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: #ffffff;
          padding: 24px;
          border-radius: 12px;
          width: 400px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 18px;
          color: #111;
        }

        .close-modal-btn {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-body {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-preview-container {
          width: var(--img-size);
          height: var(--img-size);
          max-width: 200px;
          max-height: 200px;
          min-width: 100px;
          min-height: 100px;
          margin: 0 auto 16px auto;
          border-radius: var(--img-radius);
          overflow: hidden;
          background: #e5e7eb;
          border: 2px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          position: relative;
        }

        .modal-preview-container:active {
          cursor: grabbing;
        }

        .modal-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(${position.x}px, ${position.y}px) scale(${zoom});
          transform-origin: center center;
          user-select: none;
          pointer-events: none;
        }

        .zoom-slider {
          width: 80%;
          margin-top: 10px;
        }

        .modal-footer {
          display: flex;
          gap: 10px;
          justify-content: space-between;
        }

        .modal-btn {
          flex: 1;
          padding: 10px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid #ccc;
        }

        .btn-secondary {
          background: #fff;
          color: #333;
        }

        .btn-primary {
          background: #7c3aed;
          color: #fff;
          border: none;
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

          <div className="header-image-container">
            <div className="img-inner-container">
              {isPictureVisible && resumeData.personalInfo.picture.content ? (
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

            <div className="image-hover-actions">
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
              <button
                className="action-btn upload-action-btn"
                title="Upload Photo"
                onClick={() => fileInputRef.current?.click()}
              >
                <CloudUpload size={18} />
              </button>
              <button
                className="action-btn visibility-action-btn"
                title={isPictureVisible ? "Hide Photo" : "Show Photo"}
                onClick={togglePictureVisibility}
              >
                {isPictureVisible ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Upload photo:</h3>
              <button
                className="close-modal-btn"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <div 
                className="modal-preview-container"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="modal-preview-img"
                  />
                )}
              </div>
              <p style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
                Click and drag to reposition image. Square images work best.
              </p>
              <input
                type="range"
                min="1"
                max="3"
                step="0.05"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="zoom-slider"
              />
            </div>
            <div className="modal-footer">
              <button
                className="modal-btn btn-secondary"
                onClick={() => {
                  setIsModalOpen(false);
                  fileInputRef.current?.click();
                }}
              >
                Upload
              </button>
              <button
                className="modal-btn btn-primary"
                onClick={handleSaveImage}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;