import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import HistoryService from './services/history.service';
import PlayersService from './services/players.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: false,
    loading: false,
    history: [],
    players: [],
    standings: [],
  },
  mutations: {
    setError(state) {
      state.error = true;
    },
    setHistory(state, data) {
      state.history = _.sortBy(data, 'year');
    },
    setLoading(state) {
      state.loading = true;
    },
    setPlayers(state, data) {
      state.players = _.sortBy(data, player => _.lowerCase(player.nick));
    },
    unsetError(state) {
      state.error = false;
    },
    unsetLoading(state) {
      state.loading = false;
    },
  },
  actions: {
    async getHistory({ commit }) {
      commit('unsetError');
      commit('setLoading');

      try {
        const data = await HistoryService.getHistory();
        commit('setHistory', data);
      }
      catch (error) {
        commit('setError');
      }
      finally {
        commit('unsetLoading');
      }
    },
    async getPlayers({ commit }) {
      commit('unsetError');
      commit('setLoading');

      try {
        const data = await PlayersService.getPlayers();
        commit('setPlayers', data);
      }
      catch (error) {
        commit('setError');
      }
      finally {
        commit('unsetLoading');
      }
    },
  },
});
