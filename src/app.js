import { getData } from "../src/lib/service.js";

const userAndPosts = await getData(3);

// user and his/her posts logged.
console.log(userAndPosts);