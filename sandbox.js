var maleCount = function(array) {
    var males = _.filter(array, function(customer){
        return customer.gender === "male";
    })
    return males.length;

};

var femaleCount = function(array) {
    var females = _.reduce(array, function(seed, customer){
        if(customer.gender === "female"){
        seed += 1;
        }
        return seed;
    }, 0);
    return females;
};;

var oldestCustomer = function(array) {
    var oldest = _.reduce(array, function(seed, customer) {
		if(seed.age > customer.age) {
		  return seed;
		}
		else {
		  return customer;
		}
	}, {});
    return oldest.name;
};

var youngestCustomer= function(array) {
    var youngest = _.reduce(array, function(seed, customer) {
		if(seed.age < customer.age) {
		  return seed;
		}
		else {
		  return customer;
		}
	}, {});
    return youngest.name;
};

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;