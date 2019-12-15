<template>
  <div class="line-chart">
    <span class="chart-title strong">{{ chartTitle }}</span>
    <Cartesian autoresize :bound="[totalPlayers, 1]" :data="data">
      <template v-for="(item, index) in players">
        <la-line animated curve dot :key="index" :label="item" :prop="item" :width="2" :color="colors[index]" />
      </template>
      <Legend placement="bottom" />
      <Tooltip />
      <XAxis />
      <YAxis />
    </Cartesian>
  </div>
</template>

<script>
import {
  Cartesian, Legend, Line, Tooltip, XAxis, YAxis,
} from 'laue';
import { mapState } from 'vuex';

export default {
  name: 'LineChart',
  props: {
    chart: {
      required: true,
      type: String,
    },
  },
  components: {
    Cartesian,
    LaLine: Line,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
  },
  data() {
    return {
      colors: [
        '#5cabdc',
        '#8cc16d',
        '#d203d2',
        '#b595cf',
        '#da5673',
        '#ffffff',
        '#eebf35',
        '#ff8c00',
        '#32cd32',
        '#ff0000',
      ],
    };
  },
  computed: {
    ...mapState({
      standings: state => state.standings,
    }),
    chartTitle() {
      switch (this.chart) {
        case 'Asistencias':
          return 'Assists';
        case 'Puntos':
          return 'Points';
        case 'Rebotes':
          return 'Rebounds';
        case 'Triples':
          return '3 Pointers';
        default:
          return this.chart;
      }
    },
    data() {
      return this.standings.map((item) => {
        const obj = item[`${this.chart}`];
        const sortedList = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
        const result = {};

        sortedList.forEach((player, index) => {
          result[player] = index + 1;
        });

        return result;
      });
    },
    players() {
      return Object.keys(this.standings[0][`${this.chart}`]);
    },
    totalPlayers() {
      return this.players.length + 1;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/charts";

.line-chart {
  @extend %charts;

  .la-legend {
    left: 0 !important;
    margin-bottom: 30px;
    position: relative !important;
    text-align: center;
    transform: none !important;
  }
}
</style>
