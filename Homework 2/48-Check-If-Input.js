// Write a function to check whether an `input` is an array or not. Provide 2 different solutions
function isArray(input) {
    if (Array.isArray(input)) {
        return true;
    } else {
        return false;
    }
}
console.log(isArray([1, 2, 3, 4, 5]));
console.log(isArray());