<template>
  <div class="error-wrapper" :style="style">
    <font-awesome-icon icon="times-circle" :size="size" />
    <div class="error-text">
      <p v-html="message" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    bottom: {
      default: 25,
      type: Number,
    },
    message: {
      default: 'Error!',
      type: String,
    },
    size: {
      default: 'lg',
      type: String,
    },
    top: {
      default: 25,
      type: Number,
    },
  },
  computed: {
    style() {
      return `padding: ${this.top}px 0 ${this.bottom}px;`;
    },
  },
};
</script>

<style scoped lang="scss">
.error-wrapper {
  color: $red;
  margin: 0 auto;

  svg {
    display: block;
    margin: 0 auto;
  }

  .error-text {
    color: $text;
    margin: 15px 0;
    text-align: center;
  }
}
</style>
