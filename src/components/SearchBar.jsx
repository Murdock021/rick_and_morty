
import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   const [id, setId] = useState('');
   
   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div id="canvas_container" >
            <input type ='search' onChange ={handleChange} value = {id} placeholder ="Id." />
            <button onClick = {() => {onSearch(id); setId('') }}>Agregar</button> 
      </div>
   );
}
