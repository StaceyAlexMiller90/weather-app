<template>
  <form>
    <div id="country-select">
      <select v-model="selected" class="country-dropdown">
        <option
          v-for="country in countries"
          v-bind:value="country"
          :key="country"
        >
          <!-- <country-flag
          v-bind:country="{ country }"
          size="normal"
          rounded="true"
        /> -->
          {{ country }}</option
        >
      </select>
    </div>
    <div class="text-input-container"></div>
    <input
      type="text"
      placeholder="Please enter your location..."
      class="text-input"
      required
    />
    <img src="../assets/search.png" class="search" />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CountryFlag from 'vue-country-flag'
import { countries } from '../utils'

@Component({
  components: {
    CountryFlag
  }
})
export default class Form extends Vue {
  data: {
    selected: ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.country-dropdown {
  position: absolute;
  width: 95px;
  height: 48px;
  left: 486px;
  top: 396px;
  margin-right: 8px;
  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
select::after {
  background: url('../assets/down.png') 96% / 15% no-repeat;
}

.text-input {
  position: absolute;
  width: 299px;
  height: 30px;
  left: 606px;
  top: 405px;

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
  left: 589px;
  top: 396px;

  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}

.search {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 978px;
  top: 408px;

  opacity: 0.5;
}
</style>
