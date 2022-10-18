<template>
  <div>{{$t('login.userName')}}</div>
  <div>{{$t('姓名')}}</div>


  <button class="btn" @click="changeLang('zh')">zh</button>
  <button class="btn" @click="changeLang('en')">en</button>
</template>

<script lang="js">
import i18n from './i18n'

export default {
  name: 'App',
  setup() {

    const changeLang = (lang) => {
      i18n.global.locale = lang;
      localStorage.setItem('lang',lang)
    }

    return {
      changeLang
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn{
  width: 100px;
  height: 30px;
}
</style>
