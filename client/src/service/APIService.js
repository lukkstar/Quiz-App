import axios from 'axios';

class APIService {
  addNewQuestion(question) {
    return axios.post('/api/question', question);
  }
  saveResult(result, level, category) {
    const req = { level: level, point: result, category: category };
    return axios.post('/api/question/result', req);
  }
  getQuestion(difficulty, category) {
    return axios.get(
      `/api/question?difficulty=${difficulty}&category=${category}`
    );
  }
  getPoints() {
    return axios.get('/api/question/points');
  }
  getCategories() {
    return axios.get('/api/question/category');
  }
}

export default new APIService();
