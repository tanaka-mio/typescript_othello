<template>
  <div class="calculator">
    <input v-model.number="numA" type="text" placeholder="数字" />
    <select v-model="operatorId">
      <option
        v-for="operator in $vxm.calculator.operators"
        :key="operator.id"
        :value="operator.id"
        >{{ operator.label }}</option
      >
    </select>
    <input v-model.number="numB" type="text" placeholder="数字" />
    <button @click="onAnswerClick(numA, numB)">
      Answer
    </button>
    <br />
    A. {{ $vxm.calculator.calculatorAnswer }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Calculator extends Vue {
  // 計算機用
  numA = 0
  numB = 0
  operatorId = 0

  // 計算機能用クリックイベント
  public onAnswerClick(numA: number, numB: number) {
    this.$vxm.calculator.setAnswer({ numA, numB, operatorId: this.operatorId })
  }
}
</script>

<style scoped>
.calculator {
  margin: 0 auto;
  padding: 10px;
  width: 640px;
  background: lightblue;
}
</style>
