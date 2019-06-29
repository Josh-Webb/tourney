import React from "react";
import './ConnectionManager';
import './TourneyManager';
import './LibraryManager';
import './UserManager';
import './DistanceMatrixManager';
import './ParseGameId'
import UserManager from "./UserManager"
import ConnectionManager from "./ConnectionManager";
import parseGameId from "./ParseGameId";
import LibraryCard from '../components/library/libraryCard'


const generator = (gameId) => {
    ConnectionManager.getAll()
        .then(connections => {
            console.log("connections", connections)
            console.log(connections[3].user_id)
            console.log(connections.length)
            let playerIdArray = [];
            let arrayLength = connections.length
            console.log(arrayLength, "arrayLength var")
            for (let i = 0; i < arrayLength; i++) {
                if (gameId === connections[i].game_id) {
                    console.log([i], connections[i].game_id,'<game_id', connections[i].user_id,'<user_id')
                    playerIdArray.push(connections[i].user_id)
                    console.log(playerIdArray, 'playerIdArray')
                } 
                 else {
                     console.log("nope")
                }
            }
            // let mondayCounter = 0;
            // let tuesdayCounter = 0;
            // let wednesdayCounter = 0;
            // let thursdayCounter = 0;
            // let fridayCounter = 0;
            // let saturdayCounter = 0;
            // let sundayCounter = 0;
            let mondayAddressesArray = [{day: "monday"}];
            let tuesdayAddressesArray = [{day: "tuesday"}];
            let wednesdayAddressesArray = [{day: "wednesday"}];
            let thursdayAddressesArray = [{day: "thursday"}];
            let fridayAddressesArray = [{day: "friday"}];
            let saturdayAddressesArray = [{day: "saturday"}];
            let sundayAddressesArray = [{day: "sunday"}];
            playerIdArray.forEach(function(element) {
                console.log(element)
                UserManager.getId(element)
                .then(grabedUser => {
                    console.log(grabedUser.checkboxes.monday)
                    if (grabedUser.checkboxes.monday === true) {
                        // mondayCounter += 1;
                        mondayAddressesArray.push(grabedUser.address);
                        // console.log("monday counter plus one.  Now equals >", mondayCounter)
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.tuesday)
                    if (grabedUser.checkboxes.tuesday === true) {
                        // tuesdayCounter += 1;
                        tuesdayAddressesArray.push(grabedUser.address)
                        // console.log("tuesday counter plus one.  Now equals >", tuesdayCounter)
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.wednesday)
                    if (grabedUser.checkboxes.wednesday === true) {
                        // wednesdayCounter += 1;
                        wednesdayAddressesArray.push(grabedUser.address)
                        // console.log("wednesday counter plus one.  Now equals >", wednesdayCounter)
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.thursday)
                    if (grabedUser.checkboxes.thursday === true) {
                        // thursdayCounter += 1;
                        thursdayAddressesArray.push(grabedUser.address)
                        // console.log("thursday counter plus one.  Now equals >", thursdayCounter)
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.friday)
                    if (grabedUser.checkboxes.friday === true) {
                        // fridayCounter += 1;
                        fridayAddressesArray.push(grabedUser.address)
                        // console.log("friday counter plus one.  Now equals >", fridayCounter)
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.saturday)
                    if (grabedUser.checkboxes.saturday === true) {
                        // saturdayCounter += 1;
                        saturdayAddressesArray.push(grabedUser.address)
                        // console.log("saturday counter plus one.  Now equals >", saturdayCounter)
                    } else {
                        console.log("false")
                    };
                    console.log(grabedUser.checkboxes.sunday)
                    if (grabedUser.checkboxes.sunday === true) {
                        // sundayCounter += 1;
                        sundayAddressesArray.push(grabedUser.address)
                        // console.log("sunday counter plus one.  Now equals >", sundayCounter)
                    } else {
                        console.log("false")
                    };
                    // console.log(mondayCounter, tuesdayCounter, wednesdayCounter, thursdayCounter, fridayCounter, saturdayCounter, sundayCounter);
                    // let dayCounter = [mondayCounter, tuesdayCounter, wednesdayCounter, thursdayCounter, fridayCounter, saturdayCounter, sundayCounter]
                    // console.log(dayCounter, "daycounter array")
                    console.log(mondayAddressesArray, "addresses array")
                    console.log(tuesdayAddressesArray, "tuesday addresses")
                    console.log(wednesdayAddressesArray, "wednesday addresses")
                    console.log(thursdayAddressesArray, "thursday addresses")
                    console.log(fridayAddressesArray, "friday addresses array")
                    console.log(saturdayAddressesArray, "saturday addresses array")
                    console.log(sundayAddressesArray, "sunday addresses array")
                    // let allCountersArray = [mondayCounter, tuesdayCounter, wednesdayCounter, thursdayCounter, fridayCounter, saturdayCounter, sundayCounter]
                    let allAddressesArray = [mondayAddressesArray, tuesdayAddressesArray, wednesdayAddressesArray, thursdayAddressesArray, fridayAddressesArray,saturdayAddressesArray, sundayAddressesArray]
                    // let sortedCounterArray = (allCountersArray.sort(function(a, b){return b.length - a.length}))
                    // console.log("All Counters Array", allCountersArray)\
                    let orderedAddressesArray = ((allAddressesArray.sort(function(a,b){return b.length - a.length})))
                    let winnerAddressesArray = orderedAddressesArray[0];
                    let winnerDay = winnerAddressesArray[0].day;
                    console.log("All Addresses Array", allAddressesArray)
                    console.log((allAddressesArray.sort(function(a, b){return b.length - a.length})), "ordered with length")
                    console.log("WINNER ADDRESSES", winnerAddressesArray)
                    console.log("winner day", winnerDay)

            });
        })
}
        )
}

export default generator