const axios = require("axios");

const api = {
  getUser(username) {
    // const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    const queryUrl = "https://api.github.com/users/drospond/";
    axios.get(queryUrl).then(function(res) {
      console.log(res.data.avatar_url);
      console.log(res.data.email);
    }).catch(error => console.log(error))
  }
};

module.exports = api;
