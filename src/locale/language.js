import { ref, computed } from 'vue'
import en from './en'
import tr from './tr'
import ru from './ru'

// Available Languages
const availableLanguages = [
  {
    code: 'EN',
    name: 'English',
    file: en,
  },
  {
    code: 'TR',
    name: 'Türkçe',
    file: tr,
  },
  {
    code: 'RU',
    name: 'Русский',
    file: ru,
  },
  // Add more languages here
]

// Current Language Code
const currentLanguageCode = ref('EN')

// Current Language File
const t = computed(
  () => availableLanguages.find((lang) => lang.code === currentLanguageCode.value).file
)

// Set Language
const setLanguage = (code) => {
  currentLanguageCode.value = code
  localStorage.setItem('language', code)
}

// Remember Language
if (localStorage.getItem('language')) {
  setLanguage(localStorage.getItem('language'))
}

export { availableLanguages, currentLanguageCode, t, setLanguage }
