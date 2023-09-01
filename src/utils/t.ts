interface LocaleData {
  test: string;
}

class T {
  lang: string;
  langData: LocaleData;
  constructor(lang: string) {
    this.lang = lang;
    try {  this.langData = require(`@/app/locales/${this.lang}.json`) } 
    catch { this.langData = require("@?app/locales/ar.json") }
  }
  translate(keyword: string) {
    // @ts-ignore
    return this.langData[keyword];
    // return keyword;
  }
}

export default T;
