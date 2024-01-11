
function calculateBMI(){
    //Access user input
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    //Calculate BMI
    let heightInM = (height/100);
    let bmi = weight/(Math.pow(heightInM,2));

    //Display BMI
    let para = document.getElementById("result");

    para.innerText=Math.round(bmi*10)/10;

    if(height===""){
        para.innerText = "Please enter your height in cm"; 
    } else if(weight===""){
        para.innerText = "Please enter weight in Kg";
    }else{
        return para.innerText="Your BMI is : " + Math.round(bmi*10)/10;
    }

}