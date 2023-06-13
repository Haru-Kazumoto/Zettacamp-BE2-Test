/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */

//This is array 
const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

function result(sentences) {
  // your code here

  let maximumWords = 0; //defining the max words

  //Search the sentences with .length() method
  for(let i = 0; i < sentences.length; i++){

    const words = sentences[i].split(' '); //words variable save the split method
    const countedWords = words.length; //Set the countedwords variable from counting the split method (words) with .length()

    //Check if the countedWords greater than maximumWords, then set the maximumWords equal countedWords
    if(countedWords > maximumWords){
      maximumWords = countedWords;
    }

  }

  //Then return the maximumWords that has been setted.
  return maximumWords;
}

console.log(result(sentences)); //should be return 23