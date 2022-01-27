document.addEventListener("DOMContentLoaded", function (event) {
    let result = document.getElementById("result")
    let clear = document.querySelector('#clear');
    clear.addEventListener('click', function() {
        result.value="";
    })
    let backspace = document.querySelector("#backspace");
    backspace.addEventListener('click', function(){
        result.value=result.value.substring(0,result.value.length-1);
    })
    let dot = document.querySelector("#dot");
    dot.addEventListener('click',function(){
        result.value+=".";
    })
    let multiply = document.querySelector("#multiply");
    multiply.addEventListener('click',function(){
        result.value+='*';
    })
    let seven = document.querySelector("#seven");
    seven.addEventListener('click',function(){
        result.value+='7';
    })
    let eight = document.querySelector("#eight");
    eight.addEventListener('click',function(){
        result.value+='8';
    })
    let nine = document.querySelector("#nine");
    nine.addEventListener('click',function(){
        result.value+='9';
    })
    let four = document.querySelector("#four");
    four.addEventListener('click',function(){
        result.value+='4';
    })
    let five = document.querySelector("#five");
    five.addEventListener('click',function(){
        result.value+='5';
    })
    let six = document.querySelector("#six");
    six.addEventListener('click',function(){
        result.value+='6';
    })
    let one = document.querySelector("#one");
    one.addEventListener('click',function(){
        result.value+='1';
    })
    let two = document.querySelector("#two");
    two.addEventListener('click',function(){
        result.value+='2';
    })
    let three = document.querySelector("#three");
    three.addEventListener('click',function(){
        result.value+='3';
    })
    let zero = document.querySelector("#zero");
    zero.addEventListener('click',function(){
        result.value+='0';
    })
    let doubleZero = document.querySelector("#doubleZero");
    doubleZero.addEventListener('click',function(){
        result.value+='00';
    })
    let divide = document.querySelector("#divide");
    divide.addEventListener('click',function(){
        result.value+='/';
        console.log('Hello')
    })
    let add = document.querySelector("#add");
    add.addEventListener('click',function(){
        result.value+='+';
    })
    let minus = document.querySelector("#subtract");
    minus.addEventListener('click',function(){
        result.value+='-';
    })
    let equal = document.querySelector("#equal");
    equal.addEventListener('click',function(){
        var x = result.value
        if(/[a-zA-Z$&,:;=?@#|'<>^()%!]/.test(x)==true){
            window.alert("Only numbers are allowed")
        }
        else{
            result.value=eval(result.value)
        }
    })
})

