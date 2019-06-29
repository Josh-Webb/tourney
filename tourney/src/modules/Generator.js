import React from "react";
import './ConnectionManager';
import './TourneyManager';
import './LibraryManager';
import './UserManager';
import './DistanceMatrixManager';
import './ParseGameId'
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
        })
}

export default generator