
const phoneInputField = document.querySelector("#phone");
let place_holder;
// phoneInputField.addEventListener("input",()=>{
//     place_holder=phoneInputField.placeholder;
// });
const phoneInput = window.intlTelInput(phoneInputField, {
    onlyCountries : ["BI", "CG", "KE", "RW"],
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
place_holder=document.querySelector("#phone").placeholder;
const info = document.querySelector(".alert-info");

function process(event) {
    event.preventDefault();

    const phoneNumber = phoneInput.getNumber();

    info.style.display = "";
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;

    verification();
}
let exemp_num_p_hol,num,country_code;
function verification(){
    exemp_num_p_hol=phoneInput.a.attributes.placeholder.nodeValue;
    country_code=phoneInput.b.dataset.dialCode;
    num=country_code.concat(phoneInputField.value);
    
    if(num.length == exemp_num_p_hol.length){
        console.log("numero valide");
    }
    else
        console.log("Erreur numero");
}