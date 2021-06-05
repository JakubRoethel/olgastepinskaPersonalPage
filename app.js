const numerologyPortrait = document.querySelector(".numerology-portrait");
const numerologyName = document.querySelector(".numerology-name");
const numerologyFirm = document.querySelector(".numerology-firm");
const numerologyHoroscope = document.querySelector(".numerology-horoscope");

const btnPortrait = document.querySelector(".btn-portrait");
const btnName = document.querySelector(".btn-name");
const btnFirm = document.querySelector(".btn-company");
const btnHoroscope = document.querySelector(".btn-horoscope");


btnPortrait.addEventListener("click", () => {
    numerologyPortrait.style.display = "block";
    numerologyName.style.display = "none";
    numerologyFirm.style.display = "none";
    numerologyHoroscope.style.display = "none";
});

btnName.addEventListener("click", () => {
    numerologyPortrait.style.display = "none";
    numerologyName.style.display = "block";
    numerologyFirm.style.display = "none";
    numerologyHoroscope.style.display = "none";
});

btnFirm.addEventListener("click", () => {
    numerologyPortrait.style.display = "none";
    numerologyName.style.display = "none";
    numerologyFirm.style.display = "block";
    numerologyHoroscope.style.display = "none";
});

btnHoroscope.addEventListener("click", () => {
    console.log("in horoscope");
    
    numerologyPortrait.style.display = "none";
    numerologyName.style.display = "none";
    numerologyFirm.style.display = "none";
    numerologyHoroscope.style.display = "block";
});


