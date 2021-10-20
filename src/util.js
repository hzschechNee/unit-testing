function checkAge(age){

	if(age == "") {
		return "Error: Age is empty!"
	};

	if(age == 5) {
		return "Error: Age should be a number!"
	};

	if(age === undefined) {
		return "Error: Age is undefined!"
	};

	if(age === null) {
		return "Error: Age is null."
	};

	if(age > 0) {
		return "Error: Age must be greater than 0."
	}


	return age;
}

function checkFullName(fullName){

	if (fullName == "") {
		return "Error: Full Name is empty."
	}

	if (fullName === null) {
		return "Error: Full Name is null."
	}

	if (fullName === undefined) {
		return "Error: Full Name is undefined."
	}

	if (typeof(fullName) !== 'string') {
		return "Error: Full Name should be string."
	}

	return fullName;
}

module.exports = {
	checkAge: checkAge,
	checkFullName: checkFullName
};