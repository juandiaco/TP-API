import urlWebServices from "./conf-api";

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

export const getLocalStorage = function(){
    return localStorage;
}


export var localRecetas ;

function setLocalRecetas (recetas){
    localRecetas = recetas;
}

export const getLocalRecetas = function(){
    console.log("RETURN DEL LOCAL",localRecetas);
    return localRecetas;
}

export const recetaController = async function (receta){
    let url = urlWebServices.crearReceta;
    const formData = new URLSearchParams();

    formData.append ('titulo', receta.titulo);
    formData.append ('categoria', receta.categoria);
    formData.append ('ingredientes', receta.ingredientes);
    formData.append ('duracion', receta.duracion);
    formData.append ('dificultad', receta.dificultad);
    formData.append ('procedimiento', receta.procedimiento);
    formData.append('creador',receta.creador);
    formData.append('borrador', receta.borrador);
    formData.append('imagenReceta', receta.imagenReceta);
    
   try{
    let response = await fetch (url,{
        method: "POST",
        mode:"cors",
        headers:{
            'Accept':'application/x-www-form-urlencoded',
            'x-access-token': localStorage.getItem('x'),
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
                localStorage.setItem("titulo",receta.titulo);
                localStorage.setItem("id",receta._id);
                localStorage.setItem("categoria", receta.categoria);
                localStorage.setItem("ingredientes",receta.ingredientes);
                localStorage.setItem("procedimiento",receta.procedimiento);
                localStorage.setItem("dificultad",receta.dificultad);
                localStorage.setItem("duracion",receta.duracion);
                localStorage.setItem("updated",receta.updated);
                localStorage.setItem("imagenReceta", receta.imagenReceta);

                console.log("TITULO",receta.titulo);
                console.log("ID",localStorage.getItem("id"));
                console.log("CATEGORIA", receta.categoria);
                console.log("INGREDIENTES", receta.ingredientes);
                console.log("PROCEDIMIENTO", receta.procedimiento);
                console.log("DIFICULTAD", receta.dificultad);
                console.log("DURACION", receta.duracion);
                console.log("IMAGENRECETA",localStorage.getItem("imagenReceta"));

                
                return ({rdo:0,mensaje:"Ok"});//correcto
            }
            default:
            {
                //error
                return ({rdo:1,mensaje:"Ha ocurrido un error"});                
            }
        }
}
    catch(error)
    {
        console.log("error",error);
    };
}


export const misRecetasController = async function(creador){
    let url = urlWebServices.misRecetas;
    const formData = new URLSearchParams();
    formData.append('creador',localStorage.getItem("id"));
    console.log("CREADOR", localStorage.getItem("id"));

    try{
        let response = await fetch(url,{
            method: "GET",
            mode:"cors",
            headers:{
                'creador': localStorage.getItem("id"),
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem("x"),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            
        });
        console.log("RESPONSE", response);
        let respuesta = response.status;
        let data = await response.json();
        console.log("jsonresponse",data);
        switch(respuesta)
            {
                case 201:
                {
                    let recetas = data.recetasEncontradas;
                    //localRecetas = recetas;
                    setLocalRecetas(recetas);
                    localStorage.setObj("recetas",recetas);
                    console.log("LOCAL RECETAS",localStorage.getObj("recetas"));
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


}

export const traerRecetaCompletaCon = async function(){
    let url = urlWebServices.traerRecetaCompleta;
    try{
        let response = await fetch (url,{
            method: "GET",
            mode: "cors",
            headers:{
                'creador': localStorage.getItem("id"),
                'titulo': localStorage.getItem("titulo"),
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        console.log("RESPONSE", response);
        let respuesta = response.status;
        let data = await response.json();
        console.log("jsonresponse",data);

        switch(respuesta)
            {
                case 201:
                {
                    let recetas = data.recetasEncontradas;
                    //localRecetas = recetas;
                    setLocalRecetas(recetas);
                    localStorage.setObj("recetasPublicadas",recetas);
                    console.log("CREADOR",localStorage.getItem("titulo"));
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
}


export const traerRecetas = async function(){
    let url = urlWebServices.traerRecetas;
    try{
        let response = await fetch(url,{
            method: "GET",
            mode:"cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            
        });
        console.log("RESPONSE", response);
        let respuesta = response.status;
        let data = await response.json();
        console.log("jsonresponse",data);
        switch(respuesta)
            {
                case 201:
                {
                    let recetas = data.recetasEncontradas;
                    //localRecetas = recetas;
                    setLocalRecetas(recetas);
                    localStorage.setObj("recetasPublicadas",recetas);
                    console.log("LOCAL RECETAS",localStorage.getObj("recetasPublicadas"));
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
}

export const deleteRecetaController = async function (receta){
    let url = urlWebServices.eliminarReceta;
    const formData = new URLSearchParams();
    formData.append('_id',receta);
    try{
        let response = await fetch (url,{
            method: "DELETE",
            mode:"cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem("x"),
                'Origin':'http://localhost:3000',
                
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        })
        console.log("RESPONSE", response);
        let respuesta = response.status;

        let data = await response.json();
        console.log("jsonresponse",data);

        switch(respuesta){
            case 201:
                {
                    
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
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




export const filtrarRecetaController = async function (filtros){
    let url = urlWebServices.filtrarRecetas;
    const formData = new URLSearchParams();
    formData.append("categoria",filtros.categoria);
    formData.append("ingredientes",filtros.ingredientes);
    formData.append("dificultad",filtros.dificultad);
    try{
        let response = await fetch (url,{
            method: "POST",
            mode:"cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        });
        console.log("RESPONSE", response);
        let respuesta = response.status;
        let data = await response.json();
        console.log("jsonresponse",data);
        switch(respuesta)
            {
                case 201:
                {
                    let recetas = data.recetasEncontradas;
                    //localRecetas = recetas;
                    
                    localStorage.setObj("recetasFiltradas",recetas);
                    console.log("LOCAL RECETAS",localStorage.getObj("recetasFiltradas"));
                    return ({rdo:0,mensaje:"Ok"});//correcto
                    
                }
                case 400:
                {
                    //error mail
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});
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

}








///-------------------------------------------------USUARIO---------------------------------------------------
///----------------------------------------------------------------------------------------------------
///----------------------------------------------------------------------------------------------------
///----------------------------------------------------------------------------------------------------
///----------------------------------------------------------------------------------------------------
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
                    localStorage.setItem("perfil",user.perfil);
                    console.log("NOMBRE",user.name);
                    console.log("EMAIL",user.email);
                    console.log("ID",localStorage.getItem("id"));
                    console.log("PERFIL",localStorage.getItem("perfil"));                    
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


