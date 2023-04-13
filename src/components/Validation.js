const validation = (userData) =>{
    const errors = {};


    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = 'O email não é valido'
    }
    if (!userData.email) {
        errors.email = 'O email é obrigatório' 
    }
    if (userData.email.length > 35 ) {
        errors.email = 'O email deve ter no máximo 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'O password deve conter algum número'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'O password deve ter no mínimo 6 ou máximo 10 caracteres'
    }


    return errors;

    
}
export default validation;