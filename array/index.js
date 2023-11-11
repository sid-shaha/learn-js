let arr = [1000,100,200,300];

print(arr);
sortDescendingOrder(arr);
print(arr);

// passing comparator function to sort in ascending order
function sortNumericArray(arr){
    arr.sort((a,b)=>a-b);
}

// passing comparator function to sort in descending order
function sortDescendingOrder(arr){
    arr.sort((a,b)=>b-a);
}

function print(arr){
    for(let i=0;i<arr.length;i++){
        console.log(`value: ${arr[i]} type:${typeof arr[i]}`);
    }
}
