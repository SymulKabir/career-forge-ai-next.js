'use client';

import React, { useState, useRef } from 'react';
import {
  RotateCcw,
  RotateCw,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

export default function CvEditor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [charCount, setCharCount] = useState<number>(0);
  const MAX_CHARS = 2000;

  // Execute rich text formatting commands
  const executeCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setCharCount(editorRef.current.innerText.length);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      setCharCount(editorRef.current.innerText.length);
    }
  };

  return (
    <>
      <div className="cv-editor-wrapper">
        <div className="editor-card">
          {/* Top Toolbar */}
          <div className="toolbar">
            <div className="toolbar-group">
              <button
                type="button"
                onClick={() => executeCommand('undo')}
                title="Undo"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                onClick={() => executeCommand('redo')}
                title="Redo"
              >
                <RotateCw size={16} />
              </button>
            </div>

            <div className="toolbar-divider" />

            <div className="toolbar-group">
              <button
                type="button"
                onClick={() => executeCommand('bold')}
                title="Bold"
              >
                <Bold size={16} />
              </button>
              <button
                type="button"
                onClick={() => executeCommand('italic')}
                title="Italic"
              >
                <Italic size={16} />
              </button>
              <button
                type="button"
                onClick={() => executeCommand('underline')}
                title="Underline"
              >
                <Underline size={16} />
              </button>
              <button
                type="button"
                onClick={() => executeCommand('strikeThrough')}
                title="Strikethrough"
              >
                <Strikethrough size={16} />
              </button>
            </div>

            <div className="toolbar-divider" />

            <div className="toolbar-group">
              <button
                type="button"
                onClick={() => executeCommand('justifyLeft')}
                title="Align Left"
              >
                <AlignLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => executeCommand('justifyCenter')}
                title="Align Center"
              >
                <AlignCenter size={16} />
              </button>
              <button
                type="button"
                onClick={() => executeCommand('justifyRight')}
                title="Align Right"
              >
                <AlignRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => executeCommand('justifyFull')}
                title="Justify"
              >
                <AlignJustify size={16} />
              </button>
            </div>

            <div className="toolbar-divider" />

            <div className="toolbar-group">
              <button
                type="button"
                onClick={() => executeCommand('insertUnorderedList')}
                title="Bullet List"
              >
                <List size={16} />
              </button>
              <button
                type="button"
                onClick={() => executeCommand('insertOrderedList')}
                title="Numbered List"
              >
                <ListOrdered size={16} />
              </button>
            </div>
          </div>

          {/* Editable Content Area */}
          <div
            ref={editorRef}
            className="editor-content"
            contentEditable
            onInput={handleInput}
            suppressContentEditableWarning={true}
          >
            <p>
              Lead the development and technical direction of production web applications. Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB. Design, configure, and maintain Linux-based production servers. Manage application deployment pipelines and production releases. Develop backend APIs, microservices, and real-time communication systems.
            </p>
            <ul>
              <li>cation systems f</li>
              <li>sf</li>
              <li>sdfs</li>
              <li>df</li>
              <li>sd</li>
            </ul>
            <p>
              or production applications. Mentor junior developers and contribute to architecture decisions, code quality, and development standards
            </p>
          </div>

          {/* Bottom Action Footer */}
          <div className="editor-footer">
            <div className="footer-actions">
              <button type="button" className="ai-btn primary">
                <Sparkles size={14} /> Writing with AI
              </button>
              <button type="button" className="ai-btn secondary">
                AI assistant <ChevronDown size={14} />
              </button>
            </div>
            <div className="char-counter">
              {charCount} / {MAX_CHARS}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Component Styles */}
      <style jsx>{`
        .cv-editor-wrapper {
          display: flex;
          justify-content: center;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .editor-card {
          width: 100%;
          max-width: 800px;
          background: #ffffff;
          border: 1.5px solid #dbe2ef;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Toolbar Styles */
        .toolbar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: #fafbfc;
          border-bottom: 1px solid #edf2f7;
          flex-wrap: wrap;
        }

        .toolbar-group {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .toolbar-divider {
          width: 1px;
          height: 20px;
          background: #e2e8f0;
          margin: 0 4px;
        }

        .toolbar button {
          background: transparent;
          border: none;
          padding: 6px;
          border-radius: 6px;
          color: #4a5568;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
        }

        .toolbar button:hover {
          background: #edf2f7;
          color: #1a202c;
        }

        /* Editable Workspace */
        .editor-content {
          padding: 20px 24px;
          min-height: 220px;
          font-size: 15px;
          line-height: 1.6;
          color: #2d3748;
          outline: none;
          overflow-y: auto;
        }

        .editor-content ul,
        .editor-content ol {
          padding-left: 24px;
          margin: 10px 0;
        }

        .editor-content li {
          margin-bottom: 4px;
        }

        /* Footer Bar */
        .editor-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: #fafbfc;
          border-top: 1px solid #edf2f7;
        }

        .footer-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ai-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 20px;
          cursor: pointer;
          border: none;
          transition: background 0.2s;
        }

        .ai-btn.primary {
          background: #e0f2fe;
          color: #0369a1;
        }

        .ai-btn.primary:hover {
          background: #bae6fd;
        }

        .ai-btn.secondary {
          background: #f1f5f9;
          color: #334155;
        }

        .ai-btn.secondary:hover {
          background: #e2e8f0;
        }

        .char-counter {
          font-size: 13px;
          color: #64748b;
        }
      `}</style>
    </>
  );
}