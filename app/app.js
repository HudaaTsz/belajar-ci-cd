
function calculate(operator){

    const a=Number(document.getElementById("num1").value);
    const b=Number(document.getElementById("num2").value);

    let result;

    switch(operator){

        case "+":
            result=add(a,b);
            break;

        case "-":
            result=subtract(a,b);
            break;

        case "*":
            result=multiply(a,b);
            break;

        case "/":
            result=divide(a,b);
            break;
    }

    document.getElementById("result").innerHTML="Result : "+result;
}