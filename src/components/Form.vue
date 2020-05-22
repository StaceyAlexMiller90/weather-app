<template>
  <form>
    <img src="../assets/cloud.png" class="cloud" />
    <cool-select
      v-if="!appLoading"
      v-model="countryCode"
      :items="countries.countries"
      item-value="code"
      item-text="code"
      class="select"
    >
      <!-- slot for each item in the menu -->
      <template slot="item" slot-scope="{ item: country }">
        <div style="display: flex; align-items: center;">
          <img :src="country.flag" class="country-flag" />
          <div>
            <b class="selection">{{ country.code }}</b>
          </div>
        </div>
      </template>
      <!-- slot for the selected item (in the text field) -->
      <template
        class="select-box"
        slot="selection"
        slot-scope="{ item: country }"
      >
        <img :src="country.flag" class="country-flag" />
        <div>
          <b class="selection">{{ country.code }}</b>
          <img src="../assets/down.png" class="down" />
        </div>
      </template>
    </cool-select>
    <div class="text-input-container">
      <input
        v-model="city"
        type="text"
        placeholder="Please enter your location..."
        class="text-input"
        required
      />
      <img
        v-if="!appLoading"
        src="../assets/search.png"
        class="icon search"
        v-bind:style="{ opacity: this.city && 1 }"
        v-on:click="fetchWeather"
      />
      <img v-if="appLoading" class="icon loading" src="../assets/Loading.png" />
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex'
import { CoolSelect } from 'vue-cool-select'
import 'vue-cool-select/dist/themes/bootstrap.css'

@Component({
  created() {
    this.$store.dispatch('countries/fetchCountries')
  },
  computed: {
    ...mapState('appState', ['appLoading']),
    ...mapState(['countries'])
  },
  components: {
    CoolSelect
  }
})
export default class Form extends Vue {
  countryCode = 'NL'
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
.select {
  position: relative;
  left: 82px;
  top: 22px;
  width: 95px;
  height: 48px;
}

.country-flag {
  width: 18px;
  height: 14px;
  border: 1px solid #08153e;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 11px;
}

.down {
  position: absolute;
  left: 63px;
  width: 24px;
  height: 24px;
}

.selection {
  width: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;

  color: #08153e;
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
  outline: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  border: none;

  color: #08153e;
}

.text-input::placeholder {
  opacity: 0.5;
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

.text-input-container:not(::placeholder):hover .text-input {
  opacity: 0.5;
}

.text-input-container:hover {
  border: 1px solid #b5c7ff;
}

.text-input-container:focus-within {
  border: 2px solid #b5c7ff;
}

.text-input-container:focus-within .search {
  opacity: 1;
}

.text-input-container:focus {
  border: 2px solid #b5c7ff;
}

.icon {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 389px;
  top: 12px;
}
.search {
  opacity: 0.5;
}
.loading {
  animation: 2s linear infinite spin;
}

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
<style>
.IZ-select__input.IZ-select__input--focused {
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
  outline: none;
  box-shadow: none;
}

.IZ-select__input {
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}
</style>
