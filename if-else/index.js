var vehicles;
document.getElementById("mybutton").onclick = function(){
    let vehicles="";
    let car = document.getElementById("car").checked;
    let bike = document.getElementById("bike").checked;
    let bicycle = document.getElementById("bicycle").checked;
    if(car){
        vehicles+="Car "; 
    }
    if(bike){
        vehicles+="Bike ";
    }
    if(bicycle){
        vehicles+="Bicycle ";
    }
    vehicles = vehicles.trim();
    if(vehicles == ""){
        console.log("No vehicles found");
    }else{
        console.log("Vehicles you own are: ", vehicles);
    }
}