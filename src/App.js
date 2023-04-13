import './App.css';
import Cards from './components/Cards.jsx';
import About from './components/About';
import Error from './components/Error';
import Detail from './components/Detail';
import Form from './components/Form';
import Nav from './components/Nav';
import Favorites from './components/Favorites';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '56c6058834fd.f27c49183ca32fa9b84f'



const email = 'diogomachadocmb@gmail.com'
const password = '123abc'


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);


   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
  !access && navigate('/');
}, [access, navigate]);



   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(response => response.data)
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

  

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== (id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>

         {
            location.pathname !== '/' && <Nav onSearch={onSearch} access={access} setAccess={setAccess} />

         }


         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<Error/>} />
         </Routes>

      </div>
   );
}

export default App;
