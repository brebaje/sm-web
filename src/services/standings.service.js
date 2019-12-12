import ApiService from './api.service';

const StandingsService = {
  async getStandings() {
    try {
      const response = await ApiService.get('/standings');

      return response.data;
    }
    catch (error) {
      throw error;
    }
  },
  async getOne(season) {
    try {
      const response = await ApiService.get(`/standings/${season}`);

      return response.data;
    }
    catch (error) {
      throw error;
    }
  },
};

export default StandingsService;
