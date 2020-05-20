<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapState('locationWeather', ['tenDayForecast']),
    ...mapGetters('locationWeather', ['averageTempTenDays'])
  }
})
export default class Results extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
