const story = "Tumhari kahani yahaan likhi jaayegi, word by word.";
const storyElement = document.getElementById("story");
const signature = document.getElementById("signature");
let words = story.split(" ");
let i = 0;

function showWords() {
  if (i < words.length) {
    storyElement.innerHTML += words[i] + " ";
    i++;
    setTimeout(showWords, 200);
  } else {
    signature.style.opacity = 1;
  }
}
showWords();
