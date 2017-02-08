// Flatten a nested array. You must account for varying levels of nesting.

var steamrollArray = function(arr) {
    var result = [];

    arr.forEach(function(element) {
        result = result.concat(Array.isArray(element) ? steamrollArray(element) : element);
    });

    return result;
}

console.log(

steamrollArray([[["a"]], [["b"]]]),
// should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]),
// should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]),
// should return [1, 3, 4].

steamrollArray([1, {1:2}, [3, [[4]]]])
// should return [1, {1:2}, 3, 4].

)
