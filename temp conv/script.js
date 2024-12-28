let farToCel = document.getElementById("f2c");
let celToFar = document.getElementById("c2f");
let temp = document.getElementById("temp");

function convert(){
    if(farToCel.checked){
        result=((temp.value-32)*5)/9;
        document.querySelector(".result").innerHTML = result.toFixed(2);
    }
    else if(celToFar.checked){
        result=(temp.value*9)/5+32;
        document.querySelector(".result").innerHTML = result.toFixed(2);
    }
    else{
        document.querySelector(".result").innerHTML = "Please select a conversion";
    }
}
