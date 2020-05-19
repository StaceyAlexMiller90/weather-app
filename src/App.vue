<template>
  <div id="app">
    <Weather />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Weather from '../src/components/Weather.vue'
// import * as VueCountryCode from 'vue-country-code'

// Vue.use(VueCountryCode)

@Component({
  components: {
    Weather
  }
})
export default class App extends Vue {}
</script>

<style></style>
