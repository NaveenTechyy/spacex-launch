import axios from "axios";

const callAPi = async endpoint => {
  const URL = "https://api.spacexdata.com/v4";
  try {
    const response = await axios.get(`${URL}${endpoint}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default callAPi;
