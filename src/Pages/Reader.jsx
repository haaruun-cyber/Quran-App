
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSuraTranslation } from '../services/api';
// import { getVerseInsight } from '../services/gemini';
import { SURA_LIST, DEFAULT_TRANSLATIONS } from '../constants';
import { ChevronLeft, ChevronRight, Sparkles, Loader2, Info, Share2, BookMarked } from 'lucide-react';

const Reader = () => {
  const { suraId } = useParams();
  const navigate = useNavigate();
  const currentSuraId = parseInt(suraId || '1');
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTranslation, setSelectedTranslation] = useState(DEFAULT_TRANSLATIONS[0].key);
  const [activeInsightId, setActiveInsightId] = useState(null);
  const [insightContent, setInsightContent] = useState(null);
  const [insightLoading, setInsightLoading] = useState(false);
  const [transalitions, settranslations] = useState([]);
//   console.log(transalitions)

  const currentSura = SURA_LIST.find(s => s.id === currentSuraId) || SURA_LIST[0];

  useEffect(() => {
    const loadSura = async () => {
      setLoading(true);
      try {
        const data = await fetchSuraTranslation(currentSuraId, selectedTranslation);
        setVerses(data.result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadSura();
    const fetchtranslitions = async () => {
        try {
            const url = "https://quranenc.com/api/v1/translations";
            const res = await fetch(url);
            const data = await res.json();
            settranslations(data.translations);
            // console.log(data.translations);
        } catch (error) {
            console.error(error.message)
        }
    }
    fetchtranslitions();
  }, [currentSuraId, selectedTranslation]);

  const nextSura = () => {
    if (currentSuraId < 114) navigate(`/reader/${currentSuraId + 1}`);
  };

  const prevSura = () => {
    if (currentSuraId > 1) navigate(`/reader/${currentSuraId - 1}`);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
        <p className="text-slate-500 font-medium">Preparing the sacred text...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={prevSura} disabled={currentSuraId === 1} className="p-2 hover:bg-slate-100 rounded-lg disabled:opacity-30">
            <ChevronLeft size={20} />
          </button>
          <div className="text-center min-w-30">
            <h2 className="text-lg font-bold text-emerald-900">{currentSura.name_en}</h2>
            <p className="text-xs text-slate-500">{currentSura.name} • {currentSura.verses_count} Verses</p>
          </div>
          <button onClick={nextSura} disabled={currentSuraId === 114} className="p-2 hover:bg-slate-100 rounded-lg disabled:opacity-30">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <select 
            value={selectedTranslation}
            onChange={(e) => setSelectedTranslation(e.target.value)}
            className="text-sm bg-slate-50 border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {transalitions.map(t => (
              <option key={t.key} value={t.key}>{t.title} ({t.language_iso_code})</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {currentSuraId !== 1 && currentSuraId !== 9 && (
          <div className="text-center py-10 arabic-text text-4xl text-emerald-900">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
        )}
        {verses.map((verse) => (
          <div key={verse.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">{currentSuraId}:{verse.aya}</span>
                <div className="flex items-center gap-3">
                  <button className="hover:text-emerald-600 transition-colors"><BookMarked size={16}/></button>
                  <button className="hover:text-emerald-600 transition-colors"><Share2 size={16}/></button>
                </div>
              </div>

              <div className="arabic-text text-3xl md:text-4xl leading-loose text-right text-slate-800">
                {verse.arabic_text}
              </div>

              <div className="border-t border-slate-50 pt-6">
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  {verse.translation}
                </p>
                {verse.footnotes && (
                  <p className="mt-2 text-xs text-slate-400 bg-slate-50 p-2 rounded-md">
                    <Info size={12} className="inline mr-1 mb-1" /> {verse.footnotes.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </div>

              

              {activeInsightId === verse.id && (
                <div className="mt-4 p-5 bg-amber-50 border border-amber-100 rounded-xl animate-slideDown">
                  <h4 className="text-amber-800 text-sm font-bold flex items-center gap-2 mb-2">
                    <Sparkles size={14} /> AI Analysis
                  </h4>
                  {insightLoading ? (
                    <div className="flex items-center gap-2 text-amber-600 text-sm">
                      <Loader2 size={14} className="animate-spin" />
                      Gemini is contemplating the verse...
                    </div>
                  ) : (
                    <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">
                      {insightContent}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reader;
