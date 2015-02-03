////////////////////////////
///// Main Variables //////
//////////////////////////

var firstName = document.querySelector('.first-name');
var lastName = document.querySelector('.last-name');
var email = document.querySelector('.email');
var form = document.querySelector('.user-form');
var userStore = ObjectStore();


////////////////////////////
// General Use Functions //
//////////////////////////

// Creating function to clear form fields
function clearFields() {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
}


////////////////////////////
/////// Add a User ////////
//////////////////////////

// Creating function to add user to object store
function addUser() {
  var newUser = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  };
  // Adds the user to object store when addUser is called
  userStore.add(User(newUser));
}

// Calls addUser function to submit button event
form.addEventListener('submit', function (e) {
  e.preventDefault();
  e.stopPropagation();
  addUser();
  clearFields();
})


//function displayUserList



//search:
//function usersFilter(user) {
// var searchString = [
// user.firstName
//user.lastName
//user.email
//].join(' ');
// return contains(searchString, userSearchTerm);
//}

//rootElement/querySelector('.users-list').innerHTML =
//usersStore.query()
//.filter(usersFilter)
//.sort(compareUserNames)
//.map(userToListItem)
//.join('');
//}


// var tempArr = [userStore.query]
//
// newUser


// console.log(tempArr[i].fullName)

//call a refresh function
//create an array that
//temparray = userstore.query
//with a for loop iterate through that array
//on each item for each value of i each pass through the loop
// you want to call a funciton taht prints it to the screen
// things to create:
// tempArr
// new user listing
// print screen
