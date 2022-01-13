//OBS: Para utilizar esse documento defina-o (renomear) como App.tsx

import { useState, useEffect } from 'react'
import { Movie } from './types/Movie'

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  //Quando abre a página ele já carrega o "loadMovies"
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    //A requisição padrão do fetch é um "get"
    fetch('https://api.b7web.com.br/cinema')
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        setMovies(json);
      })
      .catch((e)=>{
        setLoading(false); //Carregamento parado
        setMovies([])
        console.error(e);
      });
  }

  //Faz o mesmo que o código acima, porém de maneira síncrona, esperando a requisição do fetch ser finalizada para continuar
  // const loadMovies = async () => {
  //   try{
  //     setLoading(true);
  //     // O "await" espera a resposta do fetch
  //     let response = await fetch('https://api.b7web.com.br/cinema/')
  //     let json = await response.json();
  //     setLoading(false); // Terminou o carregamento dos filmes
  //     setMovies(json);
  //   } catch(e){
  //     setLoading(false); //Carregamento parado
  //     setMovies([])
  //     console.error(e);
  //   }
  // }

  return (
    <div>
      {/* <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}>Carregar Filmes</button> */}

      {/* Enquanto tiver carregando */}
      {loading &&
        <div>Carregando...</div>
      }

      {/* Quando terminar de carregar */}
      {!loading && movies.length > 0 &&
        <>
          <div>
            <br />
            Total de Filmes: {movies.length}
          </div>
          <div className="grid grid-cols-6 gap-3">
            {movies.map((item, index) => (
              <div key={index}>
                <img src={item.avatar} className="w-200 block" alt="" />
                <br />
                {item.titulo}
              </div>
            ))}
          </div>
        </>
      }

      {!loading && movies.length === 0 &&
        <div>
          Estamos com problemas. Tente novamente mais tarde!
        </div>
      }
    </div>
  );
}

export default App