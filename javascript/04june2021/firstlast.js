
/**
 * To retrieve first and last element of the array
 */

let arr = ["King", "John", "Ranu", "Rahul", "Nilam"]
console.log(arr)
//console.log(arr[arr.length - 1], arr.pop())

function firstLast(ar) {
    returnAr = []
    returnAr.push(ar.shift(), ar.pop())
    return returnAr
}

res=firstLast(arr)
console.log(res.length, res)
///////////////////////////////////
//anonyomous function
let arr_firstLast = function(ar) {
    let returnAr = []
    returnAr.push(ar.shift(), ar.pop())
    return returnAr
}
res=arr_firstLast(arr)
console.log(res.length, res)
//arrow function
let arr_firstLast = (ar) => {
    let returnAr = []
    returnAr.push(ar.shift(), ar.pop())
    return returnAr
}
res=arr_firstLast(arr)
console.log(res.length, res)

// Sorting array

    let sort_array = function (ar) {
        return ar.sort()
    }
    console.log(sort_array(arr))

/**
 * IIFEs - Immediately Invoked Function Expression
 * single instance of an object
 * saves you from polluting the local/global namespace.
 * to declare IIFEs we use "grouping operator" ie ()
 */
console.log(( function (arr) {
    return arr.sort()
})(arr))
