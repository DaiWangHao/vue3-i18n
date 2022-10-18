import { createI18n } from "vue-i18n";
import zh from "./lang/zh";
import en from "./lang/en";

const messages = {
    en,
    zh
};

const language = (navigator.language || 'en').toLocaleLowerCase();//获取浏览器语言
const i18n = createI18n({
    locale:localStorage.getItem('lang') || language.split('-')[0] || 'en',
    messages
})

export default i18n;