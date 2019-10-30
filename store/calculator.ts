import Vuex from 'vuex'
import {
  createModule,
  mutation,
  extractVuexModule,
  createProxy
} from 'vuex-class-component'

const VuexModule = createModule({
  namespaced: true,
  target: 'nuxt'
})

interface Operator {
  id: number
  label: string
  culc: (numA: number, numB: number) => number
}

export class CalculatorStore extends VuexModule {
  // 計算機の答え
  calculatorAnswer = 0

  // 計算機の式
  operators: Operator[] = [
    { label: '+', culc: (numA: number, numB: number) => numA + numB },
    { label: '-', culc: (numA: number, numB: number) => numA - numB },
    { label: 'x', culc: (numA: number, numB: number) => numA * numB },
    { label: '÷', culc: (numA: number, numB: number) => numA / numB }
  ].map((operator, id) => ({ ...operator, id }))

  @mutation setAnswer(payload: {
    numA: number
    numB: number
    operatorId: number
  }) {
    const calculatorAnswer = this.operators
      .filter((operator) => operator.id === payload.operatorId)[0]
      .culc(payload.numA, payload.numB)
    this.calculatorAnswer = calculatorAnswer
  }
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(CalculatorStore)
  }
})

export default createProxy(store, CalculatorStore)
