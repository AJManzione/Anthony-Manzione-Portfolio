let arr = [1,2,3,4,5,6,7,8,9]
let el = 12

console.log(checkEl(arr, el))


function checkEl(arr, el) {
    for (i=0; i< arr.length; i++) {
        if (arr[i] === el) {
            return [i]
        }
    } return -1;
}