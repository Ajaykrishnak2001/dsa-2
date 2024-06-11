function mergeSort(array){
    // Define the mergeSort function that takes an array as an argument.
    if(array.length < 2){
        return array;
    }
    // If the array has fewer than 2 elements, return the array as it's already sorted.
    
    let middleIndex = Math.floor(array.length / 2);
    // Calculate the middle index of the array.
    
    let left = array.slice(0, middleIndex), right = array.slice(middleIndex);
    // Split the array into two halves: left (from the start to middleIndex) and right (from middleIndex to the end).
    
    return merge(mergeSort(left), mergeSort(right));
    // Recursively call mergeSort on both halves, and then merge the sorted halves using the merge function.
}


function merge(left, right){
    // Define the merge function that takes two sorted arrays (left and right) as arguments.
    
    let sortedArr = [];
    // Initialize an empty array to hold the merged sorted elements.
    
    while(left.length && right.length){
        // While both left and right arrays have elements:
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
            // If the first element of left is smaller, remove it from left and add it to sortedArr.
        } else {
            sortedArr.push(right.shift());
            // Otherwise, remove the first element from right and add it to sortedArr.
        }
    }
    
    return [...sortedArr, ...left, ...right];
    // Concatenate any remaining elements from left and right to sortedArr and return the result.
    // At this point, either left or right will be empty, so this just adds any remaining elements from the non-empty array.
}


const array = [1, 3, 9, 4, 2, 7, 5, 6, 8];
// Define an example array to be sorted.

console.log(mergeSort(array));
// Call mergeSort on the example array and log the sorted result to the console.




