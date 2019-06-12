<template>
  <div class="player-info">
    <font-awesome-icon :icon="userIcon" size="3x" class="avatar" />
    <div class="name-wrapper">
      <span class="nick">{{ data.nick }}</span>
      <span class="name">{{ data.name }}</span>
    </div>
    <div class="bio" v-if="bio">
      <font-awesome-icon icon="quote-left" class="quote-start" size="lg" />
      {{ data.bio }}
      <font-awesome-icon icon="quote-right" class="quote-end" size="xs" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
    bio: {
      default: true,
      type: Boolean,
    },
  },
  computed: {
    userIcon() {
      return this.data.picture || 'user';
    },
  },
};
</script>

<style scoped lang="scss">
.player-info {
  padding: 15px;

  .avatar {
    border: 2px solid $yellow;
    border-radius: 4px;
    padding: 10px;
  }

  .name-wrapper {
    display: inline-block;
    margin-left: 15px;
    vertical-align: top;

    span {
      display: block;

      &.nick {
        color: $blue;
        font-size: 1.3rem;
        font-weight: bold;
      }

      &.name {
        font-size: 0.9rem;
      }
    }
  }

  .bio {
    line-height: 1.7rem;
    margin-top: 15px;

    svg {
      color: $yellow;
    }

    .quote-start {
      margin-right: 5px;
    }

    .quote-end{
      margin-left: 5px;
    }
  }
}
</style>
