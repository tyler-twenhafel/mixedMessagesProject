const messageParts = {
    band: ['Bleed From Within ', 'Hatebreed ', 'Crown The Empire ', 'The Amity Affliction ', 'Knocked Loose ', 'Beartooth ', 'Currents ', 'Slipknot ', 'August Burns Red '],
    preference: ['wants to ', 'loves to ', 'hates to '],
    actions: ['rock out ', 'release a new song ', 'start a mosh pit ', 'scream ', 'do a guitar solo ', 'rage out ', 'go skating ', 'conjure spells '],
    places: ['on stage', 'in the pit', 'at a festival', 'on the roof', 'at a concert', 'on a bridge', 'on the tour bus'],
}

//Choose random element from each array
const randomMessage = (array) => 
  array[Math.floor(Math.random() * array.length)];

//Assemble the message pieces into the final message
const assembleMessage = () => {
    let message = "";

    for (let word in messageParts) {
        message += randomMessage(messageParts[word]);
    }
    console.log("The band " + message + ".");
}

assembleMessage()