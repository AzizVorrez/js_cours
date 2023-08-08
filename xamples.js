let restart = false

do {

	do {
		var choix = Number(prompt("Veuillez sélectionner un nombre pour votre opération : \n\n 1 : Addition \n 2 : Multiplication \n 3 : Soustraction \n 4 : Division"))
	} while(choix != 1 && choix != 2 && choix != 3 && choix != 4)

	//demander deux nombre à user

	do {
		var premierNombre = Number(prompt('Veuillez donnez le premier nombre ? '));
		var deuxiemeNombre = Number(prompt('Veuillez donnez le second nombre ? '));
	} while(isNaN(premierNombre) || isNaN(deuxiemeNombre))


	try {
	switch(choix) {
	case 1 :
		var resultat = addition(premierNombre, deuxiemeNombre)
		break;

	case 2 :
		var resultat = multiplication(premierNombre, deuxiemeNombre)
		break;

	case 3 :
		var resultat = soustraction(premierNombre, deuxiemeNombre)
		break;

	case 4 :
		var resultat = division(premierNombre, deuxiemeNombre)
		break;

	default :
		throw new Error('Il y a eu une erreur');
	}

	alert('Voici le résultat' + ' : ' + resultat)
	}

	catch (error) {
		alert(error)
	}


restart = confirm("Voulez-vous reprendre le calcul ?")
} while(restart)



function addition(premierNombre, deuxiemeNombre) {
	return premierNombre + deuxiemeNombre
}

function multiplication(premierNombre, deuxiemeNombre) {
	return premierNombre * deuxiemeNombre
}

function soustraction(premierNombre, deuxiemeNombre) {
	return premierNombre - deuxiemeNombre
}

function division(premierNombre, deuxiemeNombre) {
	if (deuxiemeNombre == 0 ) {
		throw new Error("Impossible de diviser par 0")
	}
	else {
		return premierNombre / deuxiemeNombre
	}
}