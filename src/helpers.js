/**Return a random item from a list */

function choice(arr) {
    const randIdx = Math.floor(Math.random() * arr.length)
    return arr[randIdx]
}

export {choice}