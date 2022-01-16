import axios from 'axios';

const http = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
   getAllAlbums: async () => {
      let response = await http.get('/albums');
      return response.data;
   },
   getAllPhotos: async (albumNum: string) => {
      let response = await http.get(`/albums/${albumNum}/photos`)
      return response.data;
   }
}