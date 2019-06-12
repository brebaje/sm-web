<template>
  <div id="nav" class="a-center">
    <div class="nav-logo">
      <router-link to="/" ref="logo">
        <font-awesome-icon icon="basketball-ball" :size="logoSize" />
      </router-link>
    </div>
    <router-link class="nav-players" to="/players">
      <font-awesome-icon icon="users" :size="iconSize" />
      <span class="nav-text">Players</span>
    </router-link>
    <router-link class="nav-standings" to="/standings">
      <font-awesome-icon :icon="['far', 'chart-bar']" :size="iconSize" />
      <span class="nav-text">Standings</span>
    </router-link>
    <router-link class="nav-history" to="/history">
      <font-awesome-icon icon="trophy" :size="iconSize" />
      <span class="nav-text">History</span>
    </router-link>
    <router-link class="nav-about" to="/about">
      <font-awesome-icon icon="question-circle" :size="iconSize" />
      <span class="nav-text">About</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconSize: 'lg',
      logoSize: '3x',
    };
  },
  methods: {
    adjustIconSize() {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

      if (viewportWidth < 550) { // sm-screen
        this.iconSize = '2x';
        this.logoSize = '2x';
      }
      else {
        this.iconSize = 'lg';
        this.logoSize = '3x';
      }
    },
    addBreakPointWatcher() {
      window.addEventListener('resize', this.adjustIconSize, false);
    },
  },
  mounted() {
    this.adjustIconSize();
    this.addBreakPointWatcher();

    // spin logo on hover
    // works but I don't know if I like it
    /*
    this.$refs.logo.$el.addEventListener('mouseover', () => {
      this.$refs.logo.$el.children[0].classList.remove('pause-spinner');
      this.$refs.logo.$el.children[0].classList.add('fa-spin');
    });

    this.$refs.logo.$el.addEventListener('mouseleave', () => {
      this.$refs.logo.$el.children[0].classList.add('pause-spinner');
    });
    */
  },
};
</script>

<style scoped lang="scss">
#nav {
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: $navFont;
  font-size: 1.3rem;
  padding: 30px 15px 15px 15px;

  .nav-logo {
    a {
      display: inline-block;

      &.router-link-exact-active {
        color: orange;
      }
    }

    .pause-spinner {
      animation-play-state: paused;
    }

  }

  a {
    color: $text;
    font-weight: bold;
    padding: 5px 10px;
    text-decoration: none;

    &:visited {
      color: $text;
    }

    &:hover {
      color: $purple;
    }

    &.router-link-exact-active {
      &:hover {
        text-decoration: none;
      }
    }

    &.nav-players {
      &.router-link-exact-active {
        color: $red;
      }
    }

    &.nav-standings {
      &.router-link-exact-active {
        color: $green;
      }
    }

    &.nav-history {
      &.router-link-exact-active {
        color: $yellow;
      }
    }

    &.nav-about {
      &.router-link-exact-active {
        color: $blue;
      }
    }

    .nav-text {
      display: none;
      padding-left: 5px;

      @include sm-screen {
        display: inline-block;
      }
    }
  }
}
</style>
