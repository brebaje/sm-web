import ApiService from './api.service';

const PlayersService = {
  async getPlayers() {
    try {
      const response = await ApiService.get('/players');

      return response.data;
    }
    catch (error) {
      throw error;
    }
  },
};

export default PlayersService;
