"use client";

import React, { useState, useRef } from "react";
import { CloudUpload, Eye, EyeOff, X } from "lucide-react";
import { useResume } from "../../../hooks";

type ImgPreviewProps = {
  rootPath: string;
  placeholder?: string;
  hide?: {
    upload?: boolean;
    visible?: boolean;
  };
  styles: {
    size?: string;
    radius?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: string;
    padding?: string;
  };
  fileInputRef?: any;
};

const ImgPreview: React.FC<ImgPreviewProps> = ({
  rootPath,
  placeholder,
  styles,
  hide,
  fileInputRef = null,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [positionInput, setPositionInput] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  if (!fileInputRef) {
    fileInputRef = useRef<HTMLInputElement>(null);
  }
  const { getResumeValue, updateResume } = useResume();
  const visiblePath = `${rootPath}.isVisible`;
  const imgContentPath = `${rootPath}.imgContent`;
  const positionPath = `${rootPath}.position`;
  const isVisible = getResumeValue(visiblePath);
  const imgContent = getResumeValue(imgContentPath);
  const position = getResumeValue(positionPath);
  if (!isVisible) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setZoom(1);
        setPositionInput({ x: 0, y: 0 });
        setIsModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - positionInput.x,
      y: e.clientY - positionInput.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPositionInput({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleSaveImage = () => {
    if (selectedImage) {
      updateResume({
        propertyPath: rootPath,
        value: {
          ...getResumeValue(rootPath),
          imgContent: selectedImage,
          position: {
            zoom: zoom,
            ...positionInput,
          },
        },
      });
      setIsModalOpen(false);
    }
  };
  const togglePictureVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateResume({
      propertyPath: visiblePath,
      value: !getResumeValue(visiblePath),
    });
  };

  return (
    <>
      <style>{`
       .preview-img-container {
          position: relative;
        }

        .preview-img-container .img-inner-container {
          flex-shrink: 0;  
          overflow: hidden;
          background-color: #f3f4f6;
          border: 2px solid #e5e7eb;
          position: relative;
        }

       .preview-img-container .img-inner-container .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(${position.x}px, ${position.y}px) scale(${position.zoom});
          transform-origin: center center;
        }

        .preview-img-container .img-inner-container .preview-img-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          img, svg{
            width: 100%;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
          }
        }

        .image-hover-actions {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          min-width: 100px;
          min-height: 100px;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          opacity: 0;
          transition: opacity 0.2s ease-in-out; 
          color: #FFF;
          // border-radius: ${styles.radius};
        }

        .preview-img-container:hover .image-hover-actions {
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
          color: #fff !important;
          border: 1px solid #fff;
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
          width: 150px;
          height: 150px;
          margin: 0 auto 16px auto;
          border-radius: 8px;
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
          transform: translate(${positionInput.x}px, ${positionInput.y}px) scale(${zoom});
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

      {/* Profile Image Container */}
      <div className="preview-img-container">
        <div
          className="img-inner-container"
          style={{
            width: styles?.size ?? "40px",
            height: styles?.size ?? "40px",
            borderRadius: styles?.radius ?? "6px",
            backgroundColor: styles?.backgroundColor ?? "#f3f4f6",
            borderColor: styles?.borderColor ?? "#e5e7eb",
            borderWidth: styles?.borderWidth ?? "1px",
            padding: styles?.padding ?? "0px",
          }}
        >
          {imgContent ? (
            <img src={imgContent} alt={"image"} className="profile-img" />
          ) : (
            <div className="preview-img-placeholder">
              {placeholder ? (
                <div dangerouslySetInnerHTML={{ __html: placeholder }} />
              ) : (
                <div className="avatar-silhouette" />
              )}
            </div>
          )}
        </div>

        <div
          className="image-hover-actions"
          style={{
            borderRadius: styles.radius,
          }}
        >
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="action-btn upload-action-btn"
            title="Upload Photo"
            onClick={() => fileInputRef.current?.click()}
          >
            <CloudUpload size={18} />
          </button>
          {!hide?.visible && (
            <button
              type="button"
              className="action-btn visibility-action-btn"
              title={isVisible ? "Hide Photo" : "Show Photo"}
              onClick={togglePictureVisibility}
            >
              {isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          )}
        </div>
      </div>

      {/* Adjustment Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Adjust Image</h3>
              <button
                type="button"
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
                    draggable={false}
                  />
                )}
              </div>
              <p
                style={{ fontSize: "12px", color: "#666", margin: "0 0 8px 0" }}
              >
                Drag image to reposition, use slider to zoom
              </p>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.05"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="zoom-slider"
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="modal-btn btn-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="modal-btn btn-primary"
                onClick={handleSaveImage}
              >
                Save Picture
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgPreview;
