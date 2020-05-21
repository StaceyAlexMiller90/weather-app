<template>
  <div>
    <p class="poppins header-font">{{ getDateRange.toUpperCase() }}</p>
    <p class="poppins average-temp-ten white">
      {{ averageTempTenDays }}<span class="average-temp-degrees white">°C</span>
    </p>
    <div class="poppins weekdays">
      <div v-for="day in sevenDayForecast" :key="day.date">
        <p class="header-font">
          {{
            Moment(day.date)
              .format('dddd')
              .toUpperCase()
          }}
        </p>
        <p class="weekday-temp white">
          {{ day.average }}<span class="weekday-degrees white">°C</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex'
import * as Moment from 'moment'
import { extendMoment } from 'moment-range'

Vue.prototype.Moment = Moment
const moment = extendMoment(Moment)

@Component({
  computed: {
    ...mapState('locationWeather', ['tenDayForecast']),
    ...mapGetters('locationWeather', [
      'averageTempTenDays',
      'sevenDayForecast',
      'getDateRange'
    ])
  }
})
export default class Results extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.poppins {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
}
.header-font {
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.06em;
  margin: 0;

  color: #08153e;

  opacity: 0.6;
}

.white {
  color: #ffffff;
}

.average-temp-ten {
  position: absolute;
  font-size: 120px;
  line-height: 120px;
  margin: 0;
  top: 10%;
}

.average-temp-degrees {
  position: absolute;
  left: 100%;
  top: 10.8%;
  font-size: 24px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.weekday-temp {
  margin: auto;
  display: flex;
  justify-content: center;
  font-size: 24px;
  height: 24px;
}
.weekday-degrees {
  position: relative;
  left: 5%;
  top: 10%;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.weekdays {
  position: absolute;
  margin: auto;
  width: 632px;
  top: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
