// Assignment Code

let charCount;


document.getElementById("generate").onclick = writePassword;


// Write password to the #password input


function writePassword() {

  var options = []

  console.log(options)

  var password = ""
  console.log("password", password)

  charCount = prompt("How many characters do you want? 8-128")

  console.log(charCount)
  if (charCount < 8 || charCount > 128) {

    alert("Please pick within the correct range")
  }

  else {
    var includeUpperCase = confirm("Do you want to include uppercase?")
    var includeLowerCase = confirm("Do you want to include lowercase?")
    var includeSpecial = confirm("Do you want to include special characters?")
    var includeNumbers = confirm("Do you want to include numbers?")

    console.log("Lowercase " + includeLowerCase)
    console.log("Numbers " + includeNumbers)
    console.log("Special characters " + includeSpecial)
    console.log("Uppercase " + includeUpperCase)
  }

  if (includeUpperCase === false && includeSpecial === false && includeNumbers === false && includeLowerCase === false) {
    alert("Please select something")
  }
  else {
    if (includeUpperCase === true) {
      options.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")

    }

    if (includeLowerCase === true) {
      options.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    }

    if (includeSpecial === true) {
      options.push("!", "@", "#", "$", "%", "^", "&", "*")
    }

    if (includeNumbers === true) {
      options.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
    }

    console.log(options)

    if (charCount) {
      for (var i = 0; i < charCount; i++) {
        password += options[Math.floor(Math.random() * options.length)]
      }
      console.log(password)
    }
  }

document.getElementById("password").value = password
}

function copy(){
  document.getElementById("password").select()
  document.execCommand("Copy")
  alert("Your Password Has Been Copied!")
}

// Add event listener to generate button
