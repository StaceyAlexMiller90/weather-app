<template>
  <div
    class="bg"
    v-bind:class="{ defaultCol: !city }"
    v-bind:style="{ background: city && colForLocation }"
  >
    <Form
      class="rectangle2-14"
      v-bind:class="{ emptyPage: !city, resultsPage: city }"
    />
    <Results class="results" v-if="city" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Form from './Form.vue'
import Results from './Results.vue'
import { mapState, mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapState('appState', ['appLoading']),
    ...mapState('locationWeather', ['city', 'countryCode', 'tenDayForecast']),
    ...mapGetters('locationWeather', ['averageTempTenDays', 'colForLocation'])
  },
  components: {
    Form,
    Results
  }
})
export default class Weather extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.emptyPage {
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.resultsPage {
  left: 404px;
  top: 194px;
}
.rectangle2-14 {
  /* Rectangle 2.14 */
  position: absolute;
  width: 632px;
  height: 92px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #f8f8f8;
  box-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
  border-radius: 16px;
}

.defaultCol {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    linear-gradient(
      133.86deg,
      #102f7e -11.47%,
      #0c8dd6 3.95%,
      #1aa0ec 19.37%,
      #60c6ff 34.78%,
      #9bdbff 50.19%,
      #b4deda 65.61%,
      #ffd66b 81.02%,
      #ffc178 96.44%,
      #fe9255 111.85%
    );
}
.bg {
  /* bg */
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
}

.results {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 171px;
  display: flex;
  justify-content: center;
  top: 334px;
}
</style>
