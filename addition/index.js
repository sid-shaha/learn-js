function myfunc(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = a+b;
    console.log("c is", c);
    document.getElementById("p1").innerHTML = c
}

// second method
// document.getElementById("Add").onclick = function(){
//     let a = Number(document.getElementById("a").value);
//     let b = Number(document.getElementById("b").value);
//     let c = a+b;
//     document.getElementById("p1").innerHTML = c
// }

