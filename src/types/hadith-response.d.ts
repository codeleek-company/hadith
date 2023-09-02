declare interface HadithResponse {
  data: {
    collection: string;
    bookNumber: string;
    chapterId: string;
    hadithNumber: string;
    hadith: [
      {
        lang: string;
        chapterNumber: number;
        chapterTitle: string;
        urn: number;
        body: string;
        grades: [];
      },
      {
        lang: string;
        chapterNumber: number;
        chapterTitle: string;
        urn: number;
        body: string;
        grades: [];
      }
    ];
  };
}

export default HadithResponse;
