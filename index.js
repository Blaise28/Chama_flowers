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

const nav=document.querySelector("nav")
const links_contener=document.querySelector(".links_contener");
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

/*
let all_nav_links=document.querySelectorAll(".links_contener .link");
window.addEventListener("scroll",()=>{
    let hauteur =nav.offsetHeight - links_contener.offsetHeight;
    if (window.scrollY > hauteur) {
        links_contener.classList.toggle("active");
        links_contener.style.background="#1D2521";

        all_nav_links.forEach(link=>{
            link.style.color="#fff";
        });
    }
});
*/
/* End navigation */

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

/* heart buttons */
const heart_buttons=document.querySelectorAll(".link_prod .like");
 
heart_buttons.forEach(heart_button => {
     heart_button.addEventListener("click",()=>{
        heart_button.classList.toggle("active");
     });
 });

/* End heart buttons */

/* validation contact form */

let regex_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regex_nom=/^[a -zéè][-'a-zA-Zéè]+$/;

const name=document.querySelector("form .name");
const mail=document.querySelector("form .mail");
const phone=document.querySelector("form .phone");

/*let nom_valid,mail_valid,tel_valid,message_valid;

mail.addEventListener("input",()=>{
    if(mail.value.match(regex_email)){
        mail.classList.remove("invalid");
        return true;
    }
    else if(mail.value==""){
        mail.classList.remove("invalid");
        return false;
    }
    else{
        mail.classList.add("invalid");
        return false;
    }
});
*/
function valid(input,regex){
    if(input.value.match(regex)){
        input.classList.remove("invalid");
        return true;
    }
    else if(input.value==""){
        input.classList.remove("invalid");
        return false;
    }
    else{
        input.classList.add("invalid");
        return false;
    }
}
name.addEventListener("input",()=>{
    valid(name,regex_nom);
});
mail.addEventListener("input",()=>{
    valid(mail,regex_email);
});
/* End validation contact form */