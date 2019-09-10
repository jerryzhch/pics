import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 526accc37e606bad16ed671032e42fb30ea2251cdd976b5f2a08a49519357e2d"
  }
});
