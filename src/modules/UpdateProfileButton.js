const collectSessStorage = () => {
    let sess = JSON.parse(sessionStorage.getItem('credentials'))
    let sessId =  sess.id
    return sessId
}

export default collectSessStorage