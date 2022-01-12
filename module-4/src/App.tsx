import { useState, useEffect } from 'react';
import { Post } from './types/Post';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  //Quando abre a página ele já carrega o "loadMovies"
  useEffect(() => {
    
  }, []);

  
  return (
    <div>
      {/* <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}>Carregar Filmes</button> */}

      {/* Enquanto tiver carregando */}
      {loading &&
        <div>Carregando...</div>
      }

      {/* Quando terminar de carregar */}
      {!loading && posts.length > 0 &&
        <>
          <div>
            <br />
            Total de Posts: {posts.length}
          </div>
          <div className="grid grid-cols-6 gap-3">
            {posts.map((item, index) => (
              <div key={index}>
                
              </div>
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>
          Estamos com problemas. Tente novamente mais tarde!
        </div>
      }
    </div>
  );
}

export default App