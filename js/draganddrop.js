function allowdrop(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.datatransfer.setData("text", ev.target.id)
}
function drop(ev){
    ev.preentdefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}