// Todas as requisições passam por esse arquivo
import axios from 'axios';

const http = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
 });

export const api = {
   getAllPosts: async () => {
      //Com axios
      let response = await http.get(`/posts`)
      
      return response.data;

      // Com Fetch
      // let response = await fetch(`${BASE}/posts`);
      // let json = await response.json();
      // return json;
   },
   addNewPost: async (title: string, body: string, userId: number) => {
      //Com axios
      let response = await http.post(`/posts`, {
         title, body, userId
      });

      return response.data;

      //Com Fetch
      // let response = await fetch('${BASE}/posts', {
      //    method: 'POST',
      //    body: JSON.stringify({ title, body, userId}),
      //    headers: { 'Content-Type': 'application/json' }
      // });
      // let json = await response.json();
      // return json;
   }
}