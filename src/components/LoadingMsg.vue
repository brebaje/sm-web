<template>
  <div class="spinner-wrapper" :style="style">
    <div class="sk-fading-circle">
      <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>
    </div>
    <div class="spinner-text">
      <p>{{ message }}</p>
    </div>
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
      default: 'Loading...',
      type: String,
    },
    top: {
      default: 25,
      type: Number,
    },
  },
  computed: {
    style() {
      return `padding: ${this.top}px 0 ${this.bottom}px`;
    },
  },
};
</script>

<style scoped lang="scss">
.spinner-wrapper {
  .sk-fading-circle {
    height: 40px;
    margin: 0 auto;
    position: relative;
    width: 40px;

    .sk-circle {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;

      &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: $pink;
        border-radius: 100%;
        -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
        animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
      }
    }

    .sk-circle2 {
      -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
      transform: rotate(30deg);

      &:before {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
    }

    .sk-circle3 {
      -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
      transform: rotate(60deg);

      &:before {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }
    }

    .sk-circle4 {
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);

      &:before {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }
    }

    .sk-circle5 {
      -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
      transform: rotate(120deg);

      &:before {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }
    }

    .sk-circle6 {
      -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
      transform: rotate(150deg);

      &:before {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
      }
    }

    .sk-circle7 {
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);

      &:before {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s;
      }
    }

    .sk-circle8 {
      -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
      transform: rotate(210deg);

      &:before {
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
      }
    }

    .sk-circle9 {
      -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
      transform: rotate(240deg);

      &:before {
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s;
      }
    }

    .sk-circle10 {
      -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
      transform: rotate(270deg);

      &:before {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s;
      }
    }

    .sk-circle11 {
      -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
      transform: rotate(300deg);

      &:before {
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s;
      }
    }

    .sk-circle12 {
      -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
      transform: rotate(330deg);

      &:before {
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s;
      }
    }
  }

  .spinner-text {
    color: $text;
    margin-top: 15px;
    text-align: center;
  }
}

@-webkit-keyframes sk-circleFadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

@keyframes sk-circleFadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
}
</style>
