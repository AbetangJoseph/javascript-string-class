var String = require('../../src/String-methods/String-methods');

describe('STRING METHODS', function() {
  describe('hasVowels', function() {
    it('should return false if the string contains vowels', function() {
      var string1 = 'rhythm crypt';
      expect(string1.hasVowels()).toBeFalsy();
      expect(typeof string1.hasVowels()).toMatch('boolean');
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
      expect(typeof string.toUpper()).toEqual('string');
    });
  });

  describe('toLower', function() {
    it('should return a string with all its characters in lowercase', function() {
      var string = 'A LOWER CASE SENTENCE';
      expect(string.toLower()).toEqual('a lower case sentence');
      expect(typeof string.toLower()).toEqual('string');
    });
  });

  describe('ucFirst', function() {
    it('should return a string with the first character capitalized', function() {
      var string = 'i love javascript';
      expect(string.ucFirst()).toEqual('I Love Javascript');
      expect(typeof string.ucFirst()).toEqual('string');
    });
  });

  describe('isQuestion', function() {
    it('should return true if the string is a question', function() {
      var string = 'can you swim?';
      expect(string.isQuestion()).toBeTruthy();
      expect(typeof string.isQuestion()).toEqual('boolean');
    });

    it('should return false if the string is not a question', function() {
      var string = 'can you swim';
      expect(string.isQuestion()).toBeFalsy();
      expect(typeof string.isQuestion()).toEqual('boolean');
    });
  });

  describe('words', function() {
    it('should return a list of the words in the string, as an Array', function() {
      var string = 'A software engineer at 25.';
      expect(string.words()).toContain('engineer');
      expect(typeof string.words()).toEqual('object');
    });
  });

  describe('wordCount', function() {
    it('should return the number of words in the string', function() {
      var string = 'Decagon software institute, No.1 in Nigeria';
      expect(string.wordCount()).toEqual(6);
      expect(typeof string.wordCount()).toEqual('number');
    });
  });

  describe('toCurrency', function() {
    it('should return a currency representation of the String', function() {
      var number1 = '11111.11';
      var number2 = '1002388432.00';
      expect(number1.toCurrency()).toEqual('11,111.11');
      expect(number2.toCurrency()).toEqual('1,002,388,432.00');
      expect(typeof number2.toCurrency()).toEqual('string');
    });
  });

  describe('fromCurrency', function() {
    it('should return a number representation of a currency String', function() {
      var number1 = '11,111.11';
      var number2 = '1,002,388,432.22';
      expect(number1.fromCurrency()).toEqual(11111.11);
      expect(number2.fromCurrency()).toEqual(1002388432.22);
      expect(typeof number2.fromCurrency()).toEqual('number');
    });
  });

  describe('inverseCase', function() {
    it('should return each letter in the string as an inverse of its current case', function() {
      var string = 'Mr. Ben';
      expect(string.inverseCase()).toEqual('mR. bEN');
      expect(typeof string.inverseCase()).toEqual('string');
    });
  });

  describe('alternatingCase', function() {
    it('should return the letters in alternating cases starting with a lower case', function() {
      var string = 'Onomatopoeia';
      expect(string.alternatingCase()).toEqual('oNoMaToPoEiA');
      expect(typeof string.alternatingCase()).toEqual('string');
    });
  });

  describe('numberWords', function() {
    it('should return the numbers in words', function() {
      var number1 = '325';
      var number2 = '911';
      expect(number1.numberWords()).toMatch('three two five');
      expect(number2.numberWords()).toMatch('nine one one');
      expect(typeof number2.numberWords()).toEqual('string');
    });
  });

  describe('isDigit', function() {
    it('should return true if the string is a one-number digit', function() {
      var number1 = '34';
      var number2 = '3';
      var number3 = '';
      expect(number1.isDigit()).toBeFalsy();
      expect(number2.isDigit()).toBeTruthy();
      expect(number3.isDigit()).toBeFalsy();
      expect(typeof number3.isDigit()).toEqual('boolean');
    });
  });
});
