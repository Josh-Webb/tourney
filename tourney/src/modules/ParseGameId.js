import React from 'react';
import ConnectionManager from './ConnectionManager'

const ParsePlayerIds = (gameId) => {
    ConnectionManager.getAll()
        .then(connections => {
            // console.log("connections", connections)
            // console.log(connections.length)
            connections = [];
            let connectionObject = connections
            let arrayLength = connections.length
            console.log(arrayLength, "arrayLength var")
            for (let i = 1; i < arrayLength; i++) {
                if (gameId === connectionObject[i].game_id) {
                    console.log([i], connectionObject[i].game_id,'<game_id', connections[i].user_id,'<user_id')
                    connections.push(connectionObject[i].user_id)
                    console.log(connections, 'playerIdArray')
                } else {}
            }
           
            }
            
            
            
        )
    }
    
    export default ParsePlayerIds
