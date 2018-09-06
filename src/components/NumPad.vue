<template>
  <div class="NumPad">
    <Display :value="display" />
    {{ result }}

    <!-- Numbers -->
    <div class="wrapper">
      <div class="numbers">
        <NumPadButton v-for="number in numbers" :key="number" :buttonValue="number" :onClick="addThis.bind(this, number)" />
        <NumPadButton :buttonValue="'.'" :onClick="addThis.bind(this, '.')" />
        <NumPadButton :buttonValue="'C'" :onClick="clear" />
      </div>

      <!-- Operations -->
      <div class="operations">
        <NumPadButton :buttonValue="'+'" :onClick="setOperator.bind(this, '+')" />
        <NumPadButton :buttonValue="'-'" :onClick="setOperator.bind(this, '-')" />
        <NumPadButton :buttonValue="'*'" :onClick="setOperator.bind(this, '*')" />
        <NumPadButton :buttonValue="'/'" :onClick="setOperator.bind(this, '/')" />
      </div>

      <NumPadButton :class="'equal'" :buttonValue="'='" :onClick="calculate" />
    </div>

  </div>
</template>

<script>
import Display from './Display';
import NumPadButton from './NumPadButton.vue'

import * as mathHelper from '../helpers/math';

export default {
  name: 'NumPad',
  components: {
    Display,
    NumPadButton,
  },

  data() {
    return {
      numbers: new Array(10).fill().map((_, i) => i).reverse(),
      firstNumber: '',
      secondNumber: '',
      operator: '',
      result: '',
    }
  },

  computed: {
    display: function() {
      return this.firstNumber + ' ' + this.operator + ' ' + this.secondNumber;
    },
  },

  methods: {
    addThis: function(number, e) {
      // TODO: keycodes
      // 48 === 0
      // 57 === 9
      // TODO: ASC: last sum

      // TODO: regex test first if it's a correct number. e.g. no multiple decimal points
      if (mathHelper.isNumber(number)) {
        if (!this.operator) {
          this.firstNumber += number;
        } else {
          this.secondNumber += number;
        }
      }
    },

    setOperator: function(operator, e) {
      this.operator = operator;
    },

    calculate: function() {
      const fn = mathHelper.operations[mathHelper.transformOperation[this.operator]];
      const parsedFirst = parseFloat(this.firstNumber, 10);
      const parsedSecond = parseFloat(this.secondNumber, 10);
      this.result = fn.apply(this, [parsedFirst, parsedSecond]);
    },

    clear: function() {
      this.firstNumber = '';
      this.operator = '';
      this.secondNumber = '';
    },
  },
}
</script>

<style lang="scss" scoped>
.NumPad {

  .wrapper {
    display: grid;
    grid-template-rows: auto 50px;
    grid-template-columns: 180px 60px auto;
    width: 300px;
    margin: 20px auto;
  }

  .numbers {
    width: 180px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  .operations {
    display: flex;
    flex-direction: column;
    width: 60px;
    grid-row: 1 / 2;
    grid-collumn: 2 / 3;
  }

  button {
    width: 50px;
    margin: 5px;
    padding: 0;
    text-align: center;
  }
}
</style>
