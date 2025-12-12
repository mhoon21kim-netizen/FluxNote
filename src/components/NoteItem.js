import React from 'react';
import './NoteItem.css';

function NoteItem({ note, isSelected, onSelect, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return date.toLocaleTimeString('ko-KR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    } else if (diffDays === 1) {
      return '어제';
    } else if (diffDays < 7) {
      return `${diffDays}일 전`;
    } else {
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  };

  const preview = note.content.length > 100 
    ? note.content.substring(0, 100) + '...' 
    : note.content;

  const title = note.title || '제목 없음';

  return (
    <div
      className={`mb-2 bg-white rounded-lg shadow-sm border-2 p-4 cursor-pointer transition-all hover:shadow-md ${
        isSelected 
          ? 'border-blue-500 shadow-md bg-blue-50' 
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start mb-2">
        <h6 className="text-base font-semibold text-gray-800 flex-1 mr-2 line-clamp-1">
          {title}
        </h6>
        <button
          className="text-red-500 hover:text-red-700 text-xl font-bold leading-none p-0 min-w-[24px]"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          aria-label="노트 삭제"
        >
          ×
        </button>
      </div>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
        {preview || '내용 없음'}
      </p>
      <p className="text-gray-400 text-xs">
        {formatDate(note.updatedAt)}
      </p>
    </div>
  );
}

export default NoteItem;

