const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// so now every string should be held in it's own array
//check via browser // flop
// split each array into it's own word
// now to capitalize each word of string... map again and then function call back too
//cap the first letter w slice method
//hold in variable the rest of the letters lowercase via slice (1)
//return both first and rest string concatinate them together
// return each word back together via .join w a space between each " "




const titleCased1 = () => {
  return tutorials.map(function(eachString) {
let eachWord = eachString.split(" ");
let findCap = eachWord.map(function(item) {
  let firstLetter = item.slice(0, 1).toUpperCase
  let restWord = item.slice(1)
  return `${firstLetter} + ${restWord}`
})
  return eachWord.join(" ")
  })
}

const titleCased = () => {
  return tutorials.map(function(ele) {
    let words = ele.split(" ")
    let capWords = words.map(function(item) {
      let firstLetter = item.slice(0, 1).toUpperCase()
      let restWord = item.slice(1)
      return `${firstLetter}${restWord}`
    })
    return capWords.join(" ")
  })
}
