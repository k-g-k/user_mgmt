// User constructs a new user object. For more details, see
// https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/user_mgmt


// TODO: implement the user class, and get user unit tests passing

function User(spec) {
  if (!spec.firstName || spec.firstName.trim() === '') {
    throw 'First name is required';
  }

  if (!spec.lastName || spec.lastName.trim() === '') {
    throw 'Last name is required';
  }

  if (!spec.email || spec.email.trim() === '') {
    throw 'Email is required';
  }

  var self = {
    firstName: spec.firstName,
    lastName: spec.lastName,
    email: spec.email,
    //this compares emails
    equal: function(otherUser) {
      return self.email === otherUser.email;
    },

    fullName: function() {
      return self.firstName + ' ' + self.lastName;
    }

  };

  return self;

}
