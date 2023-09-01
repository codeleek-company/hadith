declare interface HadithResponse {
  data: {
    id: string;
    title: string;
    hadeeth: string;
    attribution: string;
    grade: string;
    explanation: string;
    hints: Array;
    categories: Array;
    translations: Array;
    words_meanings: Array;
    reference: string;
  };
}

export default HadithResponse;
