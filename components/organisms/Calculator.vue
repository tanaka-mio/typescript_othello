<template>
  <Calculation
    :answer="this.$vxm.calculator.calculatorAnswer"
    :operators="this.$vxm.calculator.operators"
    @calculator="onAnswerClick"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Calculation from '~/components/molecules/Calculation.vue'

@Component({
  components: { Calculation }
})
export default class Calculator extends Vue {
  // 計算機能用クリックイベント
  public onAnswerClick(numA: number, numB: number, operatorId: number) {
    this.$vxm.calculator.setAnswer({ numA, numB, operatorId })
  }
}
</script>
