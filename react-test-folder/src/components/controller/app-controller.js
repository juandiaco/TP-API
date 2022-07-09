import urlWebServices from "./conf-api";

export const getLocalStorage = function(){
    return localStorage;
}

export const loginController = async function (usuario){

    let url = urlWebServices.login;
    const formData = new URLSearchParams();
    formData.append('email', usuario.email);
    formData.append('password', usuario.password);
    
    console.log("EMAIL");
    console.log("-----",usuario.email)
    
    try{
        let response = await fetch(url,{
            method: "POST",
            mode:"cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        });
        console.log("RESPONSE",response);
        let respuesta = response.status;
        //console.log("response", respuesta);
        
        let data = await response.json();
        console.log("jsonresponse",data);
        switch(respuesta)
            {
                case 201:
                {
                    //guardo token
                    localStorage.setItem("x",data.loginUser.token);
                    //guardo usuario logueado
                    let user = data.loginUser.user;
                    localStorage.setItem("nombre",user.name);
                    localStorage.setItem("email",user.email);
                    localStorage.setItem("id",user._id);
                    localStorage.setItem("date",user.date);
                    localStorage.setItem("password",user.password);
                    console.log("NOMBRE",user.name);
                    console.log("EMAIL",user.email);
                    console.log("ID",localStorage.getItem("id"));
                    console.log("PASSWORD", localStorage.getItem("password"));
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 400:
                {
                    //error mail
                    return ({rdo:1,mensaje:"El mail o la contraseña no son correctos."});
                }

                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
};


export const createController = async function (usuario){

    let url = urlWebServices.registrarUser;
    const formData = new URLSearchParams();
    formData.append('email', usuario.email);
    formData.append('password', usuario.password);
    formData.append('name',usuario.name);
    formData.append('date',usuario.date);
    formData.append('perfil',usuario.perfil);
    
    try{
        let response = await fetch(url,{
            method: "POST",
            mode:"cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        });
        console.log("RESPONSE",response);
        let respuesta = response.status;
        //console.log("response", respuesta);
        
        let data = await response.json();
        console.log("jsonresponse",data);
    
        switch(respuesta)
            {
                case 201:
                {
                    //guardo token
                    localStorage.setItem("x",data.salidaCreacion.token);
                    //guardo usuario logueado
                    let user = data.salidaCreacion.user;
                    localStorage.setItem("nombre",user.name);
                    localStorage.setItem("email",user.email);
                    localStorage.setItem("id",user._id);
                    localStorage.setItem("date",user.date);
                    localStorage.setItem("password",user.password);
                    console.log("NOMBRE",user.name);
                    console.log("EMAIL",user.email);
                    console.log("ID",localStorage.getItem("id"));
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 400:
                {
                    //error mail
                    return ({rdo:1,mensaje:"Hubo un error"});
                }
                default:
                    {
                        return({rdo:1,mensaje:"Hubo un error"})
                    }

            }
    }        
    catch(error)
    {
        console.log("error",error);
    };
}

export const editController = async function (usuario){

    let url = urlWebServices.editarUser;
    const formData = new URLSearchParams();
    formData.append('_id', usuario._id);
    formData.append('password', usuario.password);
    formData.append('name',usuario.name);
    
    console.log("Usuario en controller",usuario);

    try{
        let response = await fetch(url,{
            method: "PUT",
            mode:"cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem("x"),
                'Origin':'http://localhost:3000',
                
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        });
        console.log("RESPONSE",response);
        let respuesta = response.status;
        //console.log("response", respuesta);
        
        let data = await response.json();
        console.log("jsonresponse",data);
        
        switch(respuesta)
            {
                case 201:
                {
                    
                    localStorage.setItem("nombre",usuario.name);
                    
                    localStorage.setItem("password",usuario.password);
                    console.log("NOMBRE",localStorage.getItem("nombre"));
                    console.log("Password",localStorage.getItem("password"));
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 400:
                {
                    //error mail
                    return ({rdo:1,mensaje:"Hubo un error"});
                }
                default:
                    {
                        return({rdo:1,mensaje:"Hubo un error"})
                    }

            }
    }
    catch(error)
    
    {
        console.log("error",error);
    };

}


