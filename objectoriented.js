    // PARTIE 1,3,4(OOP verison)

class Trip {

    constructor(name, start, duration, price) {
        this.name = name
        this.start = start
        this.duration = duration
        this.price = price
        this.end = start + duration
    }

    isCompatible(trip) {
		if(trip.start > this.end || this.start > trip.end){
			return true
		} return false
	}   
}

function parseTrip(trip){
    let arrTrip = trip.split(" ")
    for(let i=0; i<arrTrip.length; i++){
        trip = new Trip(arrTrip[0],parseInt(arrTrip[1]),parseInt(arrTrip[2]),parseInt(arrTrip[3]))
    }
    return trip
}

console.log(parseTrip("Perdita 8 10 8"))

    // PARTIE 2 

//the ugly way to do it :
// function parseTrips(trips) {
//     let arrTrips = []
//     for(let i=0; i<trips.length; i++){
//         arrTrips.push(parseTrip(trips[i])) 
//     }
//     return arrTrips
// }

//the right way to do it : 
const parseTrips = trips => trips.map(trip => parseTrip(trip))

let tripsToParse = [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7"
]

let arrTrips = parseTrips(tripsToParse)
console.log(arrTrips)

    // PARTIE 4

// console.log(arrTrips[0].isCompatible(arrTrips[3]))
// console.log(arrTrips[3].isCompatible(arrTrips[0]))

    // PARTIE 5

//findCompatibilities(trips)

function findCompatibilities(trips) {

    let compatibleTrips = []
    for(let i=0; i<trips.length; i++){
        for(let j=i+1; j<trips.length; j++){
            if(trips[i].isCompatible(trips[j])){
                compatibleTrips.push([trips[i],trips[j]])
            }
        }
        return compatibleTrips
    }
}
    
console.log(findCompatibilities(arrTrips))



