//OBS: Para utilizar esse documento defina-o (renomear) como App.tsx

//Utilizando a API Fake: https://jsonplaceholder.typicode.com/

import { useState, useEffect } from 'react';
import { PostForm } from './components/PostForm';
import { Post } from './types/Post';
import { PostItem } from './components/PostItem'
import { api } from './api'

function App() {
   const [posts, setPosts] = useState<Post[]>([]);
   const [loading, setLoading] = useState(false);

   //Quando abre a página ele já carrega o "loadMovies"
   useEffect(() => {
      loadPosts();
   }, []);

   //Carregar um Post (Get)
   const loadPosts = async () => {
      setLoading(true);
      let json = await api.getAllPosts();
      setLoading(false);
      setPosts(json);
   }

   //Adicionar elemento
   const addPost = async (title: string, body: string) => {

      let json = await api.addNewPost(title, body, 1);

      if (json.id) { //Envio deu certo
         alert('Post adicionado com sucesso')
      } else {
         alert('Ocorreu algum erro')
      }
   }

   return (
      <div className="p-5">
         {loading &&
            <div>Carregando...</div>
         }

         <PostForm onAdd={addPost} />

         {!loading && posts.length > 0 &&
            <>
               <div>
                  <br />
                  Total de Posts: {posts.length}
               </div>
               <div>
                  {posts.map((item, index) => (
                     <PostItem data={item} />
                  ))}
               </div>
            </>
         }

         {!loading && posts.length === 0 &&
            <div>
               Não há Posts para exibir.
            </div>
         }
      </div>
   );
}

export default App