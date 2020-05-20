<template>
  <form>
    <img src="../assets/cloud.png" class="cloud" />
    <select v-model="countryCode" class="country-dropdown">
      <option v-for="country in countries" v-bind:value="country" :key="country">
        <flag :iso="country" />
        <span>{{ country }}</span>
      </option>
    </select>
    <div class="text-input-container">
      <input
        v-model="city"
        type="text"
        placeholder="Please enter your location..."
        class="text-input"
        required
      />
      <img src="../assets/search.png" class="search" v-on:click="fetchWeather" />
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { countries, isoCountries } from '../utils'
import FlagIcon from 'vue-flag-icon'

Vue.use(FlagIcon)

@Component({
  components: FlagIcon
})
export default class Form extends Vue {
  countries: string[] = countries
  countryCode = ''
  city = ''

  fetchWeather() {
    this.$store.dispatch('locationWeather/getLocationWeather', {
      city: this.city,
      countryCode: this.countryCode
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.emptyPage {
  /* Rectangle 2.14 */
  position: absolute;
  width: 632px;
  height: 92px;
  left: 404px;
  top: 374px;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #f8f8f8;
  box-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
  border-radius: 16px;
}
.cloud {
  /* cloud */
  position: absolute;
  width: 48px;
  height: 48px;
  left: 22px;
  top: 22px;
}
.country-dropdown {
  position: absolute;
  width: 95px;
  height: 48px;
  left: 82px;
  top: 22px;
  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}

.text-input {
  position: absolute;
  width: 299px;
  height: 30px;
  left: 17px;
  top: 9px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  border: none;

  color: #08153e;

  opacity: 0.5;
}

.text-input-container:focus-within {
  border: 2px solid #b5c7ff;
}

.text-input-container {
  /* Rectangle */
  position: absolute;
  width: 425px;
  height: 48px;
  left: 185px;
  top: 22px;

  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}

.search {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 389px;
  top: 12px;

  opacity: 0.5;
}
</style>
