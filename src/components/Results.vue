<template>
  <div>
    <div class="header">
      <p class="date-range">{{ getDateRange.toUpperCase() }}</p>
      <div class="average-temp">
        <p class="average-temp-ten">
          {{ averageTempTenDays }}<span class="average-temp-degrees">°C</span>
        </p>
      </div>
    </div>
    <div class="weekdays">
      <div class="day" v-for="day in sevenDayForecast" :key="day.date">
        <p class="weekday-header">
          {{
            Moment(day.date)
              .format('dddd')
              .toUpperCase()
          }}
        </p>
        <p class="weekday-temp">{{ day.average }}</p>
        <p class="weekday-degrees">°C</p>
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
.header {
  position: absolute;
  width: 150px;
}

.date-range {
  position: absolute;
  height: 24px;
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  margin: 0;
  /* identical to box height, or 200% */

  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.06em;

  color: #08153e;

  opacity: 0.6;
}

.average-temp {
  position: absolute;
  width: 100%;
  height: auto;
}

.average-temp-ten {
  position: relative;
  height: 120px;
  top: 51px;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 120px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  justify-self: center;
  color: #ffffff;
}

.average-temp-degrees {
  position: absolute;
  left: 115px;
  top: 13px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  display: flex;
  align-items: center;

  color: #ffffff;
}

.weekday-header {
  /* position: absolute; */
  width: 59px;
  height: 24px;
  left: 400px;
  top: 553px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;

  color: #08153e;

  opacity: 0.6;
}
.weekday-temp {
  position: absolute;
  width: 24px;
  height: 32px;
  left: 409px;
  top: 573px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;
  text-align: right;

  color: #ffffff;
}

.weekday-degrees {
  position: absolute;
  width: 17px;
  height: 13px;
  left: 433px;
  top: 578px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  display: flex;
  align-items: center;

  color: #ffffff;
}

.weekdays {
  position: absolute;
  width: 642px;
  height: 52px;
  top: 195px;
}

.day {
  position: absolute;
  top: 0px;
  right: 32px;
}
</style>
