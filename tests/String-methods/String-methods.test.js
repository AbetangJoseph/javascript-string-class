var String = require('../../src/String-methods/String-methods');

describe('STRING METHODS', function() {
  describe('hasVowels', function() {
    it('should return false if the string contains vowels', function() {
      var string1 = 'rhythm crypt';
      expect(string1.hasVowels()).toBeFalsy();
    });

    it('should return true if the string contains vowels', function() {
      var string2 = 'vowel checker';
      expect(string2.hasVowels()).toBeTruthy();
    });
  });

  describe('toUpper', function() {
    it('should return a string with all its characters in uppercase', function() {
      var string = 'a capitalized sentence';
      expect(string.toUpper()).toEqual('A CAPITALIZED SENTENCE');
    });
  });

  describe('toLower', function() {
    it('should return a string with all its characters in lowercase', function() {
      var string = 'A LOWER CASE SENTENCE';
      expect(string.toLower()).toEqual('a lower case sentence');
    });
  });

  describe('ucFirst', function() {
    it('should return a string with the first character capitalized', function() {
      var string = 'i love javascript';
      expect(string.ucFirst()).toEqual('I Love Javascript');
    });
  });

  describe('isQuestion', function() {
    it('should return true if the string is a question', function() {
      var string = 'can you swim?';
      expect(string.isQuestion()).toBeTruthy();
    });

    it('should return false if the string is not a question', function() {
      var string = 'can you swim';
      expect(string.isQuestion()).toBeFalsy();
    });
  });

  describe('words', function() {
    it('should return a list of the words in the string, as an Array', function() {
      var string = 'A software engineer at 25.';
      expect(string.words()).toContain('engineer');
    });
  });

  describe('wordCount', function() {
    it('should return the number of words in the string', function() {
      var string = 'Decagon software institute, No.1 in Nigeria';
      expect(string.wordCount()).toEqual(6);
    });
  });
});
