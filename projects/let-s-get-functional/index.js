// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
const _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./anthony-kelly3.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer){
        return customer.gender === "male";
    })
    //console.log(males);
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

var averageBalance = function(array) {
  var totalBalance = _.reduce(array, function(total, customer){
      //seed += Number(customer.balance.slice(1));
      let bal = parseFloat(customer.balance.replace(/[^0-9\.]+/g,"") );
      //let lance = bal.slice(2);
      console.log(bal);
      total += bal;
      return total;
  }, 0);
  var average = totalBalance / array.length;
  console.log(average);
  return average;
};

var firstLetterCount = function(array, letter) {
  var firstLetter = _.filter(array, function(customer){
      return customer.name[0].toLowerCase() === letter.toLowerCase();
  })
  return firstLetter.length;
};


var friendFirstLetterCount = function(array, customer, letter){
  var chosen;
  for(let i = 0; i < array.length; i++){
    if(array[i].name === customer){
      chosen = array[i];
    }
  }
  var firstFriendLetter = _.filter(chosen.friends, function(friendsObject){
    return friendsObject.name[0].toLowerCase() === letter.toLowerCase();
  })
  return firstFriendLetter.length;


};


var friendsCount = function(array, name){
  /*
  var given;
  for(let i = 0; i < array.length; i++){
    if(array[i].name === name){
      given = array[i];
    }
  }
  */
  var friendCount = _.reduce(array, function(arr, customer){
    //return customer.friends.includes(name);
    //if (customer.friends.includes(name)
    for(let i = 0; i < customer.friends.length; i++){
      if(customer.friends[i].name === name){
        arr.push(customer.name);
      }
    }
    return arr;
  }, []);
  console.log(friendCount.length);
  return friendCount;

};

//object.entries(tag)

var topThreeTags = function(array){
  var tag = _.reduce(array, function(obj, customer){
    let common = customer.tags;
    for(let i = 0; i < common.length; i++){ 
      if (obj[common[i]]) { 
        obj[common[i]] += 1;
      } else { 
        obj[common[i]] = 1;
      }
    }
    return obj;
  }, {});
  let sorted = Object.entries(tag).sort(([,a],[,b]) => a-b);
  let arr = [];
  let ray = [];
  //console.log(tag);
  for(let i = sorted.length - 1; i <= sorted.length; i--){
    arr.push(sorted[i]);
  }
  for(let j = 0; j < 3; j++){
    ray.push(arr[i]);
  }

  return ray;

};

var genderCount = function(array) {
  var genders = _.reduce(array, function(obj, customer){ 
      if (obj[customer.gender]) { 
        obj[customer.gender] += 1;
      } else { 
        obj[customer.gender] = 1;
      }
      return obj;
    }, {});
  return genders;  
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
