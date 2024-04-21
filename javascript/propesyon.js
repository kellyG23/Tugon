const targetWords = [
  "Titser",
  "Inhinyero",
  "Kantero",
  "Kartero",
  "Panadero",
  "Tubero",
  "Sapatero",
  "Masahista",
  "Karpintero",
  "Anluwage",
  "Beterinaryo",
  "Karnisero",
  "Kalihim",
  "Panday-kaban",
  "Magsasaka",
  "Mekaniko",
  "Hardinero",
  "Mangingisda",
  "Pahinante",
  "Kargador",
  "Piloto",
  "Guwardiya",
  "Bumbero",
  "Dentista",
  "Basurero",
];

const word = "HELLO"; // replace this with the actual word
const keyboard = document.querySelector(".keyboard");

// remove existing buttons
while (keyboard.firstChild) {
  keyboard.removeChild(keyboard.firstChild);
}

// create new buttons
for (let i = 0; i < word.length * 6; i++) {
  const button = document.createElement("button");
  button.classList.add("key");
  keyboard.appendChild(button);
}

// set the text of each button to the corresponding letter of the word
for (let i = 0; i < word.length; i++) {
  const button = keyboard.children[i * 6];
  button.textContent = word[i];
}
