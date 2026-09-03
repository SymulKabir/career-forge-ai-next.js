'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
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
} from 'lucide-react';
import useEditor from "../../hooks/useEditor";

interface EditableTextProps { 
  name?: string;
  className?: string;
  mode?: 'free' | 'description' | 'list';
}

const Index: React.FC<EditableTextProps> = ({ 
  name,
  className,
  mode = 'free'
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [charCount, setCharCount] = useState<number>(0);
  const [activeFormats, setActiveFormats] = useState<Record<string, boolean>>({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false,
    justifyFull: false,
    insertUnorderedList: false,
    insertOrderedList: false,
  });

  const MAX_CHARS = 2000;
  const { getValue, handleInputChange } = useEditor();

  // Check current selection formatting states using queryCommandState
  const updateActiveStates = useCallback(() => {
    try {
      setActiveFormats({
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
        underline: document.queryCommandState('underline'),
        strikeThrough: document.queryCommandState('strikeThrough'),
        justifyLeft: document.queryCommandState('justifyLeft'),
        justifyCenter: document.queryCommandState('justifyCenter'),
        justifyRight: document.queryCommandState('justifyRight'),
        justifyFull: document.queryCommandState('justifyFull'),
        insertUnorderedList: document.queryCommandState('insertUnorderedList'),
        insertOrderedList: document.queryCommandState('insertOrderedList'),
      });
    } catch (e) {
      // Ignore if document selection is out of focus
    }
  }, []);

  // Execute rich text formatting commands with exclusive list toggling logic
  const executeCommand = (command: string, value: string = '') => {
    // If clicking bullet list while ordered list is active, clear ordered list first (or vice versa)
    if (command === 'insertUnorderedList' && activeFormats.insertOrderedList) {
      document.execCommand('insertOrderedList', false, value);
    } else if (command === 'insertOrderedList' && activeFormats.insertUnorderedList) {
      document.execCommand('insertUnorderedList', false, value);
    }

    document.execCommand(command, false, value);
    
    if (editorRef.current) {
      setCharCount(editorRef.current.innerText.length);
    }
    updateActiveStates();
  };

  const handleInput = () => {
    if (editorRef.current) {
      setCharCount(editorRef.current.innerText.length);
    }
    updateActiveStates();
  };

  // Save data on blur (focus out)
  const handleBlur = (e) => {
    if (editorRef.current && name && handleInputChange) { 
      handleInputChange(e);
    }
  };

  // Listen to selection changes to update button active highlights dynamically
  useEffect(() => {
    const handleSelectionChange = () => {
      if (editorRef.current && editorRef.current.contains(document.activeElement)) {
        updateActiveStates();
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [updateActiveStates]);

  // Helper class function to return active or inactive styling for buttons
  const getButtonStyle = (isActive: boolean) => {
    return `w-7 h-7 border-none rounded-md cursor-pointer flex items-center justify-center transition-all active:scale-95 ${
      isActive
        ? 'bg-indigo-50 text-indigo-600 shadow-xs ring-1 ring-indigo-200 font-semibold'
        : 'bg-transparent text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-xs'
    }`;
  };

  // Smart configuration mapping for toolbar groups based on editing mode
  const toolbarGroups = [
    {
      id: 'history',
      allowedModes: ['free', 'description', 'list'],
      tools: [
        { command: 'undo', title: 'Undo', icon: <RotateCcw size={14} /> },
        { command: 'redo', title: 'Redo', icon: <RotateCw size={14} /> },
      ],
    },
    {
      id: 'typography',
      allowedModes: ['free', 'description', 'list'],
      tools: [
        { command: 'bold', title: 'Bold', icon: <Bold size={14} /> },
        { command: 'italic', title: 'Italic', icon: <Italic size={14} /> },
        { command: 'underline', title: 'Underline', icon: <Underline size={14} /> },
        { command: 'strikeThrough', title: 'Strikethrough', icon: <Strikethrough size={14} /> },
      ],
    },
    {
      id: 'alignment',
      allowedModes: ['free', 'description'], // Hidden in 'list' mode
      tools: [
        { command: 'justifyLeft', title: 'Align Left', icon: <AlignLeft size={14} /> },
        { command: 'justifyCenter', title: 'Align Center', icon: <AlignCenter size={14} /> },
        { command: 'justifyRight', title: 'Align Right', icon: <AlignRight size={14} /> },
        { command: 'justifyFull', title: 'Justify', icon: <AlignJustify size={14} /> },
      ],
    },
    {
      id: 'lists',
      allowedModes: ['free', 'list'], // Hidden in 'description' mode
      tools: [
        { command: 'insertUnorderedList', title: 'Bullet List', icon: <List size={14} /> },
        { command: 'insertOrderedList', title: 'Numbered List', icon: <ListOrdered size={14} /> },
      ],
    },
  ];

  // Filter groups that match the current mode
  const activeGroups = toolbarGroups.filter((group) => group.allowedModes.includes(mode));

  return (
    <>
      <div className="flex justify-center font-sans">
        <div className="w-full flex flex-col relative group">
          {/* Top Toolbar - Sleek, Modern, Dynamic & Clean Mapping */}
          <div className="hidden group-focus-within:flex print:hidden bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl items-center gap-1.5 p-1.5 absolute w-max max-w-full left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] z-50 shadow-xl shadow-slate-200/50 overflow-x-auto whitespace-nowrap scrollbar-none transition-all duration-200 animate-in fade-in slide-in-from-bottom-2">
            
            {activeGroups.map((group, groupIdx) => (
              <React.Fragment key={group.id}>
                {groupIdx > 0 && <div className="w-[1px] h-5 bg-slate-200/70 mx-0.5 shrink-0" />}
                <div className="flex items-center gap-0.5 bg-slate-50/80 p-0.5 rounded-lg border border-slate-100 shrink-0">
                  {group.tools.map((tool) => {
                    const isActive = activeFormats[tool.command] || false;
                    return (
                      <button
                        key={tool.command}
                        type="button"
                        onClick={() => executeCommand(tool.command)}
                        title={tool.title}
                        className={
                          tool.command === 'undo' || tool.command === 'redo'
                            ? "w-7 h-7 bg-transparent border-none rounded-md text-slate-600 cursor-pointer flex items-center justify-center transition-all hover:bg-white hover:text-indigo-600 hover:shadow-xs active:scale-95"
                            : getButtonStyle(isActive)
                        }
                      >
                        {tool.icon}
                      </button>
                    );
                  })}
                </div>
              </React.Fragment>
            ))}

          </div>

          {/* Editable Content Area */}
          <div
            ref={editorRef}
            name={name}
            type="htmlEditor"
            className={`editor-content h-max min-h-[5px] text-[15px] leading-[1.6] text-[#2d3748] outline-none overflow-y-auto ${className || ''}`}
            contentEditable
            onInput={handleInput}
            onBlur={handleBlur}
            onKeyUp={updateActiveStates}
            onMouseUp={updateActiveStates}
            suppressContentEditableWarning
            dangerouslySetInnerHTML={{
              __html: name ? getValue(name) || "" : "",
            }}
          /> 
        </div>
      </div>

      {/* Embedded Component Styles */}
      <style jsx>{`
        .editor-content :global(ul) {
          list-style-type: disc !important;
          padding-left: 22px; 
          margin: 10px 0;
        }

        .editor-content :global(ol) {
          list-style-type: decimal !important;
          padding-left: 22px;
          margin: 10px 0;
        }

        .editor-content :global(li) {
          margin-bottom: 4px;
          padding-left: 3px;
        }

        .editor-content :global(p) {
          margin: 0 0 8px;
        }

        .editor-content :global(strong) {
          font-weight: 700;
        }

        .editor-content :global(em) {
          font-style: italic;
        }
      `}</style>
    </>
  );
};

export default Index;