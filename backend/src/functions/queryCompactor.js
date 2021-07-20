const queryCompactor = (selectedObject) => {
    let adjustedQuery = ''
    for (type in selectedObject) {
        if (selectedObject[type] === true) {
            adjustedQuery += `'${type}', `
        }
    }
    if (adjustedQuery == '') {
        for (type in selectedObject) {
            adjustedQuery += `'${type}', `
        }
    }
    return(adjustedQuery.substring(0,adjustedQuery.length-2))
}

module.exports = queryCompactor