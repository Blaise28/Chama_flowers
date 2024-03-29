// preloader
const contener_preloader = document.querySelector(".preloader_contener");
window.addEventListener("load", () => {
  contener_preloader.classList.add("fondu_out");
});
// navigation;
const nav = document.querySelector("nav");
const links_contener = document.querySelector(".links_contener");
const btn_close = document.querySelector(".links_contener .btn_close");
const btn_open = document.querySelector(".logo div .side_bar");

btn_open.addEventListener("click", () => {
  links_contener.classList.add("active");
  btn_open.style.display = "none";
});

btn_close.addEventListener("click", () => {
  links_contener.classList.remove("active");
  btn_open.style.display = "";
});

const links = document.querySelectorAll(".links_contener li a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.stopPropagation();
    links_contener.classList.remove("active");
    btn_open.style.display = "";
  });
});

let scroll_previous = window.scrollY;
const nav_logo = document.querySelector("nav .logo");

//ca demande beaucoup de calcul a la machine

function up_down_scroll(previous, current) {
  if (previous > current) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-" + nav_logo.offsetHeight + "px";
  }
}

window.addEventListener("scroll", () => {
  let scroll_current = window.scrollY;
  let verif_class = nav.classList.contains("scroll");
  let nav_height = nav.offsetHeight;

  if (scroll_current > nav_height && !verif_class) {
    nav.classList.add("scroll");
  } else if (scroll_current > nav_height && verif_class) {
    up_down_scroll(scroll_previous, scroll_current);
  } else if (scroll_current < nav_height && verif_class) {
    nav.classList.remove("scroll");
  }
  scroll_previous = scroll_current;
});

/* End navigation */

// swap nav bar mobile

let touch_start, touch_end;

let nav_mob = document.querySelector("nav .links_contener");
nav_mob.addEventListener(
  "touchstart",
  (e) => {
    touch_start = e.targetTouches[0].clientX;
  },
  true
);
nav_mob.addEventListener("touchmove", (e) => {
  touch_end = e.targetTouches[0].clientX;
});
nav_mob.addEventListener(
  "touchend",
  (e) => {
    if (touch_start - touch_end > 50) {
      links_contener.classList.remove("active");
      btn_open.style.display = "flex";
    }
  },
  true
);

/* start search bar */

// const form_search = document.querySelector("nav form");
// const all_suggestions = form_search.querySelectorAll("datalist option");
// const search_bar = form_search.querySelector("#search_input");
// const btn_search = form_search.querySelector(".btn_search");
// const go_to_my_search = form_search.querySelector(".go_to_my_search");

// btn_search.addEventListener("click", (e) => {
//   e.stopPropagation();
//   let value = search_bar.value;
//   let id = target_ID(value);
//   go_to_my_search.setAttribute("href", `#${id}`);
// });
// function target_ID(suggestion) {
//   let id;
//   switch (suggestion) {
//     case "Panier de fleurs":
//       id = "#P_fleurs";
//       break;
//     case "Bouquet Dot":
//       id = "#B_Dot";
//       break;
//     case "Bouquet simple":
//       id = "#B_simple";
//       break;

//     default:
//       break;
//   }
// }

/* End search bar */

/* quantite input and price products */

const quant_inputs = document.querySelectorAll(".quant input");
let quant_avant = 1,
  quant_apres;
const prix_initial = 4000;

function calcul_prix(quant_avant, quant_apres, prix_initial) {
  let prix;
  if (quant_avant < quant_apres) prix = prix_initial * quant_apres;
  else prix = prix_initial * quant_avant;
  return prix;
}
export function set_value_input(inputs) {
  inputs.forEach((input_case) => {
    input_case.addEventListener("input", () => {
      let parent_input = input_case.parentElement;
      let next_Element_input = parent_input.nextElementSibling;
      let price = next_Element_input.children[0];
      quant_apres = input_case.value;
      price.innerText = calcul_prix(quant_avant, quant_apres, prix_initial);
    });
    quant_avant = input_case.value;
  });
}
set_value_input(quant_inputs);

/* heart buttons */
const heart_buttons = document.querySelectorAll(".link_prod .like");

export function heart_button_animation(hearts_buttons) {
  hearts_buttons.forEach((heart_button) => {
    heart_button.addEventListener("click", () => {
      heart_button.classList.toggle("active");
    });
  });
}

heart_button_animation(heart_buttons);

/* End heart buttons */

/* start validation contact form */

let regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regex_nom = /[^\d\W]{2,20}[\-\s\']{0,1}/;

const name = document.querySelector("form .name");
const mail = document.querySelector("form .mail");
const phone = document.querySelector("form .phone");
const message = document.querySelector("form textarea");
const button = document.querySelector("form button");

const phoneInput = window.intlTelInput(phone, {
  onlyCountries: ["BI", "CG", "KE", "RW"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

function verification_phone_number() {
  let exemp_num_p_hol = phoneInput.a.attributes.placeholder.nodeValue;
  let country_code = phoneInput.b.dataset.dialCode;
  let num = country_code.concat(phone.value);

  if (num.length == exemp_num_p_hol.length) {
    phone.classList.remove("invalid");
    return true;
  } else if (phone.value == "") {
    phone.classList.remove("invalid");
    return false;
  } else {
    phone.classList.add("invalid");
    return false;
  }
}
let name_is_valid, mail_is_valid, phone_num_is_valid, message_is_valid;

name.addEventListener("input", () => {
  name_is_valid = valid(name, regex_nom);
});
mail.addEventListener("input", () => {
  mail_is_valid = valid(mail, regex_email);
});
phone.addEventListener("input", () => {
  phone_num_is_valid = verification_phone_number();
});

function valid(input, regex) {
  if (input.value.match(regex)) {
    input.classList.remove("invalid");
    return true;
  } else if (input.value == "") {
    input.classList.remove("invalid");
    return false;
  } else {
    input.classList.add("invalid");
    return false;
  }
}
/* End validation contact form */

/* start Send email EmailJs */
(function () {
  emailjs.init("user_sA2mntyYPenxl5wK6t6bD");
})();
function send_email(nom, email, tel, message) {
  emailjs.send("service_jznakrk", "template_s9skp5d", {
    from_name: email.value,
    to_name: nom.value,
    telephone: tel.value,
    message: message.value,
  });
}
function required(nom, mail, tel, message) {
  if (
    nom.value == "" ||
    mail.value == "" ||
    tel.value == "" ||
    message.value == ""
  )
    return true;
  else return false;
}
function succes(name) {
  swal({
    title: "hey," + name.value + "",
    text: "Message recu avec success",
    icon: "success",
    button: "Ok",
  });
}
function input_require() {
  swal({
    title: "Oups...",
    text: "Renseigne bien tous les champs svp!!",
    icon: "error",
    confirmButtonColor: "red",
  });
}
function envoi_message() {
  let req = required(name, mail, phone, message);

  if (
    name_is_valid == false ||
    mail_is_valid == false ||
    phone_num_is_valid == false ||
    message.value == ""
  ) {
    input_require();
  } else {
    send_email(name, mail, phone, message);
    succes(name);
  }
}
button.addEventListener("click", (e) => {
  e.preventDefault();
  envoi_message();
  envoi_SMS();
  document.querySelector("form").reset();
});
/* End send Email */

/* start send SMS Twilo API */

function API_SMS() {
  const url =
    "https://api.twilio.com/2010-04-01/Accounts/AC918cb518fd506d9df8eb561491bd879b/Messages.json";
  const auth = "login: authentification";

  const numero = encodeURI(phone.value);
  const msg = encodeURI(message.value);
  const nom = encodeURI(name.value);
  const email = encodeURI(mail.value);

  const myHeader = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(auth),
  });
  const init = {
    method: "POST",
    headers: myHeader,
    mode: "cors",
    body:
      "To=numeroverifie&From=+12762423160&Body=\n Nom: " +
      nom +
      "\n E-mail :" +
      email +
      "\n Numero" +
      numero +
      "\n Message :" +
      msg,
  };
  fetch(url, init)
    .then((reponse) => console.log(reponse))
    .catch((error) => console.log(error));
}

function envoi_SMS() {
  if (phone_num_is_valid == false || phone.value == "") {
    input_require();
  } else {
    API_SMS();
    succes(name);
  }
}

/* End send SMS */
// function appel_tsap() {
//   const curl =
//     "https://api.twilio.com/2010-04-01/Accounts/ACc40f2c02bcfc746d30cd2046383497c2/Messages.json ";
//   const auth =
//     "ACc40f2c02bcfc746d30cd2046383497c2: da36136890b43417de5a160f0db59125";

//   const myHeader = new Headers({
//     "Content-Type": "application/x-www-form-urlencoded",
//     Authorization: "Basic " + btoa(auth),
//   });
//   const init = {
//     method: "POST",
//     headers: myHeader,
//     mode: "cors",
//     //body:"To=72148589From=whatsapp:+15203919630&Body=hello world",
//   };
//   fetch(curl)
//     .then((reponse) => console.log(reponse))
//     .catch((error) => console.log(error));
// }
// appel_tsap();

/* start share buttons */

const share_buttons = document.querySelectorAll(".link_prod .share");

share_buttons.forEach(btn=>{
  btn.addEventListener("click", async ()=>{

    window.location.hash = "#p_recent";
    const data={
      title: "Chama_flowers",
      text: "Nos produits recents",
      url :window.location.href,
    }

    navigator.share(data)
      .then(()=>console.log("Merci pour le partage"))
      .catch((e)=>console.log("error"))
      
  });
})


/* End share buttons */

/* cree dynamiquement le html  pour les carousels*/

function create_div_with_class(class_name) {
  const div = document.createElement("div");
  div.setAttribute("class", class_name);

  return div;
}
function create_modal_carousel(contener_all_carousel, carousel_elt) {
  const contener_modal = create_div_with_class("contener_modal disable");
  const cont_button_close = create_div_with_class("close_modal button_close");
  const icon_close = document.createElement("i");
  icon_close.setAttribute("class", "fas fa-times");
  const overlay = create_div_with_class("overlay close_modal");

  cont_button_close.appendChild(icon_close);
  contener_modal.appendChild(cont_button_close);
  contener_modal.appendChild(overlay);
  contener_modal.appendChild(carousel_elt);

  contener_all_carousel.appendChild(contener_modal);
}
const contener_carousel = document.querySelector(".contener");
const all_carousels = contener_carousel.querySelectorAll(".carousel");

all_carousels.forEach((carousel) => {
  create_modal_carousel(contener_carousel, carousel);
});
/* End */
