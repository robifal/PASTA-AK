import axios from "axios";
const baseUrl = "http:// localhost:3003";

const requestsQuestions = {
  async portuguesList() {
    const response = await axios.get(`${baseUrl}api/portugues/listportugues`);
    return response;
  },
};

export default requestsQuestions;
