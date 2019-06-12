import ApiService from './api.service';

const HistoryService = {
  async getHistory() {
    try {
      const response = await ApiService.get('/history');

      return response.data;
    }
    catch (error) {
      throw error;
    }
  },
};

export default HistoryService;
