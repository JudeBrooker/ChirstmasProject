function resetImages() {
    document.getElementById("ANDGate").style.display = "none";
    document.getElementById("ORGate").style.display = "none";
    document.getElementById("NOTGate").style.display = "none";
    document.getElementById("NANDGate").style.display = "none";
    document.getElementById("NORGate").style.display = "none";
    document.getElementById("XORGate").style.display = "none";
    document.getElementById("inputB").style.display = "inline";
    document.getElementById("inputBLabel").style.display = "inline";
}

function resetLabels() {
    document.getElementById("r1label").style.color = "black";
    document.getElementById("r2label").style.color = "black";
    document.getElementById("r3label").style.color = "black";
    document.getElementById("r4label").style.color = "black";
    document.getElementById("r5label").style.color = "black";
    document.getElementById("r6label").style.color = "black";
}

function showGateImage(gate, label){
    resetImages();
    resetLabels();
    document.getElementById(gate).style.display = "block";
    document.getElementById(label).style.color = "red";
    if(gate==="NOTGate"){
        document.getElementById("inputB").style.display = "none";
        document.getElementById("inputBLabel").style.display = "none";
    }
}

function calculate() {
    let inputA = document.getElementById('inputA').value;
    let inputB = document.getElementById('inputB').value;
    let gate = gateType();
    let output = "Output:";
    if(gate==="null"){
        alert("Please select a logic gate");
        return;
    } else if(gate==="and"){
        if(inputA==="1" && inputB==="1"){
            output += "1";
        } else{
            output += "0"
        }
    } else if(gate==="or"){
        if(inputA==="1" || inputB==="1"){
            output += "1";
        } else{
            output += "0"
        }
    } else if(gate==="not"){
        if(inputA==="0"){
            output += "1";
        } else{
            output += "0"
        }
    } else if(gate==="nand"){
        if(inputA==="1" && inputB==="1"){
            output += "0";
        } else{
            output += "1"
        }
    } else if(gate==="nor"){
        if(inputA==="1" || inputB==="1"){
            output += "0";
        } else{
            output += "1"
        }
    } else if(gate==="xor"){
        if((inputA==="1" && inputB==="0") || (inputA==="0" && inputB==="1")){
            output += "1";
        } else{
            output += "0"
        }
    }
    document.getElementById("output").innerHTML = output;
    document.getElementById("outputTable").style.display = "block";
}

function gateType(){
    let gate = "null";
    if(document.getElementById('r1').checked){
        gate = "and";
    } else if(document.getElementById('r2').checked){
        gate = "or";
    } else if(document.getElementById('r3').checked){
        gate = "not";
    } else if(document.getElementById('r4').checked){
        gate = "nand";
    } else if(document.getElementById('r5').checked){
        gate = "nor";
    } else if(document.getElementById('r6').checked){
        gate = "xor";
    }
    return gate;
}