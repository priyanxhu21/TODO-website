let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click", function(){
    let item= document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("Delete");
    item.appendChild(delbtn);
    inp.value = "";
});
ul.addEventListener("click" , function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});