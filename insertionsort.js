

function insertionsort(arr){
    for(let i=1;i<arr.length;i++){
        let numbertoinsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>numbertoinsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numbertoinsert

    }
    return arr;
}


const arr = [8, 20, -2, 4, -6];
console.log(insertionsort(arr)); // Output: [-6, -2, 4, 8, 20]

