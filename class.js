class Animal {
    constructor(nombreDePattes, poids) {
        this.nombreDePattes = nombreDePattes;
        this.poids = poids;
    }

    presentation(){
        console.log('Ceci est un test : ' + this.nombreDePattes);
    }
}

class Oiseau extends Animal {
    constructor(nombreDePattes, poids, longueurDesAiles){
        super(nombreDePattes, poids);
        this.longueurDesAiles = longueurDesAiles;
    }

    voler() {
        console.log("L'oiseau vole !")
    }
}

var perroquet = new Oiseau(2, '1kg', 'grands')

console.log(perroquet);