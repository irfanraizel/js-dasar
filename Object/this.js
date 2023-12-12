// this memiliki context yang berbeda

// cara 1 - function declaration
// kalau this di declaration di scope object global this === window
function hi() {
    console.log("Haiii")
}

hi();
console.log(this)

// cara 2 - Object Literial
// this dalam object literal mengembalikan object yang bersangkutan
var obj = {}
obj.hi = function() {
    console.log(this)
    console.log('Halo')
}

obj.hi()

// cara 3 - Object menggunakan Constructor
// this mengembalikkan object yang baru dibuat (new)
function Halo() {
    console.log(this)
    console.log('this')
}

new Halo();
new Halo();