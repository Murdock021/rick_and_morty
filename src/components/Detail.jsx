import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '56c6058834fd.f27c49183ca32fa9b84f';

const Detail = () => {
   const { id } = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(response => response.data)
         .then((data) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('Não existe um personagem com esse ID');
            }
         });
      return setCharacter({});
   }, [id]);


   return (
      <div >

         <div>
            <h1>{character?.name}</h1>
         </div>


         <div>
            <img src={character?.image} alt={character?.name} />
         </div>

         <div>
            <label htmlFor="status">Status: {character?.status} </label>
            <br/>
            <label htmlFor="specie">Specie: {character?.species} </label>
            <br/>
            <label htmlFor="gender">Gender: {character?.gender} </label>
            <br/>
            <label htmlFor="origin">Origin: {character?.origin?.name} </label>
            
         </div>


      </div>
   )
}

export default Detail;