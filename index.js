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

/* start share buttons */

/* End share buttons */

/* start validation contact form */

let regex_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regex_nom=/[^\d\W]{2,20}[\-\s\']{0,1}/;

const name=document.querySelector("form .name");
const mail=document.querySelector("form .mail");
const phone=document.querySelector("form .phone");
const message=document.querySelector("form textarea");
const button=document.querySelector("form button");

const phoneInput = window.intlTelInput(phone, {
    onlyCountries : ["BI", "CG", "KE", "RW"],
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

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
function verification_phone_number(){
    let exemp_num_p_hol=phoneInput.a.attributes.placeholder.nodeValue;
    let country_code=phoneInput.b.dataset.dialCode;
    let num=country_code.concat(phone.value);
    
    if(num.length == exemp_num_p_hol.length){
        phone.classList.remove("invalid");
        return true;
    }
    else if(phone.value==""){
        phone.classList.remove("invalid");
        return false;
    }
    else{
        phone.classList.add("invalid");
        return false;
    }
}
let name_is_valid,mail_is_valid,phone_num_is_valid,message_is_valid;

name.addEventListener("input",()=>{
    name_is_valid=valid(name,regex_nom);
});
mail.addEventListener("input",()=>{
    mail_is_valid=valid(mail,regex_email);
});
phone.addEventListener("input",()=>{
    phone_num_is_valid=verification_phone_number();
});
/* End validation contact form */

/* start Send email EmailJs */

function send_email(nom,email,tel,message){
    emailjs.send("service_jznakrk","template_s9skp5d",{
    from_name: email.value,
    to_name: nom.value,
    telephone: tel.value,
    message: message.value,
    });
}
function required(nom,mail,tel,message){
    if(nom.value=="" || mail.value=="" || tel.value=="" || message.value=="")
        return true;
    else
        return false;
}
function succes(name){
    swal({
      title: "hey,"+name.value+"",
      text: "Message recu avec success",
      icon: "success",
      button: "Ok",
    });
}
function input_require(){
    swal({
      title: "Oups...",
      text: "Renseigne bien tous les champs svp!!",
      icon: "error",
      confirmButtonColor:"red",
    });
}
function envoi_message() {
//   let req= required(name,mail,phone,message);

   if(name_is_valid==false || mail_is_valid==false 
    || phone_num_is_valid==false|| message.value==""){
    input_require();
   }
   else
   {
    send_email(name,mail,phone,message);
    succes(name);
   }
}
button.addEventListener("click",(e)=>{
    e.preventDefault();
    envoi_message();
    envoi_SMS();
    document.querySelector("form").reset();
})
;
/* End send Email */

 /* start send SMS Twilo API */

function API_SMS(){
    const url='https://api.twilio.com/2010-04-01/Accounts/AC918cb518fd506d9df8eb561491bd879b/Messages.json';
    const auth="AC918cb518fd506d9df8eb561491bd879b: 7d9e80c904d4b90e4d6c8ca84e7a0961";

    const numero=encodeURI(phone.value);
    const msg=encodeURI(message.value);
    const nom=encodeURI(name.value);
    const email=encodeURI(mail.value);

    const myHeader=new Headers({
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":"Basic " + btoa(auth)
    });
    const init={
        method: "POST",
        headers:myHeader,
        mode:"cors",
        body:"To=+25772148589&From=+12762423160&Body=\n Nom: "+
        nom+"\n E-mail :"+
        email+"\n Numero"+
        numero+"\n Message :"+
        msg
    }

    fetch(url,init)
        .then(reponse=>console.log(reponse))
        .catch(error=>console.log(error));
}

function envoi_SMS(){
    if(phone_num_is_valid==false ||
     phone.value=="" ){
        input_require();
    }
    else{
        API_SMS();
        succes(name);
    }
}


 /* End send SMS */