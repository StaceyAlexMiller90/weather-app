<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Weather />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Weather from '../src/components/Weather.vue'

@Component({
  components: {
    Weather
  }
})
export default class App extends Vue {}
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
</style>
