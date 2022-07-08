const urlApi = "http://localhost:5000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"login/",
    registrarUser: urlApi + "registrar/",
    
}

export default urlWebServices;