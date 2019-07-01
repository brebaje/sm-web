<template>
  <div id="players" class="view">
    <h1 class="section-title">Players</h1>
    <ErrorMsg :message="errorMsg" :top="100" :size="'3x'" v-if="error" />
    <LoadingMsg :message="loadingMsg" :top="100" v-else-if="loading" />
    <div class="players-content" v-else>
      <p class="separator-title">Active ({{ activePlayers.length }})</p>
      <div class="players-list">
        <PlayerBox
          :bounds="{ width: 350, height: 170 }"
          :stroke="2"
          :key="item._id"
          v-for="item in activePlayers"
        >
          <slot>
            <Player :data="item" />
          </slot>
        </PlayerBox>
      </div>

      <p class="separator-title">Retired ({{ inactivePlayers.length }})</p>
      <div class="players-list">
        <PlayerBox
          :bounds="{ width: 350, height: 100 }"
          :stroke="2"
          :key="item._id"
          v-for="item in inactivePlayers"
        >
          <slot>
            <Player :data="item" :bio="false" />
          </slot>
        </PlayerBox>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import PlayersService from '@/services/players.service';
import ErrorMsg from '@/components/ErrorMsg.vue';
import LoadingMsg from '@/components/LoadingMsg.vue';
import Player from '@/components/Players/Player.vue';
import PlayerBox from '@/components/Players/PlayerBox.vue';

export default {
  components: {
    ErrorMsg,
    LoadingMsg,
    Player,
    PlayerBox,
  },
  data() {
    return {
      error: false,
      errorMsg: 'Something went wrong :(<br>Please try again!',
      loading: false,
      loadingMsg: 'Gathering players data...',
      players: [],
    };
  },
  computed: {
    activePlayers() {
      return this.players.filter(p => p.active);
    },
    inactivePlayers() {
      return this.players.filter(p => !p.active);
    },
  },
  methods: {
    async getData() {
      this.error = false;
      this.loading = true;

      try {
        const data = await PlayersService.getPlayers();
        // 'a' !== 'A' therefore the lowerCase
        this.players = _.sortBy(data, player => _.lowerCase(player.nick));
      }
      catch (error) {
        this.error = true;
      }
      finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
@import "../styles/view";

#players {
  @extend %view;

  .section-title {
    color: $red;
  }

  .separator-title {
    color: $red;
    font-size: 1.1rem;
    font-weight: bold;
    padding-left: 0;

    @include sm-screen {
      padding-left: 25px;
    }

    @include m-screen {
      padding-left: 0;
    }

    @include lg-screen {
      padding-left: 75px;
    }

    @include xl-screen {
      padding-left: 0;
    }
  }

  .players-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .player-box {
      margin: 0 0 15px 0;

      @include sm-screen {
        margin: 0 5px 15px 0;
      }

      @include m-screen {
        margin: 0 10px 15px 0;
      }

      @include lg-screen {
        margin: 0 15px 15px 0;
      }
    }
  }
}
</style>
