// 多语言实例化文件
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookie from 'js-cookie'
import elementZH from 'element-ui/lib/locale/lang/zh-CN'
import elementEN from 'element-ui/lib/locale/lang/en'
import customZH from './zh' // 自定义语言包
import customEN from './en'
Vue.use(VueI18n)
export default new VueI18n({
// i18n选项
// locale决定当前的多语言类型
  locale: Cookie.get('language') || 'zh',
  messages: {
    zh: {
      ...elementZH,
      ...customZH
    },
    en: {
      ...elementEN,
      ...customEN
    }
  }
})
