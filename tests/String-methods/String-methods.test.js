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
});
