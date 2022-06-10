.split()
brings string into an Array




const titleCased = () => {
    return tutorials.map(function(ele) { //ele means element
        let words = ele.split(" ")
        //words have been split into each word
        //accesss the first letter, but first access each 
        let capWords = words.map(function(item) {
            let firstLetter = item.slice(0, 1).toUpperCase()
            let restWord = item.slice(1)
            return `${firstLetter} + ${restWord}`
        })
        return capWords.join(" ")
    })
}


const titleCased = () => {
    return tutorials.map(function(eachString) {
  let eachWord = eachString.split(" ");
  let cap = eachWord.map(function(letter) {
    let first = letter.slice(0, 1).toUpperCase
    let restOf = letter.slice(1)
    return `${first} + ${restOf}`
  })
    return eachWord.join(" ")
    })
  }
