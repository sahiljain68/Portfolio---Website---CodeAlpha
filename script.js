const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top=window.scrollY;
const offset=section.offsetTop-200;
const height=section.offsetHeight;

if(top>offset && top<offset+height){

section.style.opacity="1";
section.style.transform="translateY(0)";

}else{

section.style.opacity=".3";
section.style.transform="translateY(50px)";

}

})

});