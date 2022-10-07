
let file = document.getElementById("upload");
let button = document.getElementsByTagName("button");
let progress = document.querySelector('progress');
let prog_indic = document.querySelector('.progress_indicator');
let load = 0;
let proces = "";

file.oninput = ()=>{
    let file_name = file.files[0].name;
    let extension = file_name.split('.').pop();
    let file_size = file.files[0].size;
    if(file_size <= 1000000){
        file_size = (file_size/1000).toFixed(2)+ 'KB';
    }
    if(file_size == 1000000 || file_size <= 1000000000){
        file_size = (file_size/1000000).toFixed(2)+ 'MB';
    }
    if(file_size == 1000000000000 || file_size <= 1000000000 ){
        file_size = (file_size/1000000000).toFixed(2)+ 'GB';
    }
    document.querySelector("label").innerText = file_name;
    document.querySelector('.ex').innerText = extension;
    document.querySelector(".size").innerText = file_size;

    get_file(file_name);
}

let upload = ()=>{
    if(load >= 100){
        clearInterval(proces);
        prog_indic.innerText = '100%' + ' ' +'Upload Completed';
        button[0].classList.remove("active"); 
    }else{
        load++;
        progress.value = load;
        prog_indic.innerText = load + '%' + ' ' +'Upload';
        button[1].onclick = e =>{
            e.preventDefault();
            clearInterval(proces);
            document.querySelector('.pr').style.display = "none";
            button[1].style.visibility = "hidden";
            button[0].classList.remove("active");
        }
      }
}
function get_file(file_name){
    console.log("appel get_file");
    if(file_name){
        document.querySelector(".pr").style.display = "block";
        load = 0;
        progress.value = 0;
        prog_indic.innerText = "";
        button[0].onclick = e =>{
            e.preventDefault();
            button[0].classList.add("active");
            button[1].style.visibility = "visible";
            proces = setInterval(upload, 100);
        }
    }
}