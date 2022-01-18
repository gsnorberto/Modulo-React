import { useParams } from "react-router-dom"

import axios from 'axios';


const http = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
   getAllAlbums: async () => {
      let response = await http.get('/albums');
      return response.data;
   },
   getElementAlbum: async (num: number) => {
      let response = await http.get(`/albums/${num}`);
      return response.data;
   },
   getAllPhotos: async (num: number) => {
      // Mudar para dinâmico
      let response = await http.get(`/albums/${num}/photos`)
      return response.data;
   },
   getElementPhoto: async (num: number) => {
      let response = await http.get(`/photos/${num}`)
      return response.data;
   }
}