// Reverse
// numerical array
// reverse the order of values in-place
// reversed array should have the same length
// with existing elements moved to other indices
// so that order of elements is reversed
// Working ‘in-place’ means that you cannot use a second array
// move values within the array that you are given
// do not use built-in array functions such as splice()
function reverse(arr){
    var b = "";
    for (var i = 0; i < arr.length/2; i++){
        b = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = b;
    
    // var left = null;
    // var right = null;
    // var length = arr.length;
    // for (left = 0; left < length / 2; left += 1)
    // {
    //     right = length - 1 - left;
    //     var temporary = arr[left];
    //     array[left] = arr[right];
    //     array[right] = temporary;
    }
    return arr;
}
//console.log(reverse([1,2,3,4,5]))
// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset.
// Shift arr’s values to the right by that amount
// ‘Wrap-around’ any values that shift off array’s end to the other side
// so that no data is lost
// Operate in-place: given ([1,2,3],1)
// change the array to [3,1,2]
// Don’t use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. 
// With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
function rotateArr (arr, shiftBy){
    for(var i = 0; i < arr.length; i++){
        temparr = arr[0];
        for (var j = 0; j <= arr.length - 1; j++){
            arr[j] = arr[j + 1];
            console.log(arr[j])
        }
        arr[arr.length - 1] = temparr;
    }
    return arr;
}
//console.log(rotateArr([1,2,3,4,5],1));
// Concat
// Replicate JavaScript’s concat()
// Create a standalone function that accepts two arrays
// Return a new array containing the first array’s elements
// followed by the second array’s elements
// Do not alter the original arrays
// arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2]
function arrConcat(arr1, arr2){
    var tempArr = [];
    for (var i = 0; i < arr1.length; i++){
        tempArr.push(arr1[i]);
    }
    for (i = 0; i < arr2.length; i++){
        tempArr.push(arr2[i]);
    }
    return tempArr;
}
//console.log(arrConcat([10,20,30],[40,50,60]));
// Skyline Heights
// given an array with heights of consecutive buildings
// starting closest to you and extending away
// Array [-1,7,3] would represent three buildings
// first: out of view below street level 
// behind it is second at 7 stories high
// third: is 3 stories high (hidden behind the 7-story)
// You are situated at street level
// Return array containing heights of buildings you can see
// in order
// Given [-1,1,1,7,3] 
// return [1,7]
// Given [0,4] return [4]
// do not use built-in array functions such as unshift()
function buildHeight(arr){
    var b = 0;
    var tempArr = [];
    for (var i = 0; i<arr.length; i++){
        if (arr[i] > b){
            tempArr.push(arr[i]);
            b = arr[i];
        }
    }
    return tempArr;
}
console.log(buildHeight[-1,1,1,7,3]);