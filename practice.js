// function bubblesort(arr){
//     let swapped
//     do{
//          swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
                
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true

//             }
//         }
        
//     }while(swapped)
//         return arr;
// }



// const arr=[8,20,-2,4,-6]
// console.log(bubblesort(arr));


// function bubblesort(arr){
//     let swapped;
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
                
//             }
//         }
//     }while(swapped)
//         return arr;
// }


// const arr=[9,2,-1,8,6]
// console.log(bubblesort(arr));



// function bubblesort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
//         return arr;
// }

// const arr=[3,-9,1,65,12]
// console.log(bubblesort(arr));



// function binarysort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
//         return arr;
// }

// const arr=[11,-4,6,9,2,-78]
// console.log(binarysort(arr));


// function insertionsort(arr){
//     for(let i=0;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr;
// }

// const arr = [8, 20, -2, 4, -8];
// console.log(insertionsort(arr));



// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr;
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(insertionsort(arr)); // Output: [-6, -2, 4, 8, 20]



// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr;
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(insertionsort(arr)); // Output: [-6, -2, 4, 8, 20]


// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr;
// }

// const arr=[8, 20, -2, 4, -6];
// console.log(insertionsort(arr));


// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr
// }

// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[j]
//         let j=i-1
//         while(j>=0 && arr[i+1]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert

//     }
//     return arr;
// }


// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[j]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr
// }


// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[j]
//         let j=i-1
//         while(j>=0 && arr[j+1]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr
// }

// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(insertionsort(arr)); // Output: [-6, -2, 4, 8, 20]

// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr
// }


// const arr=[5,3,2,-8,-1]
// console.log(insertionsort(arr));



// function selectionSort(array){
//     for(let i=0; i<array.length-1; i++){
//         let minIndex = i
//         for(let j=i+1; j<array.length; j++){
//             if(array[j]<array[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex!==i){
//             [array[i],array[minIndex]] = [array[minIndex],array[i]]
//         }
//     }
//     return array
// }


// const array = [4,2,8,1,9,7,3]
// console.log(selectionSort(array));


// function selectionsort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j;
//             }
//         }
    
//     if(minIndex !==i){
//         [arr[i],arr[minIndex]]= [arr[minIndex],arr[i]];
//     }
// }
// return arr
// }

// const array = [4,2,8,1,9,7,3]
// console.log(selectionsort(array));




// function selectionsort(arr){
//     for(let i=0;i<arr.length;i++){
//         let minIndex=i
//         for(let j=i+1;j<arr.length;j++){
//        if(arr[j]<arr[minIndex]){
//         minIndex=j;
//        }
//         }
//         if(minIndex !==i){
//             [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
//         }
//     }
//     return arr
// }

// const array = [4,2,8,1,9,7,3]
// console.log(selectionsort(array));


// function bubblesort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true;
//         }
//     }
//     }while(swapped)
//         return arr
// }


// const arr=[1,8,4,2,3]
// console.log(bubblesort(arr));


// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(insertionsort(arr)); // Output: [-6, -2, 4, 8, 20]


// function insertionsort(arr){
//     for(let i=0;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         j=i-1
//         while(j>=0 && arr[i]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
//     return arr
// }

// const arr=[6,4,32,9,2,4]
// console.log(insertionsort(arr));


function  selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i
        for(let j=i+1  ;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }

        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return  arr
}

const array = [4,2,8,1,9,7,3]
console.log(selectionSort(array));







