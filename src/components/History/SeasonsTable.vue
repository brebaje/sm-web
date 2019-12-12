<template>
  <table>
    <thead>
    <td class="strong a-right">#</td>
    <td class="strong">Season</td>
    <td class="strong">
      <font-awesome-icon icon="trophy" class="first-place" />
      Winner
    </td>
    <td class="strong">
      <font-awesome-icon icon="medal" class="second-place" />
      Runner-up
    </td>
    </thead>
    <tbody>
    <tr :key="index" v-for="(item, index) in history">
      <td class="a-right index strong">{{ toRoman(index + 1) }}</td>
      <td>{{ item.year }}</td>
      <td>{{ item.winner || 'TBD' }}</td>
      <td>{{ item.second || 'TBD' }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SeasonsTable',
  computed: {
    ...mapState({
      history: state => state.history,
    }),
  },
  methods: {
    toRoman(num) {
      // converts a number in range [0 - 40] to Roman (enough for now)
      if (num >= 40) return `XL${this.toRoman(num - 40)}`;
      if (num >= 10) return `X${this.toRoman(num - 10)}`;
      if (num >= 9) return `IX${this.toRoman(num - 9)}`;
      if (num >= 5) return `V${this.toRoman(num - 5)}`;
      if (num >= 4) return `IV${this.toRoman(num - 4)}`;
      if (num >= 1) return `I${this.toRoman(num - 1)}`;

      return ''; // < 1 || > 40
    },
  },
};
</script>

<style scoped lang="scss">
// TODO DRY refactor pending
table {
  border-collapse: collapse;
  margin: 0 0 15px 0;

  @include lg-screen {
    margin: 0 15px 15px 0;
  }

  thead {
    td {
      border-bottom: 1px solid white;
      text-align: center;

      @include sm-screen {
        font-size: 1.1rem;
      }
    }
  }

  td {
    padding: 10px 5px;

    @include sm-screen {
      padding: 10px 15px;
    }

    &.index {
       color: $red;
     }

    svg {
      margin-right: 5px;
    }
  }
}
</style>
