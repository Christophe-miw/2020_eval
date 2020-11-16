/* $(n)             : raccourci pour atteindre un noeud HTML                                           */
$ = (n)=>{return document.getElementById(n)};

//pour afficher/cacher une div au clic, avec une classe off dans le css en display none
var x=document.getElementById("menu");
$('burger').onclick=function(){
    x.classList.toggle("off");
}