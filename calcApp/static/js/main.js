const socket=new WebSocket("ws://localhost:8000/ws/calc/");
socket.onmessage=(e)=>{
    result=JSON.parse(e.data).result;
    document.getElementById("result").value+=result+"\n";
}
socket.onclose=(e)=>{
    console.log("socket closed");
}

document.getElementById("expr").focus();
document.getElementById("expr").onkeyup=function(e){
    if(e.key==="Enter"){
        document.getElementById('submit').click();
        document.getElementById("expr").value="";
    }
};
document.getElementById("submit").onclick=function(e){
    expr=document.getElementById("expr").value
    socket.send(JSON.stringify({
            expression:expr
        }))
    document.getElementById("result").value=expr+"= "
}
