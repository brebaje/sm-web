<template>
  <div class="player-box" :style="containerStyle">
    <svg :viewBox="viewBox" preserveAspectRatio="none">
      <defs>
        <linearGradient
          x1="11.8748878%"
          y1="100%"
          x2="88.1251154%"
          y2="0%"
          id="linearGradient"
        >
          <stop style="stop-color:#4656B8" offset="0%" />
          <stop style="stop-color:#9C02BA" offset="39.9%" />
          <stop style="stop-color:#5A44BA" offset="74.2%" />
          <stop style="stop-color:#1485B8" offset="100%" />
        </linearGradient>
      </defs>
      <g :strokeWidth="stroke">
        <path
          vector-effect="non-scaling-stroke"
          fill="none"
          :d="path"
          stroke="url(#linearGradient)"
        >
        </path>
      </g>
    </svg>
    <slot />
  </div>
</template>

<script>
// TODO get bounds with Javascript for mobile ?
// adapted from https://gedd.ski/post/dynamic-svg-components/

export default {
  data() {
    return {};
  },
  props: {
    bounds: {
      default() {
        return {
          height: 540,
          width: 350,
        };
      },
      type: Object,
    },
    stroke: {
      default: 1,
      type: Number,
    },
  },
  computed: {
    containerStyle() {
      return `height: ${this.bounds.height}px; width: ${this.bounds.width}px;`;
    },
    path() {
      return `
        M${this.bounds.width - this.stroke},${this.stroke}
        L${this.stroke},${this.stroke}
        L${this.stroke},${this.bounds.height - this.stroke}
        L${this.bounds.width - 77},${this.bounds.height - this.stroke}
        L${this.bounds.width - 47},${this.bounds.height - 30}
        L${this.bounds.width - this.stroke},${this.bounds.height - 30}
        Z`;
    },
    style() {
      return `color: ${this.color}`;
    },
    viewBox() {
      return `0 0 ${this.bounds.width} ${this.bounds.height}`;
    },
  },
};
</script>

<style scoped lang=scss>
.player-box {
  position: relative;

  svg {
    height: 100%;
    position: absolute;
    width: 100%;
  }
}
</style>
