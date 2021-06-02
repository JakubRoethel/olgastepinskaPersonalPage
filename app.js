const numerologyPortrait = document.querySelector(".numerology-portrait");
const numerologyName = document.querySelector(".numerology-name");

const btnPortrait = document.querySelector(".btn-portrait");
const btnName = document.querySelector(".btn-name");


btnPortrait.addEventListener("click", () => {
    numerologyPortrait.style.display = "block";
    numerologyName.style.display = "none";
});

btnName.addEventListener("click", () => {
    numerologyPortrait.style.display = "none";
    numerologyName.style.display = "block";
});


