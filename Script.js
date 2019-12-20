//Hides logic gate images
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

//Changes logic gate selection labels to black
function resetLabels() {
    document.getElementById("r1label").style.color = "black";
    document.getElementById("r2label").style.color = "black";
    document.getElementById("r3label").style.color = "black";
    document.getElementById("r4label").style.color = "black";
    document.getElementById("r5label").style.color = "black";
    document.getElementById("r6label").style.color = "black";
}

//Shows image corresponding to gate selected
function showGateImage(gate, label){
    resetImages();
    resetLabels();
    document.getElementById(gate).style.display = "inline";
    document.getElementById(label).style.color = "#B2DBBF";
    if(gate==="NOTGate"){
        document.getElementById("inputB").style.display = "none";
        document.getElementById("inputBLabel").style.display = "none";
    }
}

//Calculates the output depending on inputs and logic gate selection
function calculate() {
    let inputA = document.getElementById('inputA').value;
    let inputB = document.getElementById('inputB').value;
    let gate = gateType();
    let output = "Output:<span class='mainText' style='color: #247BA0'>";
    let result;
    if(gate==="null"){
        alert("Please select a logic gate");
        return;
    } else if(gate==="and"){
        if(inputA==="1" && inputB==="1"){
            result = "1";
        } else{
            result = "0"
        }
    } else if(gate==="or"){
        if(inputA==="1" || inputB==="1"){
            result = "1";
        } else{
            result = "0"
        }
    } else if(gate==="not"){
        if(inputA==="0"){
            result = "1";
        } else{
            result = "0"
        }
    } else if(gate==="nand"){
        if(inputA==="1" && inputB==="1"){
            result = "0";
        } else{
            result = "1"
        }
    } else if(gate==="nor"){
        if(inputA==="1" || inputB==="1"){
            result = "0";
        } else{
            result = "1"
        }
    } else if(gate==="xor"){
        if((inputA==="1" && inputB==="0") || (inputA==="0" && inputB==="1")){
            result = "1";
        } else{
            result = "0"
        }
    }
    //Fills out truth table for inputs and output
    output += result + "</span>";
    document.getElementById("output").innerHTML = output;
    if(gate==="not"){
        document.getElementById('NOTOutputRow').innerHTML = "<td>"+inputA+"<td>"+result;
        document.getElementById('NOTOutputTable').style.display = "block";
        document.getElementById("outputTable").style.display = "none";
    }else{
        document.getElementById('outputRow').innerHTML = "<td>"+inputA+"<td>"+inputB+"<td>"+result;
        document.getElementById("outputTable").style.display = "block";
        document.getElementById('NOTOutputTable').style.display = "none";
    }
}

//Retrieves which logic gate has been selected
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