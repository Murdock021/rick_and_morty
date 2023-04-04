export default function SearchBar(onSearch) {
   return (
      <div>
         <nav>
            <input type='search' placeholder="Id." />
            <button onClick={onSearch}>Agregar</button> 
         </nav>
      </div>
   );
}
