<template>
  <div class="widget">
    <div class="strong widget-title">Categories</div>
    <div class="widget-content">
      <span class="block strong widget-content-title">Week #{{ currentWeek }}</span>
      <template v-for="(item, index) in data">
        <div :key="index">
          <span class="block category-title strong" :class="item.category">{{ item.category }}</span>
          <span class="block category-value">{{ item.player }} <span class="strong total">{{ item.value }}</span></span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CategoryWidget',
  data() {
    return {
      categories: ['Broker', 'Puntos', 'Rebotes', 'Triples', 'Asistencias'],
    };
  },
  computed: {
    ...mapState({
      currentSeason: state => state.currentSeason,
      error: state => state.error,
      loading: state => state.loading,
      standings: state => state.standings,
    }),
    currentWeek() {
      if (this.standings) return this.standings.length;

      return 0;
    },
    data() {
      if (this.standings.length > 0) {
        return this.categories.map((category) => {
          const total = this.standings.length;
          const lastObj = this.standings[total - 1][category];
          const sortedList = Object.keys(lastObj)
            .sort((a, b) => lastObj[b] - lastObj[a]);

          return {
            category: this.getCategoryTitle(category),
            player: sortedList[0],
            value: (category === 'Broker') ? lastObj[sortedList[0]].toLocaleString('es-ES') : lastObj[sortedList[0]],
          };
        });
      }

      return [];
    },
  },
  methods: {
    getCategoryTitle(category) {
      switch (category) {
        case 'Asistencias':
          return 'Assists';
        case 'Puntos':
          return 'Points';
        case 'Rebotes':
          return 'Rebounds';
        case 'Triples':
          return '3 Pointers';
        default:
          return category;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../styles/widgets';

.widget {
  @extend %widget;

  .widget-content {
    padding: 20px 50px;

    .widget-content-title {
      font-size: 1.2em;
      text-align: center;
    }

    .category-title {
      padding: 15px 0;
      text-transform: uppercase;

      &.Assists {
        color: $pink;
      }

      &.Broker {
        color: $red;
      }

      &.Points {
        color: $blue;
      }

      &.Rebounds {
        color: $yellow;
      }

      &.Pointers {
        color: $green;
      }
    }

    .category-value {
      font-size: 1.1em;
      padding-left: 15px;
      padding-bottom: 10px;

      .total {
        background-color: white;
        border-radius: 4px;
        color: $bg;
        margin-left: 10px;
        padding: 5px;
      }
    }
  }
}
</style>
