import React from 'react'
import LocationsManager from './LocationsManager'


const parseAddresses = (day) => {
LocationsManager.getAll()
                        .then(venues => {
                            console.log("venues", venues)
                            console.log("test", venues[3].address)
                            // let dayForFunction = day
                            // console.log(day, "day", dayForFunction, "day for Function", "console day4")
                            // let checkbox = venues.checkboxes;
                            // console.log(checkbox, "console day2")
                            // console.log(checkbox, "console day3")

                            console.log(venues[3].checkboxes, "console day")
                            // console.log(dayForFunction)
                            let venueAddressesArray = [];
                            let venueLength = venues.length;
                            console.log(venueLength, "venue length")
                            for (let i = 1; i < venueLength; i++) {
                                if (venues.checkboxes.day === true) {
                                    console.log(venues[i].checkboxes.dayForFunction, "true")
                                    venueAddressesArray.push(venues[i].address)
                                } else {
                                    console.log("nope", venues[i].checkboxes.dayForFunction)
                                }
                                console.log("venue address array", venueAddressesArray)
                            }
                        })
                    }

                    export default parseAddresses