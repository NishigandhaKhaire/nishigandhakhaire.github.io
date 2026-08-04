const words = [
"AI Data Analytics Intern",
"SEO Intern",
"Marketing Graduate",
"MBA Aspirant",
"Business Analytics Enthusiast"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){

document.getElementById("typing").textContent=current.substring(0,j--);

if(j<0){

isDeleting=false;
i++;

if(i==words.length)
i=0;

}

}

else{

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1000);

return;

}

}

setTimeout(type,isDeleting?60:120);

}

type();
