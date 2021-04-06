

function darkLight() {
    let back1 = document.querySelector(".headerr");
    let back2 = document.querySelector(".allContent");
    let back3 = document.querySelector(".darkLight");
    let back4 = document.querySelector(".content1");
    let back5 = document.querySelector("#logos");


    back1.classList.toggle("light");
    back2.classList.toggle("light");
    back3.classList.toggle("light");
    back4.classList.toggle("light");
    back5.classList.toggle("light");
}

function popup() {
    let btn = document.querySelector(".popupwindow1");
    let overlay = document.querySelector(".overlay");
    btn.classList.toggle("active");
    overlay.classList.toggle("active");
}

function calcBmi() {
    let weight = document.getElementById("wtt").value;
    weight = parseFloat(weight);

    let height = document.getElementById("height").value;
    height = parseFloat(height);
    let inches = document.getElementById("inches").value;
    inches = parseFloat(inches);
    height = height*12 + inches;
    height = height*0.0254;
    height = height*height;
    
    let bmi = weight/(height);
    document.getElementById("bminum").innerText = bmi.toFixed(1);
    let status = document.getElementById("intext");
    console.log(bmi);
    let persent = 50 + ((bmi-21.7)/27.4)*100;
    console.log(persent);
    document.getElementById("arrow").style.left = `${persent}%`;
    if(bmi == 21.7){
        status.innerText = "Ideal !"; 
    }
    else if(bmi>=18.5 && bmi<=24.9){
        status.innerText = "Normal"; 
    }
    else if(bmi>=13 && bmi<18.5){
        status.innerText = "Underweight"; 
    }
    else if(bmi>=25 && bmi<=30){
        status.innerText = "Overweight"; 
    }
    else if(bmi>=8 && bmi <13){
        status.innerText = "Danger";
    }
    else if(bmi>30 && bmi <=35.4){
        status.innerText = "Danger";
    }
    else{
        status.innerText = "Impossible hai";
    }
}
