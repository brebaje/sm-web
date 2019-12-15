<template>
  <div class="bar-chart">
    <span class="chart-title strong">Weekly</span>
    <Cartesian autoresize narrow :bound="[0]" :data="data">
      <Bar animated prop="value" color="#8cc16d">
        <g
          slot-scope="props"
          fill="white">
          <text
            :x="props.x"
            :y="props.y"
            text-anchor='middle'
            dy="-.5em">
            {{ props.value }}
          </text>
        </g>
      </Bar>
      <Tooltip />
      <XAxis prop="label">
        <template slot-scope="props">
          {{ props.value.substr(0, props.value.indexOf(' ')) }}
        </template>
      </XAxis>
      <YAxis :nbTicks="5" />
    </Cartesian>
  </div>
</template>

<script>
import {
  Bar, Cartesian, Tooltip, XAxis, YAxis,
} from 'laue';
import { mapState } from 'vuex';

export default {
  name: 'BarChart',
  props: {
    chart: {
      required: true,
      type: String,
    },
  },
  components: {
    Bar,
    Cartesian,
    Tooltip,
    XAxis,
    YAxis,
  },
  computed: {
    ...mapState({
      standings: state => state.standings,
    }),
    data() {
      return this.standings.map((item, index) => {
        const obj = item[`${this.chart}`];
        const max = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));

        return {
          label: `${index + 1} - ${max}`,
          value: obj[max],
        };
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/charts";

.bar-chart {
  @extend %charts;
}
</style>
