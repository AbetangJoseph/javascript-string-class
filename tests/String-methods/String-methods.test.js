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
});
