<script setup>
import { t, availableLanguages, setLanguage, currentLanguageCode } from './locale/language'
</script>

<template>
  <h1>
    {{ t.helloWorld }}
  </h1>
  <select @change="setLanguage($event.target.value)" v-model="currentLanguageCode">
    <option v-for="lang in availableLanguages" :key="lang.code" :value="lang.code">
      {{ lang.name }}
    </option>
  </select>
</template>
