import React, { useState, useEffect } from 'react';
import './NoteEditor.css';

function NoteEditor({ note, onUpdateNote }) {
  const [title, setTitle] = useState(note.title || '');
  const [content, setContent] = useState(note.content || '');

  useEffect(() => {
    setTitle(note.title || '');
    setContent(note.content || '');
  }, [note]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    onUpdateNote({ ...note, title: newTitle });
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    onUpdateNote({ ...note, content: newContent });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="h-full bg-white rounded-lg shadow-md border border-gray-200 flex flex-col">
      <div className="bg-white border-b border-gray-200 p-6">
        <input
          type="text"
          className="w-full text-2xl font-bold border-0 p-0 mb-3 focus:outline-none focus:ring-0"
          placeholder="제목을 입력하세요..."
          value={title}
          onChange={handleTitleChange}
        />
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            생성: {formatDate(note.createdAt)}
          </span>
          {note.updatedAt !== note.createdAt && (
            <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              수정: {formatDate(note.updatedAt)}
            </span>
          )}
        </div>
      </div>
      <div className="flex-1 p-6">
        <textarea
          className="w-full h-full border-0 p-0 focus:outline-none focus:ring-0 resize-none text-base leading-relaxed"
          placeholder="내용을 입력하세요..."
          value={content}
          onChange={handleContentChange}
          style={{ 
            minHeight: 'calc(100vh - 250px)'
          }}
        />
      </div>
    </div>
  );
}

export default NoteEditor;

