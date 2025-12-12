import React, { useState, useEffect } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import SearchBar from './components/SearchBar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 로그인 상태 확인
  useEffect(() => {
    const currentUser = localStorage.getItem('memoAppCurrentUser');
    if (currentUser) {
      try {
        const parsedUser = JSON.parse(currentUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('사용자 정보를 불러오는 중 오류 발생:', error);
      }
    }
  }, []);

  // 사용자별 노트 불러오기
  useEffect(() => {
    if (user) {
      const savedNotes = localStorage.getItem(`memoAppNotes_${user.id}`);
      if (savedNotes) {
        try {
          const parsedNotes = JSON.parse(savedNotes);
          setNotes(parsedNotes);
        } catch (error) {
          console.error('노트를 불러오는 중 오류 발생:', error);
        }
      } else {
        setNotes([]);
      }
    }
  }, [user]);

  // 노트가 변경될 때마다 사용자별로 로컬 스토리지에 저장
  useEffect(() => {
    if (user && (notes.length > 0 || localStorage.getItem(`memoAppNotes_${user.id}`))) {
      localStorage.setItem(`memoAppNotes_${user.id}`, JSON.stringify(notes));
    }
  }, [notes, user]);

  // 새 노트 생성
  const handleCreateNote = () => {
    const newNote = {
      id: Date.now(),
      title: '',
      content: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
  };

  // 노트 업데이트
  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map(note =>
      note.id === updatedNote.id
        ? { ...updatedNote, updatedAt: new Date().toISOString() }
        : note
    );
    setNotes(updatedNotes);
    setSelectedNote(updatedNote);
  };

  // 노트 삭제
  const handleDeleteNote = (noteId) => {
    if (window.confirm('이 노트를 삭제하시겠습니까?')) {
      const filteredNotes = notes.filter(note => note.id !== noteId);
      setNotes(filteredNotes);
      if (selectedNote && selectedNote.id === noteId) {
        setSelectedNote(null);
      }
    }
  };

  // 검색 필터링
  const filteredNotes = notes.filter(note => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query)
    );
  });

  // 로그인 처리
  const handleLogin = (userData) => {
    setUser(userData);
    setShowSignup(false);
  };

  // 회원가입 처리
  const handleSignup = (userData) => {
    setUser(userData);
    setShowSignup(false);
  };

  // 로그아웃 처리
  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('memoAppCurrentUser');
      setUser(null);
      setNotes([]);
      setSelectedNote(null);
      setSearchQuery('');
    }
  };

  // 로그인되지 않은 경우 인증 화면 표시
  if (!user) {
    return showSignup ? (
      <Signup onSignup={handleSignup} onSwitchToLogin={() => setShowSignup(false)} />
    ) : (
      <Login onLogin={handleLogin} onSwitchToSignup={() => setShowSignup(true)} />
    );
  }

  // 로그인된 경우 메모 앱 표시
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold">📝 메모 앱</h1>
              <span className="hidden md:block text-blue-100">
                안녕하세요, <span className="font-semibold text-white">{user.username}</span>님!
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCreateNote}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span className="mr-1">+</span> 새 노트
              </button>
              <button
                onClick={handleLogout}
                className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="flex-1 flex overflow-hidden">
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-white border-r border-gray-200 flex flex-col">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <NoteList
            notes={filteredNotes}
            selectedNote={selectedNote}
            onSelectNote={setSelectedNote}
            onDeleteNote={handleDeleteNote}
          />
        </aside>
        
        <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
          {selectedNote ? (
            <NoteEditor
              note={selectedNote}
              onUpdateNote={handleUpdateNote}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">📄</div>
                <p className="text-xl">노트를 선택하거나 새 노트를 만들어보세요!</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

