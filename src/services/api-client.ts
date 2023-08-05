import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c130c844da724402aad59bc83ec29574",
  },
});
