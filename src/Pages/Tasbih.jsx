import React, { useState, useEffect } from 'react';
import { Minus, Plus, RotateCcw, Book, ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';

const Tasbih = () => {
  const [count, setCount] = useState(0);
  const [selectedDhikr, setSelectedDhikr] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('short');
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto close sidebar on mobile
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const dhikrData = {
    short: [
      {
        id: 1,
        arabic: "بِسْمِ اللَّهِ",
        transliteration: "Bismillah",
        translation: "In the name of Allah.",
        hadith: "Abu al-Malih reported: I was riding on a mount behind the Prophet (ﷺ). It stumbled. Thereupon I said: May the devil perish! He said: do not say; may the devil perish! For you say that, he will swell so much so that he will be like a house, and say: by my power. But say: in the name of Allah; for when you say that, he will diminish so much so that he will be like a fly. (Sunan Abi Dawud 4982)",
        reference: "Sunan Abi Dawud 4982"
      },
      {
        id: 2,
        arabic: "سُبْحَانَ اللَّهِ",
        transliteration: "Subhanallah",
        translation: "Allah is free from imperfection.",
        hadith: "Anas bin Malik narrated that Umm Sulaim came upon the Prophet (ﷺ) and said: 'Teach me some words that I can say in my Salat.' So he said: 'Mention Allah's Greatness ten times, mention Allah's Glory ten times, and mention Allah's praise ten times. Then ask as you like.' (Jami at-Tirmidhi 481)",
        reference: "Jami at-Tirmidhi 481"
      },
      {
        id: 3,
        arabic: "ٱلْحَمْدُ لِلّٰهِ",
        transliteration: "Alhamdulillah",
        translation: "All praise is due to Allah.",
        hadith: "Abu Malik al-Ash'ari said: The Messenger of Allah (ﷺ) said: 'Purity is half of Iman. Alhamdulillah fills the scales, and subhan-Allah and Alhamdulillah fill that which is between heaven and earth.'",
        reference: "Sahih Muslim 223"
      },
      {
        id: 4,
        arabic: "اللّٰهُ أَكْبَر",
        transliteration: "Allahu Akbar",
        translation: "Allah is Greatest.",
        hadith: "Jabir bin `Abdullah said: Whenever we went up a place we would say, 'Allahu-Akbar', and whenever we went down a place we would say, 'Subhan-Allah.'",
        reference: "Sahih al-Bukhari 2994"
      },
      {
        id: 5,
        arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ",
        transliteration: "La ilaha illallah",
        translation: "There is none worthy of worship except Allah",
        hadith: "Jabir bin 'Abdullah said: 'I heard the Messenger of Allah (ﷺ) say: The best of remembrance is La ilaha illallah, and the best of supplication is Al-Hamdu Lillah.' (Sunan Ibn Majah 3800)",
        reference: "Sunan Ibn Majah 3800"
      },
      {
        id: 6,
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        transliteration: "Subhan-Allahi wa bihamdih",
        translation: "Allah is free from imperfection and all praise is due to Him.",
        hadith: "Abu Hurairah reported: The Messenger of Allah (ﷺ) said, 'He who says: Subhan-Allahi wa bihamdih, one hundred times a day, his sins will be obliterated even if they are equal to the extent of the foam of the ocean.' (Sahih al-Bukhari 6405)",
        reference: "Sahih al-Bukhari 6405"
      },
      {
        id: 7,
        arabic: "أستغفر الله",
        transliteration: "Astaghfirullah",
        translation: "I seek forgiveness from Allah.",
        hadith: "The Messenger of Allah (ﷺ) said, 'Whoever says Astaghfirullahal-ladhi la ilaha illa huwal-Hayyul-Qayyumu wa atubu ilayhi, his sins will be forgiven even if he has fled from battle.' (Sunan Abi Dawud 1517)",
        reference: "Sunan Abi Dawud 1517"
      }
    ],
    medium: [
      {
        id: 8,
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ , سُبْحَانَ اللَّهِ الْعَظِيمِ",
        transliteration: "Subhan-Allahi wa bihamdihi, Subhan-Allahil-Azim",
        translation: "Glory be to Allah and His is the praise, (and) Allah, the Greatest is free from imperfection",
        hadith: "Abu Hurairah (ra) reported: The Messenger of Allah (ﷺ) said, 'There are two statements that are light for the tongue to remember, heavy in the Scales and are dear to the Merciful: Subhan-Allahi wa bihamdihi, Subhan-Allahil-Azim.'",
        reference: "Sahih al-Bukhari 6406, Sahih Muslim 2694"
      },
      {
        id: 9,
        arabic: "يَا حَىُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
        transliteration: "Ya hayyu ya qayyum bi-rahmatika astagheeth",
        translation: "O Living, O Self-Sustaining Sustainer! In Your Mercy do I seek relief",
        hadith: "Anas bin Malik said: 'Whenever a matter would distress him, the Prophet (ﷺ) would say: O Living, O Self-Sustaining Sustainer! In Your Mercy do I seek relief.' (Jami at-Tirmidhi 3524)",
        reference: "Jami at-Tirmidhi 3524"
      },
      {
        id: 10,
        arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ",
        transliteration: "Subhan-Allah, wal-hamdu-lillah, wa la ilaha illallah, wa Allahu Akbar",
        translation: "Glory is to Allah, praise is to Allah, none has the right to be worshiped but Allah and Allah is the Most Great.",
        hadith: "Abu Hurairah: The Messenger of Allah (ﷺ) said: 'For each one a tree will be planted for you in Paradise.' (Sunan Ibn Majah 3807)",
        reference: "Sunan Ibn Majah 3807"
      },
      {
        id: 11,
        arabic: "لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ",
        transliteration: "La hawla wa la quwwata illa billah",
        translation: "There is no power and no strength except with Allah",
        hadith: "Hazim bin Harmalah said: 'I passed by the Prophet (saas) and he said to me: O Hazim, say often: La hawla wa la quwwata illa billah, for it is one of the treasures of Paradise.' (Sunan Ibn Majah 3826)",
        reference: "Sunan Ibn Majah 3826"
      }
    ],
    long: [
      {
        id: 15,
        arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَلِيِّ الْعَظِيمِ. رَبِّ اغْفِرْ لِي",
        transliteration: "La ilaha illallah wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu, wa Huwa 'ala kulli shay'in Qadir; Subhan-Allah walhamdu lillahi, wa la ilaha illallahu, wa Allahu Akbar, wa la hawla wa la quwwata illa billahil-'Aliyil-'Azim. Rabbighfirli.",
        translation: "None has the right to be worshipped but Allah alone... O Lord, forgive me.",
        hadith: "Ubadah bin As-Samit said: 'The Messenger of Allah (ﷺ) said: Whoever wakes up in the morning and says upon waking: ... then he supplicates Rabbighfirli, he will be forgiven.' (Sunan Ibn Majah 3878)",
        reference: "Sunan Ibn Majah 3878"
      },
      {
        id: 16,
        arabic: "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        transliteration: "Allahumma Salli 'ala Muhammadin wa 'ala aali Muhammadin...",
        translation: "O Allah, send Your grace upon Muhammad and the family of Muhammad...",
        hadith: "Ka'b bin Ujrah said: 'We said: O Messenger of Allah, we have learned how to send salam upon you, but how should we send salah upon you? He said: Say: Allahumma Salli 'ala Muhammad...' (Sahih al-Bukhari 6357)",
        reference: "Sahih al-Bukhari 6357"
      }
    ]
  };

  const allDhikr = [...dhikrData.short, ...dhikrData.medium, ...dhikrData.long];
  const currentDhikr = allDhikr[selectedDhikr] || allDhikr[0];

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const selectDhikr = (index) => {
    setSelectedDhikr(index);
    setCount(0);
    // Close mobile menu after selection
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const getCategoryClasses = (category) => {
    return `px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
      selectedCategory === category
        ? 'bg-emerald-600 text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`;
  };

  const getDhikrItemClasses = (index) => {
    return `w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base ${
      selectedDhikr === index
        ? 'bg-emerald-50 border-l-4 border-emerald-600'
        : 'hover:bg-gray-50'
    }`;
  };

  // Sidebar content component (reused for both desktop and mobile)
  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-800 flex items-center gap-2">
            <Book className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="truncate">Dhikr Collection</span>
          </h2>
          {isMobile && (
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Filters - Scrollable on mobile */}
        <div className="flex gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2">
          <button 
            onClick={() => setSelectedCategory('short')}
            className={getCategoryClasses('short')}
          >
            Short
          </button>
          <button 
            onClick={() => setSelectedCategory('medium')}
            className={getCategoryClasses('medium')}
          >
            Medium
          </button>
          <button 
            onClick={() => setSelectedCategory('long')}
            className={getCategoryClasses('long')}
          >
            Long
          </button>
        </div>

        {/* Dhikr List */}
        <div className="space-y-2">
          {dhikrData[selectedCategory].map((dhikr, idx) => {
            const globalIndex = dhikr.id - 1;
            return (
              <button
                key={dhikr.id}
                onClick={() => selectDhikr(globalIndex)}
                className={getDhikrItemClasses(globalIndex)}
              >
                <div className="font-arabic text-base sm:text-lg mb-1 truncate">
                  {dhikr.arabic.length > 30 ? `${dhikr.arabic.substring(0, 25)}...` : dhikr.arabic}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 truncate">
                  {dhikr.transliteration}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50 font-sans relative">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className={`${isSidebarOpen ? 'w-72 lg:w-80 xl:w-96' : 'w-0'} bg-white shadow-xl transition-all duration-300 overflow-hidden flex flex-col`}>
          <SidebarContent />
        </div>
      )}

      {/* Mobile Sidebar (Slide-over menu) */}
      {isMobile && (
        <>
          {/* Backdrop */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          
          {/* Sliding sidebar */}
          <div className={`fixed inset-y-0 left-0 w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <SidebarContent />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-3 sm:p-4 flex items-center sticky top-0 z-30">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobile ? (
              isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />
            ) : (
              isSidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />
            )}
          </button>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 ml-2 sm:ml-4 truncate">
            Tasbih Counter Online
          </h1>
        </div>

        {/* Counter Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-3xl mx-auto">
            {/* Counter Display */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-emerald-800 mb-2 sm:mb-4">
                  {count}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Number of recitations
                </p>
              </div>

              {/* Counter Controls - Stack on mobile */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="flex gap-3 sm:gap-4">
                  <button
                    onClick={handleDecrement}
                    className="p-3 sm:p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
                    aria-label="Decrease count"
                  >
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                  </button>
                  <button
                    onClick={handleIncrement}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-full shadow-md hover:shadow-lg transition-all hover:bg-emerald-700 flex items-center gap-2 text-base sm:text-lg font-semibold"
                  >
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden xs:inline">Tap to Count</span>
                    <span className="xs:hidden">Count</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-3 sm:p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
                    aria-label="Reset counter"
                  >
                    <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* Current Dhikr Card */}
            {currentDhikr && (
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 border border-emerald-100">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-arabic mb-3 sm:mb-4 leading-loose text-emerald-900 break-words">
                    {currentDhikr.arabic}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 break-words">
                    {currentDhikr.transliteration}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 italic break-words">
                    {currentDhikr.translation}
                  </p>
                </div>

                {/* Hadith Reference */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="bg-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Book className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 mt-1 flex-shrink-0" />
                      <div className="text-sm sm:text-base">
                        <p className="text-gray-700 italic mb-2 sm:mb-3 break-words">
                          "{currentDhikr.hadith}"
                        </p>
                        <p className="text-xs sm:text-sm font-medium text-amber-800 break-words">
                          📚 {currentDhikr.reference}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasbih;