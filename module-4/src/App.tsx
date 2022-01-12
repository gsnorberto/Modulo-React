//Utilizando a API Fake: https://jsonplaceholder.typicode.com/

import { useState, useEffect, ChangeEvent } from 'react';
import { PostForm } from './components/PostForm';
import { Post } from './types/Post';
import { PostItem } from './components/PostItem'

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
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setLoading(false);
    setPosts(json);
  }

  //Adicionar elemento
  const handleAddPost = async (title: string, body:string) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: { 'Content-Type': 'application/json' } 
    });
    
    let json = await response.json();

    if(json.id){ //Envio deu certo
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

      <PostForm onAdd={handleAddPost}/>

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