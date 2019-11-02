<template>
  <div>
    <!-- ユーザー情報エリア -->
    <User />
    <!-- 計算機エリア -->
    <CalculationInput
      :answer="this.$vxm.calculator.calculatorAnswer"
      :operators="this.$vxm.calculator.operators"
      @calculate="onAnswerClick"
    />
    <!-- メモ機能エリア -->
    <Memo />
    <!-- オセロエリア -->
    <Othello />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Memo from '~/components/organisms/Memo.vue'
import CalculationInput from '~/components/molecules/CalculationInput.vue'
import Othello from '~/components/organisms/Othello.vue'
import User from '~/components/organisms/User.vue'

@Component({
  components: { User, CalculationInput, Memo, Othello }
})
export default class extends Vue {
  // 計算機能用クリックイベント
  public onAnswerClick(numA: number, numB: number, operatorId: number) {
    this.$vxm.calculator.setAnswer({ numA, numB, operatorId })
  }
}
</script>
