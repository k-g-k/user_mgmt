// ObjectStore is a generic class used to uniquely store objects
//
// See the assignment for details:
// https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/user_mgmt
//

// TODO: implement the object store class
function ObjectStore() {
  var collection = [];

  var self = {
    //returns
    exists: function (obj) {
      return collection.some(function(item){
        //does some item in this collection pass this test
        return obj.equal(item);
      });
    },

    //adds
    add: function (obj) {
      if (!self.exists(obj)) {
        collection.push(obj);
        return true;
      }

      return false;
    },

    //returns an array containing
    query: function () {
      return collection;
    },

    remove: function (obj){
      collection = collection.filter(function (item) {
        return !obj.equal(item);
      });
    }
  };

  return self;
}
