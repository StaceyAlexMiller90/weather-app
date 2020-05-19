<template>
  <div>
    <div class="rectangle2-14"></div>
    <img src="../assets/cloud.png" class="cloud" />
    <Form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Form from './Form.vue'

@Component({
  components: {
    Form
  }
})
export default class InputForm extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rectangle2-14 {
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
  left: 426px;
  top: 396px;
}
</style>
