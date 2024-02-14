// function calTriangle(){
//     const baseText=document.getElementById("triangle-base").value;
//     const base=parseFloat(baseText);

//     const heightText=document.getElementById("triangle-height").value;
//     const height=parseFloat(heightText);

//     const area=1/2*base*height;
//      document.getElementById("triangle-area").innerText=area;

// }

function calTriangle(){
    const base=readFieldValue("triangle-base");
    const height=readFieldValue("triangle-height");
    const area=1/2*base*height;
    document.getElementById("triangle-area").innerText=area;
}

function calRectangle(){
    const base=readFieldValue("rectangle-base");
    const height=readFieldValue("rectangle-height"); 
    const area=base*height;
    document.getElementById("rectangle-area").innerText=area;

}

function calParallelogram(){
    const base=readFieldValue("parallelogram-base");
    const height=readFieldValue("parallelogram-height");
    const area=base*height;
    document.getElementById("parallelogram-area").innerText=area;
}

 function calRhombus(){
    const diagonal1=readFieldValue("diagonal-1");
    const diagonal2=readFieldValue("diagonal-2");
    const area=1/2*diagonal1*diagonal2;
    document.getElementById("rhombus-area").innerText=area;
 }

 function calPentagon(){
    const sideLength=readFieldValue("side-length");
    const apothem=readFieldValue("apothem");
    const area=1/2*sideLength*apothem;
    document.getElementById("pentagon-area").innerText=area;
 }





function readFieldValue(fieldValue){
    const valueText=document.getElementById(fieldValue).value;
    const field_value=parseFloat(valueText);
    return field_value;
}