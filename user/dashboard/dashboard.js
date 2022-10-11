import { open_modal } from "../dashboard/js/modal";
import { file, select_file } from "../dashboard/js/modal_add_flower";

const open_add_flower_modal = document.querySelectorAll(
  ".open_modal_add_flower"
);
open_add_flower_modal.forEach((link_pub) => {
  link_pub.addEventListener("click", open_modal);
});
file.addEventListener("input", select_file);

const open_choice_modal = document.querySelectorAll(".open_modal_choice");
open_choice_modal.forEach((btn_pub) => {
  btn_pub.addEventListener("click", (e) => {
    open_modal(e);
    let id = e.target.getAttribute("data-id_flower");
    sessionStorage.setItem("id_flower", id);
  });
});

const btn_valider = document.querySelector(".cont_quiz .btn_valider");

btn_valider.addEventListener("click", (e) => {
  let id = sessionStorage.getItem("id_flower");

  if (document.querySelector(".cont_quiz #prix_fixe").checked) {
    btn_valider.setAttribute("href", "../publication/html/prix_fixe.php?id_flower="+id+"");
  } else if (document.querySelector(".cont_quiz #encheres".checked)) {
    btn_valider.setAttribute("href", "../publication/html/encheres.php?id_flower="+id+"");
    open_modal(e);
  } else {
    alert("selectionner ou moins une categorie");
  }
});
