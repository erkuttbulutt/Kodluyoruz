import axios from "axios";

async function getUser(userId) {
  axios
    .get("https://jsonplaceholder.typicode.com/users/" + userId)
    .then((res) => console.log(res.data));

  axios
    .get("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    .then((res) => console.log(res.data));
}

export default getUser;
