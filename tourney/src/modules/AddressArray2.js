import React from 'react'


const winnerArrayMaker = (day, mondayArray, tuesdayArray, wednesdayArray, thursdayArray, fridayArray, saturdayArray, sundayArray) => {
if (day === "monday") {
    winnerArray.push(mondayArray)
    console.log("monday", day)
} else if (day === "tuesday") {
    winnerArray.push(tuesdayArray)
    console.log("tuesday", tuesdayArray)
} else if (day === "wednesday") {
    winnerArray.push(wednesdayArray)
    console.log('wednesday', winnerArray)
} else if (day === "thursday") {
    winnerArray.push(thursdayArray)
    console.log("thursday", winnerArray)
} else if (day === "friday") {
    winnerArray.push(fridayArray)
    console.log('friday', winnerArray)
} else if (day === "saturday") {
    winnerArray.push(saturdayArray)
    console.log("saturday", winnerArray)
} else if (day === "sunday") {
    winnerArray.push(sundayArray)
    console.log("sunday", winnerArray)
} else {
    console.log("I fucked up. :(", day)
}


console.log(winnerArray, "winnerArray")
}

export default winnerArrayMaker