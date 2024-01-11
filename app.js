
function calculateBMI(){
    //Access user input
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    
    //Calculate BMI
    let heightInM = (height/100);
    let bmi = Math.round(weight/(Math.pow(heightInM,2))*10)/10;

    const nameDisplay = document.getElementById("name-display");
    //Display BMI and BMI Class
    let para = document.getElementById("result");
    let bmiClass =document.getElementById("bmi-category");
    
    
    if(name===""){
        return para.innerText = "Please enter your name!"; 
    }else if(age===""){
        return para.innerText = "Please enter your age in years!"; 
    } else if(height===""){
        return para.innerText = "Please enter height in cm!";
    }else if(weight===""){
        return para.innerText = "Please enter weight in Kg";
    }else{
        if(bmi<=16){
            bmiClass.innerText="You are Severely Thinness.";
        } else if(bmi<=17){
            bmiClass.innerText="You are Moderately Thinness.";
        }else if(bmi<=18.5){
            bmiClass.innerText="You are Mildly Thinness.";
        }else if(bmi<=25){
            bmiClass.innerText="You are Normal.";
        }else if(bmi<=30){
            bmiClass.innerText="You are Overweight.";
        }else if(bmi<=35){
            bmiClass.innerText="You are  Obese Class I.";
        }else if(bmi<=40){
            bmiClass.innerText="You are Obese Class II.";
        }else if(bmi>40){
            bmiClass.innerText="You are Obese Class III.";
        }else{
            bmiClass.innerText="Please calculate your BMI."
        };
        nameDisplay.innerText = "Welcome, " + name +" ."
        return para.innerText="Your BMI is : " + bmi + " Kg/m2";
    }
}


