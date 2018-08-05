// var friends = ["Fady", "Donald", "John Paul", "Matt"];

// //"Fady"
// console.log(friends[0]) 

// // "Donald <3 John Paul"
// console.log(friends[1] + " <3 " + friends [2]); 

// //add an additional item to array, must come right after available number, otherwise adds nulls
// friends[4] = "Drew";

// //Arrays can hold any type of data
// var random_mix = [49, true, "Harry", null];

// //Arrays have a length property
// var nums = [45,37,89,24];
// nums.legnth //4

// /*
// ------------------------------------------------------------
// */

// var colors = ["Red", "orange", "yellow"];
// colors[3] = "Blue";

// var colors = ["Red", "orange", "yellow"];
// //push adds to the end
// colors.push("Green");

// //pop removes the last element
// colors.pop();
// //["red","orange"]

// //pop() returns the remove element
// var col = colors.pop()
// //orange

// //unshift adds to the beginning of an array
// colors.unshift("violet")

// //shift removes the first element
// colors.shift();

// var friends = ["Charlie", "Liz", "David","Matt"]

// //returns the first index at which the element can be found
// friends.indexOf("David");

// var fruits = ['Banana', 'Orange', 'Lemon','Apple', 'Mango'];

// //use slice to copy the second and third fruits
// //specify index where the new array starts(1) and ends(3)

// var citrus = fruits.slice(1,3);

// //citrus contains Orange & Lemon
// //fruits contains all

// var nums = [1,2,3,"a","b", 445, 34];

// var letters = nums.slice(3,5);

var todos = ["Buy new car"];
window.setTimeout(function() {
var input = prompt("What would you like to do?");


while(input !=="quit"){
    //handle input
    if(input === "list") {
        console.log(todos);
    } else if(input === "new"){
        //ask for new todo
        var newTodo = prompt("Enter New todo");
        //add to todos array
        todos.push(newTodo);
    }

    //ask again for new input
    input = prompt("What would you like to do?");   
}

console.log("Okay, you quit");
}, 500);
  
