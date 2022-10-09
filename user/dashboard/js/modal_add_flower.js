// for the image input
export let file = document.getElementById("upload");
let progress = document.querySelector('progress');
let prog_indic = document.querySelector('.progress_indicator');
let load = 0;
let proces = "";

export function select_file (){
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
    document.querySelector(".image_label").innerText = file_name;
    document.querySelector('.ex').innerText = extension;
    document.querySelector(".size").innerText = file_size;

    get_file(file_name);
    upload();
}

function upload (){
    if(load >= 100){
        clearInterval(proces);
        prog_indic.innerText = '100%' + ' ' +'Upload Completed';
    }else{
        load++;
        progress.value = load;
        prog_indic.innerText = load + '%' + ' ' +'Upload';
        
      }
}
function get_file(file_name){
    console.log("appel get_file");
    if(file_name){
        document.querySelector(".pr").style.display = "block";
        load = 0;
        progress.value = 0;
        prog_indic.innerText = "";
            proces = setInterval(upload, 100);
    }
}
