var output = document.getElementById("outpout-screen");
function func(num){
    output.value += num; 
}
function operator(operation){
    var regex = /\+|\-|\*|\/|\%/;
    if(!regex.test(output.value) && !(output.value[output.value.length-1]=="+" || output.value[output.value.length-1]=="-" || output.value[output.value.length-1]=="*"  || output.value[output.value.length-1]=="/" || output.value[output.value.length-1]=="%" || output.value[output.value.length-1]==".")){
        output.value += operation;
    }else{
        equal();
        output.value += operation;
    }
}
function comma(){
    if(output.value[output.value.length-1]=="." || output.value[output.value.length-1]=="+" || output.value[output.value.length-1]=="-" || output.value[output.value.length-1]=="*"  || output.value[output.value.length-1]=="/" || output.value[output.value.length-1]=="%"){
        document.getElementById("comma").disabled=true;
    }else{
        output.value += ".";
    }
}
 function Clear(){ output.value = "";}
function equal(){
    output.value=eval(output.value);
}