let ListaAmigos=[];
function LimpiarCaja(){
    document.getElementById('amigo').value='';
}
function agregarAmigo(){
    let amigo=document.getElementById('amigo').value;
    if (amigo===""){
        alert("debes ingresar un nombre")
        LimpiarCaja()
    }else{
        ListaAmigos.push(amigo);
        LimpiarCaja();
    }
    console.log(ListaAmigos)
    crearLista()
    return;
}
function crearLista(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML="";
    ListaAmigos.forEach(function(amigo){
        let li = document.createElement("li"); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    })
}
function sortearAmigo(){
    let indice=Math.floor(Math.random()*ListaAmigos.length);
    let amigoSecreto=ListaAmigos[indice];
    if (ListaAmigos.length<=1){
        alert("no hay amigos suficientes para realizar el sorteo");
    }else{
        let resultado=document.getElementById('resultado');
        resultado.innerHTML=`tu amigo secreto sera: ${amigoSecreto}`;
    }
}