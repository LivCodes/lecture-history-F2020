function removeVowels(word){
  return word.replace(/[aeiuo]/ig, '')
}

function removeConst(word){
  return word.replace(/[^aeiuo ]/ig, '')
}

function removeNumbers(word){
//   return word.replace(/[\d]/g, '')
  return word.replace(/[0-9]/g, '')
}

function removeLetters(word){
  return word.replace(/[a-z]/gi, '')
}

removeLetters("kitten Kitten ran away from us")


