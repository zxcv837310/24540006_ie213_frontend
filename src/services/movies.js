import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const MovieDataService = {
  // Lấy danh sách phim theo trang
  async getAll(page = 0) {
    try {
      return await axios.get(`${API_URL}/api/v1/movies?page=${page}`);
    } catch (error) {
      console.error('Error fetching all movies:', error);
      throw error;
    }
  },

  // Lấy thông tin chi tiết của 1 phim theo ID
  async get(id) {
    try {
      return await axios.get(`${API_URL}/api/v1/movies/id/${id}`);
    } catch (error) {
      console.error(`Error fetching movie with id ${id}:`, error);
      throw error;
    }
  },

  // Tìm kiếm phim theo query (title hoặc rated)
  async find(query, by = 'title', page = 0) {
    try {
      return await axios.get(`${API_URL}/api/v1/movies?${by}=${query}&page=${page}`);
    } catch (error) {
      console.error('Error finding movies:', error);
      throw error;
    }
  },

  // Tạo mới một review
  async createReview(data) {
    try {
      return await axios.post(`${API_URL}/api/v1/movies/review`, data);
    } catch (error) {
      console.error('Error creating review:', error);
      throw error;
    }
  },

  // Cập nhật review hiện có
  async updateReview(data) {
    try {
      return await axios.put(`${API_URL}/api/v1/movies/review`, data);
    } catch (error) {
      console.error('Error updating review:', error);
      throw error;
    }
  },

  // Xóa review
  async deleteReview(id, userId) {
    try {
      return await axios.delete(`${API_URL}/api/v1/movies/review`, {
        data: {
          review_id: id,
          user_id: userId,
        },
      });
    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  },

  // Lấy danh sách các nhãn Rating (G, PG, PG-13, R...)
  async getRating() {
    try {
      return await axios.get(`${API_URL}/api/v1/movies/ratings`);
    } catch (error) {
      console.error('Error fetching ratings:', error);
      throw error;
    }
  }
};