 "use strict";

const nickname = document.querySelector(".js-nickname");
function paintNick(nickna){
    nickname.innerHTML = nickna;
}

 fetch ('./file.json')
    .then((response)=> response.json())
    .then((data)=>{
        console.log("respuesta del servidor");
        console.log(data.configEntities.identityStore.nickname);
        const nick = (data.configEntities.identityStore.nickname);
        //nickname.innerHTML = nick;
        //move this to its own function and then use the following
        paintNick(nick);
    })
//main a programa principal
    console.log("pagina principal");