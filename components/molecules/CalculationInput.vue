<template>
  <div class="calculator">
    <input v-model.number="numA" type="text" placeholder="数字" />
    <select v-model="operatorId">
      <option
        v-for="operator in operators"
        :key="operator.id"
        :value="operator.id"
        >{{ operator.label }}</option
      >
    </select>
    <input v-model.number="numB" type="text" placeholder="数字" />
    <button @click="onChildClick(numA, numB)">
      Answer
    </button>
    <br />
    A. {{ answer }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class CalculationInput extends Vue {
  @Prop()
  answer!: {
    type: Number
  }
  @Prop()
  operators!: {
    type: Object
  }

  // 計算機用
  numA = 0
  numB = 0
  operatorId = 0

  // 計算機能用クリックイベント
  public onChildClick(numA: number, numB: number) {
    this.$emit('calculator', numA, numB, this.operatorId)
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
