import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e43a00fde8136877f8174f0d5f8597c8",
    language: "ko-KR",
  },
});

export default instance;
