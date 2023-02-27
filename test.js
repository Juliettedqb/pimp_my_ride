	// PARTIE 1 

function parseTrip(trip) {
	// split "coupe" la chaîne de caractères à chaque espace
	  const tripSplit = trip.split(" ");
	  // je transforme mon tableau en objet
	  const tripObject = {name : tripSplit[0], start : parseInt(tripSplit[1]), duration : parseInt(tripSplit[2]), price : parseInt(tripSplit[3])};
	  return tripObject;
  }
  
  const clientOneTrip = parseTrip("Perdita 8 10 8")
  console.log(clientOneTrip)
  
	// PARTIE 2 
  
  let tripsToParse = [
	  "Roger 0 5 10",
	  "Pongo 3 7 14",
	  "Perdita 8 10 8",
	  "Anita 16 3 7"
  ]
  
  function parseTrips(trips) {
	let arrayTrips = [];
	  // je parcours mon tableau tripsToParse
	for (let i = 0; i < trips.length; i++) {
		// j'applique la fonction créée dans l'étape 1 à mon tableau tripsToParse et je pousse les résultats dans un nouveau tableau
		arrayTrips.push(parseTrip(trips[i]));
	  }
	  return arrayTrips
  }
  
  let parsedTrips = parseTrips(tripsToParse)
  console.log(parsedTrips)
  
  
	// PARTIE 3
  
  function getTripsPrice(arrayTrips){
	let sum = 0
	// Je parcours un tableau pour recuperer le prix et additionner ce prix a la variable sum
	  for (let i = 0; i < arrayTrips.length; i++) {
		  sum += arrayTrips[i].price;	
	  }
	  return sum
  }
  
  let sum = getTripsPrice(parsedTrips)
  console.log(sum)
  
	  // PARTIE 4
  
  function checkCompatibility(tripA,tripB){
	  if ((tripB.start > (tripA.start + tripA.duration)) || 
	(tripA.start > (tripB.start + tripB.duration))) {
		return true
	}
	  else {
		return false
	}
  }
  
  let trip1 = {'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10}
  let trip2 = {'client': 'Pongo', 'start': 6, 'duration': 7, 'price': 14}
  
  
  console.log(checkCompatibility(trip1,trip2));
  
	  // PARTIE 5
  
  function findCompatibilities(trips) {
	  let arr = [];
	  for(let i=0; i<trips.length; i++){
	  // j'ajoute tous les voyages seuls en me servant de ma boucle for
		arr.push([trips[i]])
	  // j'imbrique ma boucle for dans une autre boucle for pour comparer les voyages entre eux
		  for(let j=i+1; j<trips.length; j++){
		  // je reutilise ma fonction de compatibilité entre 2 objets
			  if(checkCompatibility(trips[i],trips[j]) == true){
			// je rajoute les voyages compatibles dans mon tableau arr
				  arr.push([trips[i],trips[j]]);
			  }
		  }
	  }
	  return arr
  }
  
  console.log("final")
  let compatibleTrips = findCompatibilities(parsedTrips)
  console.log(compatibleTrips)
  
  // ETAPE 6
  
  function findBestPrice(trips) {
	let bestTrip = trips[0]
	// je parcours le tableau de voyages
	  for(let i=0; i<trips.length; i++) {
		// a chaque tour de boucle je compare le prix du voyage au best trip initialisé avec la premiere valeur
	  if (getTripsPrice(trips[i]) > getTripsPrice(bestTrip)) {
		  // je remplace par la plus grande valeur
		  bestTrip = trips[i]
	  }
	}
	return bestTrip
  }
  
  console.log("best trip")
  console.log(findBestPrice(compatibleTrips))



	



