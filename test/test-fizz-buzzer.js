const should = require('chai').should;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	it('should return "fizz" if number divisible by 3', function() {
		const inputValues = [3, 9, 12];
		inputValues.forEach(function(value) {
			fizzBuzzer(value).should.equal('fizz');
		})

	})
	it('should return "buzz" if number divisible by 5', function() {
		const inputValues = [5, 20, 50];
		inputValues.forEach(function(value) {
			fizzBuzzer(value).should.equal('buzz');
		})
		
	})
	it('should return "fizz-buzz" if number divisible by 15', function() {
		const inputValues = [15, 30, 60];
		inputValues.forEach(function(value) {
			fizzBuzzer(value).should.equal('fizz-buzz');
		})
	})
	it('should return number if number not divisible by 3 or 5', function() {
		const inputValues = [16, 28, 32];
		inputValues.forEach(function(value) {
			fizzBuzzer(value).should.equal(value);
		})
	})
	it('should give an error if input type not number', function() {
		const badInputValues = ['foo', 'true', 'false'];
		badInputValues.forEach(function(value) {
			(function(){
			 fizzBuzzer(value);
			}).should.throw(Error);
			
		})
	})

})