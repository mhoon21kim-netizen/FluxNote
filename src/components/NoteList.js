import React from 'react';
import './NoteList.css';
import NoteItem from './NoteItem';

function NoteList({ notes, selectedNote, onSelectNote, onDeleteNote }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h5 className="text-lg font-semibold text-gray-800 flex items-center">
          노트 목록{' '}
          <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {notes.length}
          </span>
        </h5>
      </div>
      <div className="flex-1 overflow-y-auto">
        {notes.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="mb-2">노트가 없습니다.</p>
            <p className="text-sm">새 노트를 만들어보세요!</p>
          </div>
        ) : (
          <div className="p-2">
            {notes.map(note => (
              <NoteItem
                key={note.id}
                note={note}
                isSelected={selectedNote && selectedNote.id === note.id}
                onSelect={() => onSelectNote(note)}
                onDelete={() => onDeleteNote(note.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteList;

