import { useState } from "react";
import validation from "./Validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: '',

    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })


        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
        
    }

    const handleSubmit = (event) =>{
     event.preventDefault();
     login(userData);
    }
   
    return (
        <form onSubmit ={handleSubmit}>
            <label htmlFor="email " ></label>
            <input type="email" name="email" placeholder='E-mail:' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
            <br />
            <label htmlFor="password " ></label>
            <input type="password" name="password" placeholder='Password:' value={userData.password} onChange={handleChange} />
            {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}
            <br />
            <button>Submit</button>
        </form>
    )
}
export default Form; 
