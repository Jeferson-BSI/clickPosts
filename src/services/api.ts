import axios from 'axios';

// Post: https://jsonplaceholder.typicode.com/posts
// Users: https://jsonplaceholder.typicode.com/users


export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});