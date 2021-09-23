import { getData } from "../src/lib/service.js";

const result = await getData(0);

// user and his/her posts logged.
console.log(result);