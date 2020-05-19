<template>
  <div class="bg">
    <FormContainer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FormContainer from './FormContainer.vue'
import { mapState } from 'vuex'

@Component({
  computed: mapState('appState', ['appLoading']),
  components: {
    FormContainer
  }
})
export default class Weather extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  /* bg */
  position: absolute;
  width: 1440px;
  height: 839px;
  left: 0px;
  top: 1px;

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
</style>
