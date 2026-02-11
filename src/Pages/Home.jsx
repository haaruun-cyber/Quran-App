
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { SURA_LIST } from '../constants';
// import { Search, History, Star, TrendingUp, Book } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

//   const filteredSurahs = SURA_LIST.filter(s => 
//     s.name_en.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     s.id.toString() === searchTerm
//   );

  return (
    <div className="space-y-8 pb-10">
      <section className="bg-linear-to-br from-emerald-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Your Daily Journey Through the Light.</h2>
          <p className="text-emerald-100 text-lg opacity-80">Explore the divine wisdom with professional translations and advanced AI insights.</p>
          <div className="pt-4 flex gap-4">
            <button 
              onClick={() => navigate('/reader/1')}
              className="bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              {/* <Book size={20} />  */}
              Start Reading
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* {[
          { icon: <History className="text-emerald-600" />, label: 'Last Read', value: 'Al-Baqarah: 154' },
          { icon: <Star className="text-amber-500" />, label: 'Bookmarks', value: '12 Verses' },
          { icon: <TrendingUp className="text-blue-500" />, label: 'Reading Streak', value: '5 Days' },
          { icon: <Book className="text-purple-500" />, label: 'Completion', value: '8%' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-slate-50 rounded-xl">{stat.icon}</div>
            <div>
              <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
              <p className="text-lg font-bold text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))} */}
      </div>

      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-slate-800">Select a Surah</h3>
          <div className="relative">
            {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} /> */}
            <input 
              type="text" 
              placeholder="Search by name or number..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none w-full md:w-80 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* {filteredSurahs.map((surah) => (
            <button
              key={surah.id}
              onClick={() => navigate(`/reader/${surah.id}`)}
              className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all group text-left"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-700 font-bold rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {surah.id}
                </div>
                <span className="arabic-text text-2xl text-slate-400 group-hover:text-emerald-700 transition-colors">
                  {surah.name}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 group-hover:text-emerald-900 transition-colors">
                {surah.name_en}
              </h4>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-500 font-medium">
                <span className="bg-slate-50 px-2 py-1 rounded capitalize">{surah.revelation_place}</span>
                <span>•</span>
                <span>{surah.verses_count} Verses</span>
              </div>
            </button>
          ))}
          {filteredSurahs.length === 0 && (
            <div className="col-span-full py-20 text-center space-y-2">
              <p className="text-slate-500 text-lg">No surahs found matching "{searchTerm}"</p>
              <button onClick={() => setSearchTerm('')} className="text-emerald-600 font-semibold hover:underline">Clear search</button>
            </div>
          )} */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
