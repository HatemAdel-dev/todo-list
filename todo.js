
let btnElm=document.getElementById("btn-js");
let inputElm=document.getElementById("input-js");
let containerElm=document.getElementById("toDoContainer");

btnElm.addEventListener('click',()=>{
  var paragraph=document.createElement('p');
  paragraph.innerText=inputElm.value;
  containerElm.appendChild(paragraph);
  inputElm.value='';
  paragraph.addEventListener('click',()=>{
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener('dblclick',()=>{
    containerElm.removeChild(paragraph);
  })
})