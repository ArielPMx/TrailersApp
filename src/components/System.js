import React from 'react';
import Axios from 'axios';

const System = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [race, setRace] = React.useState('');
  const [job, setJob] = React.useState('');
  const [weapon, setWeapon] = React.useState('');
  const nameRef = React.useRef();
  const ageRef = React.useRef();
  const raceRef = React.useRef();
  const jobRef = React.useRef();
  const weaponRef = React.useRef();

  const addChar = () => {
    if (
      !name ||
      !age ||
      !race ||
      !job ||
      !weapon ||
      /^\s*$/.test(name, age, race, job, weapon)
    ) {
      alert('Ingresaste datos invalidos.');
      return;
    }

    Axios.post('https://mern-rpgchar.herokuapp.com/insert', {
      name: name,
      age: age,
      race: race,
      job: job,
      weapon: weapon,
    });
    alert('Se ha ingresado correctamente la pelicula!');
    nameRef.current.value = '';
    ageRef.current.value = '';
    raceRef.current.value = '';
    jobRef.current.value = '';
    weaponRef.current.value = '';
  };

  return (
    <div className="form">
      <h1>Crud Peliculas</h1>
      <form className="input-wrapper">
        <label htmlFor="name">Título:</label>
        <input
          id="name"
          type="text"
          ref={nameRef}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <label htmlFor="age">Año:</label>
        <input
          id="age"
          type="number"
          ref={ageRef}
          onChange={({ target }) => setAge(target.value)}
          required
        />
        <label htmlFor="race">Director:</label>
        <input
          id="race"
          type="text"
          ref={raceRef}
          onChange={({ target }) => setRace(target.value)}
          required
        />
        <label htmlFor="job">Reseña:</label>
        <input
          id="job"
          type="text"
          ref={jobRef}
          onChange={({ target }) => setJob(target.value)}
          required
        />
        <label htmlFor="weapon">ID del video:</label>
        <input
          id="weapon"
          type="text"
          ref={weaponRef}
          onChange={({ target }) => setWeapon(target.value)}
          required
        />
      </form>
      <button className="btn" onClick={addChar}>
        Agregar
      </button>
    </div>
  );
};

export default System;
