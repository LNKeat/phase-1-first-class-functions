function receivesAFunction(callback, currYear, birthYear) {
    return callback(currYear, birthYear);
  }
  
receivesAFunction(function (curr, birth) {
    return curr - birth
}, 2021, 1982)

function returnsANamedFunction() {
    function hello() { 
        debugger
        console.log('hi there')
    }
    return hello
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am anonymous.')
    }
}