const BASE_URL = 'https://quranenc.com/api/v1';

export const fetchSuraTranslation = async (suraId, translationKey) => {
  try {
    const response = await fetch(`${BASE_URL}/translation/sura/${translationKey}/${suraId}`);
    if (!response.ok) throw new Error('Failed to fetch sura content');
    return await response.json();
  } catch (error) {
    console.error('Error fetching sura:', error);
    throw error;
  }
};

export const fetchTranslationsList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/translation/list`);
    if (!response.ok) throw new Error('Failed to fetch translations');
    const data = await response.json();
    return data.translations.map((t) => ({
      key: t.key,
      title: t.title,
      language: t.language
    }));
  } catch (error) {
    console.error('Error fetching translations list:', error);
    throw error;
  }
};
