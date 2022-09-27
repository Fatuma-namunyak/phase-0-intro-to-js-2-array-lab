// Write your solution here!
var cats =['Milo', 'Otis', 'Garfield', ]
function destructivelyAppendCat(name) {
    cats . push(name)
}
function destructivelyPrependCat(name) {
    cats . unshift(name)
}
function destructivelyRemoveLastCat() {
    cats . pop()
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats . shift()
    return cats
}
function appendCat(name) {
    var name_1 = [...cats,name] 
    return name_1;
}
function prependCat(name) {
    var name_2 = [name, ...cats]
    return name_2;
}
function removeLastCat() {
    var MiniArrayofpets = cats.slice(0,cats.length-1);
    return MiniArrayofpets;

}
function removeFirstCat() {
    var NewArrayofCats = cats.slice(1)
    return NewArrayofCats

}
