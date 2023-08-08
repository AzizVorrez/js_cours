function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
}

Animal.prototype.presentation = function(){
    console.log("Je fais juste un test")
}
 Oiseau.prototype = Object.create(Animal.prototype)

function Oiseau(nombreDePattes, poids, longueurDesAiles) {
    Animal.call(this, nombreDePattes, poids);
    this.longueurDesAiles = longueurDesAiles;
}

function Mamifere(typesDePoils) {
    this.typesDePoils = typesDePoils;
}

var perroquet = new Oiseau(2, "1kg", "grandes");

console.log(perroquet)

perroquet.presentation()