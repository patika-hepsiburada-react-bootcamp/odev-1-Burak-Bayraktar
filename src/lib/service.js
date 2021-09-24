import axios from "axios";


// fetch user and his/her posts data.
export async function getData(userId) {
  const result = await axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      // user fetched.
      const { data: user } = res;
      return user;
    })
    .then(async (user) => {
      // user's posts fetched.
      const { data: posts } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const userAndPosts = {
        ...user,
        posts,
      };

      return userAndPosts;
    }).catch(({response}) => {
        return `Error occurred: ${response.status} ${response.statusText}`;
    });

  return result;
}