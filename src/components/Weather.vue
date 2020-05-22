<template>
  <div
    class="bg"
    v-bind:class="{ defaultCol: !city }"
    v-bind:style="{ background: city && colForLocation }"
  >
    <p v-if="appStatus === 'error'" class="error-message">No data found, please check city</p>
    <Form class="searchBar" v-bind:class="{ emptyPageSearch: !city, resultsPageSearch: city }" />
    <Results class="results-container" v-if="city" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Form from './Form.vue'
import Results from './Results.vue'
import { mapState, mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapState('appState', ['appLoading', 'appStatus']),
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
.error-message {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 10%;
  margin: auto;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  color: gray;
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

.searchBar {
  /* Rectangle 2.14 */
  position: absolute;
  margin: auto;
  left: 0;
  bottom: 0;
  right: 0;
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

.emptyPageSearch {
  top: 0;
}

.resultsPageSearch {
  position: relative;
  top: 23.13%;
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

.results-container {
  position: absolute;
  top: 39.8%;
  bottom: 0;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
