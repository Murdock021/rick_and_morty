import { Link } from "react-router-dom";

const Error = ()=>{
    return(
        
        <div>
            <h1>
                ¡Error 404! Esta ruta no existe.
            </h1>
            <Link to="/home">
             <p>Volver a la pagina principal</p>
            </Link>
        </div>
    )
}


export default Error;