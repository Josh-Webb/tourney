import React from 'react'
import UserManager from './UserManager'

const ParsePlayerDays = (playerIdArray) => {
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
                    console.log(mondayAddressesArray, "monday array")
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
                    console.log(winnerAddressesArray, "winnerAddressesArray")
                    return winnerAddressesArray;
                     
                })})
}
export default ParsePlayerDays