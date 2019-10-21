var userInput = prompt("Where do you live?");
var input0 = userInput.charAt(0).toUpperCase();
var inputLast = userInput.charAt(userInput.length-1).toUpperCase();
// alert(userInput + " " + inputLast + input0);

function reverseString(userInput) {
    // Step 1. Use the split() method to return a new array
    var splitString = userInput.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

// alert(reverseString(userInput));

function letterAt(userInput) {
  var charCount = userInput.length - 1;
  var half = charCount / 2;
  return userInput.charAt(half);
}

alert(userInput.length);

alert("middle letter: " + letterAt(userInput) + " original input: " + userInput + " last and first letters: " + inputLast + input0 + " input reversed: " + reverseString(userInput));
