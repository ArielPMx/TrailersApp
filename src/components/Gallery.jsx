import React from 'react';
import Axios from 'axios';


const Table = () => {
  const [charList, setCharList] = React.useState([]);

  React.useEffect(() => {
    const getCharList = async () => {
      const response = await Axios.get('https://mern-rpgchar.herokuapp.com/read');
      setCharList(response.data);
    };
    getCharList();
  }, []);

  return (
    <div className="char-list">
      <h1>Trailers registrados</h1>
      {charList.map((char, index) => (
        <div className="char" key={index}>
          <h3>
          Título: <span>{char.name}</span>
          </h3>
          <h3>
          Reseña: <span>{char.job}</span>
          </h3>
          <iframe width="480" height="315" src={`https://www.youtube.com/embed/${char.weapon}`}
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
         
        </div>
      ))}
    </div>
  );
};

export default Table;