// preloader
const contener_preloader=document.querySelector(".preloader_contener");
window.addEventListener("load",()=>{
    contener_preloader.classList.add("fondu_out");
});
// navigation
const categories=document.querySelector(".categ");
const sub_titles_categ=document.querySelector(".subtitles_categ");
const down_up_bar=document.querySelector(".down_up_bar");

categories.addEventListener("click",(e)=>{
    sub_titles_categ.classList.toggle("active");
    down_up_bar.classList.toggle("active");
});

const nav_scroll=document.querySelector(".links_contener");
const btn_close=document.querySelector(".links_contener .btn_close");
const btn_open=document.querySelector(".logo div .side_bar");
const bloc=document.querySelector("nav .links_contener");

btn_open.addEventListener("click",()=>{
    bloc.classList.add("active");
    btn_open.style.display="none";
});

btn_close.addEventListener("click",()=>{
    bloc.classList.remove("active");
    btn_open.style.display="flex";
});

let nav_links=document.querySelector(".links_contener .link");
let nav_categ_links=document.querySelector(".categ .subtitles_categ a");

function nav_links_click(element) {
   element.addEventListener("click",()=>
    {
        bloc.classList.remove("active"); 
        btn_open.style.display="flex";
    }); 
}
nav_links_click(nav_links);
nav_links_click(nav_categ_links);

//swap nav bar mobile
let touch_start,touch_end;

let nav_mob=document.querySelector("nav .links_contener");
nav_mob.addEventListener("touchstart",(e)=>{
    touch_start=e.targetTouches[0].clientX;
});
nav_mob.addEventListener("touchmove",(e)=>{
    touch_end=e.targetTouches[0].clientX;
});
nav_mob.addEventListener("touchend",(e)=>{
    if(touch_start - touch_end > 50)
    {
        bloc.classList.remove("active");
        btn_open.style.display="flex";
    }
});
/* quantite input and price products */

const quant_inputs=document.querySelectorAll(".quant input");
let quant_avant=1,quant_apres;
const prix_initial=4000;
quant_inputs.forEach(input_case=>{
    input_case.addEventListener("input",()=>{
        let parent_input=input_case.parentElement;
        let next_Element_input=parent_input.nextElementSibling;
        let price=next_Element_input.children[0];
        quant_apres=input_case.value;

        price.innerText=calcul_prix(quant_avant,quant_apres,prix_initial);
    });
    quant_avant=input_case.value;
})
function calcul_prix(quant_avant,quant_apres,prix_initial){
    let prix;
    if(quant_avant < quant_apres)
        prix=prix_initial * quant_apres;
    else
        prix=prix_initial * quant_avant;
    return prix;
}
/* like button */