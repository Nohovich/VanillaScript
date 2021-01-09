//The following line adds a nested namespace.
// A nested namespace is a namespace inside another namespace.In JavaScript to define a nested namespace, you define an object inside another object. 
// if David exists continue els create
var David = David || {};
David.TeamA = David.TeamA || {};

David.TeamA.customer = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }

    return this;
}
