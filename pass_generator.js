let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let genbtn = document.getElementById("genbtn");
let copyIcon = document.getElementById("copyIcon");

// Showing input slider value
slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
  slidervalue.textContent = inputslider.value;
});

genbtn.addEventListener("click", () => {
  passbox.value = generatepassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

// Function to generate password
function generatepassword() {
  let genpassword = "";

  let allChars = "";

  // Add selected character sets to the combined string
  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += number.checked ? allnumbers : "";
  allChars += symbols.checked ? allsymbols : "";

  // If no character types are selected, return an empty password
  if (allChars === "") {
    return genpassword;
  }

  // Generate password based on slider value and selected characters
  for (let i = 0; i < inputslider.value; i++) {
    genpassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return genpassword;
}

copyIcon.addEventListener("click", () => {
  if (passbox.value !== "" || passbox.value.length >= 1) {
    navigator.clipboard.writeText(passbox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 3000);
  }
});
