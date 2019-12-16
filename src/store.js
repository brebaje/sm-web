import Vue from 'vue';
import Vuex from 'vuex';
import lowerCase from 'lodash.lowercase';
import sortBy from 'lodash.sortby';
import HistoryService from './services/history.service';
import PlayersService from './services/players.service';
import StandingsService from './services/standings.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSeason: null,
    error: false,
    loading: false,
    history: [],
    players: [],
    seasons: [],
    selectedSeason: null,
    standings: [],
  },
  mutations: {
    setCurrentSeason(state, data) {
      state.currentSeason = data[0].Temporada;
    },
    setError(state) {
      state.error = true;
    },
    setHistory(state, data) {
      state.history = sortBy(data, 'year');
    },
    setLoading(state) {
      state.loading = true;
    },
    setPlayers(state, data) {
      state.players = sortBy(data, player => lowerCase(player.nick));
    },
    setSeasons(state, data) {
      state.seasons = data.map(s => s.Temporada);
    },
    setSelectedSeason(state, season) {
      state.selectedSeason = season;
    },
    setStandings(state, data) {
      state.standings = data.sort((a, b) => a.Numero - b.Numero);
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
    async getSeasons({ commit }) {
      commit('unsetError');
      commit('setLoading');

      try {
        const data = await StandingsService.getStandings();
        commit('setSeasons', data);
        commit('setCurrentSeason', data);
      }
      catch (error) {
        commit('setError');
      }
      finally {
        commit('unsetLoading');
      }
    },
    async getStandings({ commit }, season) {
      commit('unsetError');
      commit('setLoading');

      try {
        const data = await StandingsService.getOne(season);
        commit('setStandings', data);
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
