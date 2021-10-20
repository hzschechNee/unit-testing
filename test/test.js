const { checkAge, checkFullName } = require('../src/util.js');
const { assert } = require('chai');

describe('test_checkAge', () => {
	
	it('age_not_empty', () => {
		const age = "";
		assert.isNotEmpty(checkAge(age));
	});

	it('age_is_number', () => {
		const age = 5;
		assert.isNotNumber(checkAge(age));
	});


	it('age_not_undefined', () => {
		const age = undefined;
		assert.isDefined(checkAge(age));
	});

	it('age_not_null', () => {
		const age = null;
		assert.isNotNull(checkAge(age));
	});

	it('age_not_less_than_0', () => {
		const age = 1;
		assert.isAtLeast(checkAge(age), '>', 0, 'Error: Age must be greater than 0'); 
	});

});

describe('test_checkFullName', () => {

	it('fullName_not_empty', () => {
		const fullName = "";
		assert.isNotEmpty(checkFullName(fullName));
	});

	it('fullName_not_null', () => {
		const fullName = null;
		assert.isNotNull(checkFullName(fullName));
	});

	it('fullName_not_undefined', () => {
		const fullName = undefined;
		assert.isDefined(checkFullName(fullName));
	});

	it('fullName_is_string_value', () => {
		const fullName = 5;
		assert.isString(checkFullName(fullName));
	});

	it('fullName_is_equal_0', () => {
		assert.equal(checkAge(age)); 
	});
});