import { open_modal } from "../dashboard/js/modal";
import { file,select_file } from "../dashboard/js/modal_add_flower";

const open_add_flower_modal = document.querySelectorAll(".open_modal_add_flower");
open_add_flower_modal.forEach(link_pub=>{
    link_pub.addEventListener("click", open_modal);
})

const open_choice_modal = document.querySelector(".open_modal_choice");
open_choice_modal.addEventListener("click",open_modal);

file.addEventListener("input",select_file);


