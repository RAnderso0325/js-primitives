/*4.) List all the `friends` above in reverse alphabetical order.*/

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
var friendsArray = friends.split(",");
var friendsAlphabet = friendsArray.sort();
var friendsReverse = friendsAlphabet.reverse();
var friends2 = friendsReverse.join(",");
console.log(friends2);