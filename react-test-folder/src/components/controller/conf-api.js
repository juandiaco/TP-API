const urlApi = "http://localhost:5000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"login/",
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg: urlApi + "api/users/uploadImg",
}

export default urlWebServices;