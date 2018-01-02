
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  //return the number of astronauts in space right now, using the data
    return Object.values(data)[0]
    //console.log("NUMBER OF ASTROS", Object.values(data)[0])
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))


const astroNames = (data) => {
  // return an array containing the name strings of the astronauts in space
    let names = [] 
    for(var i=0; i < numberOfAstrosInSpace(peopleInSpace) ; i++)
    {
	names[i] =  Object.values(data)[1][i]["name"]
    }

    return names.toString() 

}
console.log("names of people in space: ", astroNames(peopleInSpace))


const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
    
    let craft
    
    for(var i=0; i < numberOfAstrosInSpace(peopleInSpace) ; i++)
    {
	if ( i == 0 )
	    craft =  Object.values(data)[1][i]["craft"]

	if( Object.values(data)[1][i]["craft"] == craft ) 
	    ans = true 
	else 
	    return false 
    }

    return true

}
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
  // return a boolean that specifies whether the response from the Open Notify API was successful
    return Object.values(data)[2] == "success"

}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
    const wheresJoe = (data) => {
	// return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."             
   let names = []
   for(var i=0; i < numberOfAstrosInSpace(peopleInSpace) ; i++)
       {
	   if("Joe Acaba"  ==  Object.values(data)[1][i]["name"])
           return "in space!"
	       }

    return "dunno."

}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.




