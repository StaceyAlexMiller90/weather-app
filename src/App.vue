<template>
  <div id="app">
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
html {
  font-family: Poppins;
}
</style>
