import React from 'react';
import ParsePlayerIds from './ParseGameId'
import ParsePlayerDays from './ParsePlayerDays'

const Generator2 = (id) => {
    let idArray = ParsePlayerIds(id);
    console.log(idArray, 'idArray')
}
export default Generator2