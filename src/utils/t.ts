interface LocaleData {
  test: string;
}

class T {
  lang: string;
  langData: LocaleData;
  constructor(lang: string) {
    this.lang = lang;
    try {
      this.langData = require(`@/app/locales/${this.lang}.json`);
    } catch {
      this.langData = require("@/app/locales/en.json");
    }
  }
  translate(keyword: string) {
    // @ts-ignore
    return this.langData[keyword];
  }
}

export default T;
