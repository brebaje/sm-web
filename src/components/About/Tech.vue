<template>
  <div class="tech-info" :class="data.icon.class">
    <div class="tech-icon" :class="iconClass">
      <font-awesome-icon :icon="iconFa" :size="size" v-if="data.icon.fa" />
      <img :src="iconUrl" :alt="data.name" v-else />
    </div>
    <div class="tech-content">
      <span class="name">{{ data.name }}</span>
      <div class="github-links" v-if="isRepository">
        <a :href="data.url" target="_blank" class="github-link">Code</a>
        <a :href="data.docs" target="_blank" class="github-link" v-if="data.docs">Docs</a>
      </div>
      <a :href="data.url" target="_blank" v-else>
        <font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs" />
      </a>
    </div>
  </div>
</template>

<script>
import express from '@/assets/expressjs.svg';
import heroku from '@/assets/heroku.svg';
import mLab from '@/assets/mlab.svg';
import mongodb from '@/assets/mongodb.svg';

export default {
  props: {
    data: {
      required: true,
      type: Object,
    },
    size: {
      default: '2x',
      type: String,
    },
  },
  computed: {
    isRepository() {
      return this.data.icon.class === 'github';
    },
    iconClass() {
      return `icon-${this.data.icon.class}`;
    },
    iconFa() {
      // using 'fab' prefix for brand icons (must return an array)
      return this.data.icon.fa ? ['fab', this.data.icon.faName] : '';
    },
    iconUrl() {
      // for those brands not included in FontAwesome
      switch (this.data.icon.class) {
        case 'express':
          return express;
        case 'heroku':
          return heroku;
        case 'mlab':
          return mLab;
        case 'mongo':
          return mongodb;
        default:
          return '';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.tech-info {
  border: 2px solid;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 0 15px 0;
  padding: 0 15px 0 0;

  @include xs-screen {
    margin: 0 15px 15px 0;
  }

  @include lg-screen {
    margin: 0 15px 0 0;
  }

  &.express,
  &.github {
    border-color: black;
  }

  &.fontawesome {
    border-color: $blue;
  }

  &.heroku {
    border-color: $purple;
  }

  &.mlab {
    border-color: $yellow;
  }

  &.sass {
    border-color: $pink;
  }

  &.mongo,
  &.node,
  &.vue {
    border-color: $green;
  }

  .tech-icon {
    background-color: white;
    border-right: 2px solid;
    padding: 10px;

    &.icon {
      &-express {
        color: black;

        img {
          height: 28px;
        }
      }

      &-fontawesome {
        color: $blue;
      }

      &-github {
        color: black;
      }

      &-heroku {
        color: $purple;

        img {
          height: 28px;
        }
      }

      &-mlab {
        color: $yellow;

        img {
          height: 28px;
        }
      }

      &-sass {
        color: $pink;
      }

      &-mongo,
      &-node,
      &-vue {
        color: $green;
      }

      &-mongo {
        img {
          height: 28px;
        }
      }
    }
  }

  .tech-content {
    line-height: 52px;

    .github-links {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;

      a:first-child {
        margin-right: 10px;
      }
    }

    .name {
      padding: 0 10px;
    }

    a {
      color: $blue;
      text-decoration: none;

      &:focus,
      &:hover,
      &:visited {
        color: $blue;
      }
    }
  }
}

.tech-info.github {
  .tech-content {
    line-height: 68px;
  }
}
</style>
