function myfunc(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = a+b;
    console.log("c is", c);
    document.getElementById("p1").innerHTML = c
}

function hypotenuse(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let hypotenuse = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    console.log("hypotenuse is", hypotenuse);
    document.getElementById("p1").innerHTML = hypotenuse
}

function keypressed(event){
    if (event.keyCode == 13) {
        hypotenuse();
        return true;
     } else {
        return false;
     }
}
// second method
// document.getElementById("Add").onclick = function(){
//     let a = Number(document.getElementById("a").value);
//     let b = Number(document.getElementById("b").value);
//     let c = a+b;
//     document.getElementById("p1").innerHTML = c
// }

