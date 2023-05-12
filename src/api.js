import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID sqnzyPjAWwhgQzjgscpnkyUqw3VBjpY5a8AvTtx0DVo",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
