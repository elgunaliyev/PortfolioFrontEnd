function createAnimal(_name, _type) {
    this.name = _name;
    this.type = _type;
}

function behaviour(_behaviour) {
    this.behaviour = _behaviour;
    this.showBehaviour = function () {
        console.log(`${_behaviour}`)
        return this._behaviour;
    }
}
let monkey = new createAnimal("monkey", "mammals")
let bee = new createAnimal("bee", "insect")
bee.__proto__ = new behaviour("fly")
monkey.__proto__ = new behaviour("jump")



function cssEditor(_selector, _selChild, _attribute, _attvalue) {

    let obj = document.querySelectorAll(_selector)
    obj[_selChild].setAttribute(_attribute, _attvalue)

}
// let cardBody=cssEditor(".card-body",0,"style","color:red; background:black")

const obj = {

    method01: function () {
        console.log("Method01")
        return this

    },
    method02: function () {
        console.log("Method02")
        return this
    }
}
let row, col,clone;



function copy() {
    col = event.target.parentElement.parentElement.parentElement;
    row = col.parentElement;
    clone= col.cloneNode(true);

    row.prepend(clone)

}

