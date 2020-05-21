<template>
  <div id="app">
    <Weather />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Weather from '../src/components/Weather.vue'

Vue.use(BootstrapVue)

@Component({
  components: {
    Weather
  }
})
export default class App extends Vue {}
</script>

<style></style>
