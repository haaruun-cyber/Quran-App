import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, BarChart2, MessageSquare, Home, Menu, X, Dot, CirclePile } from 'lucide-react';

const Leyout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/' },
    { icon: <BookOpen size={20} />, label: 'Read Quran', path: '/reader/1' },
    { icon: <CirclePile  size={20} />, label: 'Tasbih', path: '/Tasbih' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 overflow-hidden">
      <aside className="hidden md:flex flex-col w-64 bg-emerald-900 text-white transition-all duration-300">
        <div className="p-6">
          <h1 className="text-xl font-bold flex items-center gap-2 tracking-tight">
            <span className="text-amber-400 font-serif text-2xl">📖</span>
            Quran-App
          </h1>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path || (item.path.startsWith('/reader') && location.pathname.startsWith('/reader'))
                  ? 'bg-emerald-800 text-amber-400 font-semibold shadow-inner'
                  : 'hover:bg-emerald-800/50'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-emerald-800">
          <p className="text-xs text-emerald-300 opacity-60">Powered by QuranEnc & Gemini</p>
        </div>
      </aside>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 w-64 bg-emerald-900 text-white z-50 transform transition-transform duration-300 md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Quran-App</h1>
          <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
        </div>
        <nav className="px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                location.pathname === item.path ? 'bg-emerald-800 text-amber-400' : 'hover:bg-emerald-800/50'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 md:px-10 sticky top-0 z-30">
          <button className="md:hidden p-2 -ml-2 text-emerald-900" onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500">Welcome to your spiritual journey</span>
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold border-2 border-emerald-200">
              U
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Leyout;
