/* 
This method checks a string and returns true if it contains a vowel and false if it doesn't.
e.g 'cyst'.hasVowels() outputs false and 'code'.hasVowels() outputs true
*/
String.prototype.hasVowels = function() {
  var regExPattern = /[aeiou]/gi; // a global case insensitive search pattern for vowels
  return regExPattern.test(this); // the test method returns true or false if a vowel is found
};

/* 
This method checks a string for lower-case alphabet(s) and convert to upper-case
e.g 'a capitalized sentence'.toUpper() outputs 'A CAPITALIZED SENTENCE'
*/
String.prototype.toUpper = function() {
  // a global case sensitive search pattern for only lower-case alphabets
  var regExPattern = /[a-z]/g;
  // calls a function on each alphabet match
  return this.replace(regExPattern, function(alphabet) {
    // subtract 32 from the current unicode to get it's equivalent in uppercase.
    return String.fromCharCode(alphabet.charCodeAt(0) - 32);
  });
};

/* 
This method checks a string for upper-case alphabet(s) and convert to lower-case
e.g 'A LOWER CASE SENTENCE'.toLower() outputs 'a lower case sentence'
*/
String.prototype.toLower = function() {
  // a global case sensitive search pattern for only upper-case alphabets
  var regExPattern = /[A-Z]/g;
  // calls a function on each alphabet match
  return this.replace(regExPattern, function(alphabet) {
    // add 32 to the current unicode to get it's equivalent in lowercase.
    return String.fromCharCode(alphabet.charCodeAt(0) + 32);
  });
};

/* 
This method converts the first character(s) in a string to upper-case
*/
String.prototype.ucFirst = function() {
  // a global case sensitive word boundary search pattern
  var regExPattern = /(\b\w+\b)/g;
  // calls a function on each word match
  return this.replace(regExPattern, function(word) {
    // turn the first letter in the word to uppercase & get the rest of the word exluding the character on the first index.
    return word[0].toUpper() + word.substring(1);
  });
};

/* 
This method returns true if the string is a question
*/
String.prototype.isQuestion = function() {
  // a global case insensitive search pattern for a word that ends with a question mark
  var regExPattern = /\w+\?$/gi;
  // the test method returns true if there is a match and false if there isn't
  return regExPattern.test(this);
};

/* 
This method returns a list of the words in the string, as an Array excluding numbers and special characters
*/
String.prototype.words = function() {
  // a global case insensitive search pattern for non-space characters
  var regExPattern = /[^\s]+/gi;
  // calls match on the words and retunn an arrray
  return this.match(regExPattern);
};

/* 
This method returns the number of words in the string
*/
String.prototype.wordCount = function() {
  return this.words().length;
};

/* 
This method returns a currency representation of the String.
e.g it changes '11111.11' to '11,111.11'
*/
String.prototype.toCurrency = function() {
  // a global search pattern for digits that appear before the period sign in groups of three one time and beyound.
  var regExPattern = /\d(?=(\d{3}){1,}\.)/g;
  // replace digits that match the pattern by adding a comma(,) sign in front of each three digits in the capture group
  return this.replace(regExPattern, '$&,');
};

/* 
This method returns a number representation of a currency String.
e.g it changes '11,111.11' to 11111.11  
*/
String.prototype.fromCurrency = function() {
  // a global search pattern for one or more comma(s)
  var regExPattern = /,+/g;
  /* 
  the replaced method is called on the string and if any matches the pattern, 
  all commas(,) are replaced with nothing. The return type would be a string,
  so we pass it into the parseFloat method to turn it to a number type and maintain the floating point.
*/
  return Number.parseFloat(this.replace(regExPattern, ''));
};

/* 
This method returns each letter in the string as an inverse of its current case
e.g it changes 'Mr. Ben' to 'mR. bEN'
*/
String.prototype.inverseCase = function() {
  // a global case-insensitive search pattern for lower-case alphabets
  var regExPattern = /[a-z]/gi;
  /*
  call the replace method on the string. 
  if it matches the pattern, a callback function is invoked on that alphabet.
  if it is not a lower-case alphabet, turn it to a lower-case alphabet else
  turn it to upper-case
  */
  return this.replace(regExPattern, function(alphabet) {
    return !alphabet.match(/[a-z]/) ? alphabet.toLower() : alphabet.toUpper();
  });
};

/* 
This method returns each letter in the string as an inverse of its current case
e.g it changes 'Onomatopoeia' to 'oNoMaToPoEiA'
*/
String.prototype.alternatingCase = function() {
  // a global case-insensitive search pattern for lower-case alphabets
  var regExPattern = /[a-z]/gi;
  /*
  call the replace method on the string. 
  if it matches the pattern, a callback function is invoked on that alphabet
  and it's index in the string is picked and divided by 2. 
  if no remainder, then it is even and the alphabet on that index is turned to lower-case,
  other wise if odd, it is turned to upper-case
  */
  return this.replace(regExPattern, function(alphabet, index) {
    return index % 2 === 0 ? alphabet.toLower() : alphabet.toUpper();
  });
};

/* 
This method returns the numbers in words
e.g it changes 325 to 'three two five'
*/
String.prototype.numberWords = function() {
  // a global search pattern for digits(0-9) only
  var regExPattern = /\d/g;
  var arrayOfWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];

  /*
  call the replace method on the string. 
  if it matches the pattern, a callback function is invoked on that digit
  and the digit serves as an index for accessing the elements of the arrayOfWwords array
  to get it's element.
  */
  return this.replace(regExPattern, function(digit) {
    return arrayOfWords[digit] + ' ';
  });
};

/* 
This method returns true if the string is a digit(one number)
e.g '3'.isDigit() returns true but '30'.isDigit() returns false
*/
String.prototype.isDigit = function() {
  // a global word boundary search pattern for a single digit
  var regExPattern = /\b\d\b/g;
  // call the test method on the pattern and return true if there is a match and false if there isn't.
  return regExPattern.test(this);
};
