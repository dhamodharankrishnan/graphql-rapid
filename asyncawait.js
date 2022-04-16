const displayMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(message);
        }, 3000);
    });
}

displayMessage('Hello').then(result => {
    console.log('result ', result);
    displayMessage('There').then( result => {
        console.log('result ', result);
        displayMessage('Wassup?').then( result => {
            console.log('result', result);
        })
    })
})

console.log('====')