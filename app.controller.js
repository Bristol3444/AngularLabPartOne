"use strict";
function ToDoCtrl() {
    const self = this;
    self.tasks = [{task: "walk the dog", completed: true},{task: "laundry", completed: true},{task: "grocery store trip", completed: false},
                  {task: "pay bills", completed: true},{task: "sign up for meetup", completed: false},{task: "finish resume", completed: false}];
    self.add = function() {
    console.log("hello");
    }
}
angular
    .module("todoApp")
    .controller("ToDoCtrl", ToDoCtrl);