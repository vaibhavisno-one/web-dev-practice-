let farToCel = document.getElementById("f2c");
let celToFar = document.getElementById("c2f");
let temp = document.getElementById("temp");

function convert(){
    if(farToCel.checked){
        temp.value = (temp.value - 32) * (5/9);
    }
}
