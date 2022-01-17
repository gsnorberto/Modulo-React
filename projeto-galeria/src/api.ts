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
   getAllPhotos: async () => {
      let response = await http.get(`/albums/1/photos`)
      return response.data;
   }
}