import { Link } from "react-router-dom";
import { addFav, removeFav } from '../redux/actions';
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({ id, name, species, gender, image });
      }

   }


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav && fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

   return (
      <div>
         
         <div>
            <Link to={`/detail/${id}`}>
               <h2 >{name}</h2>
            </Link>
         </div>
         <img src={image} alt={name} />
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>

         <button onClick={() => onClose(id)}>X</button>
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);