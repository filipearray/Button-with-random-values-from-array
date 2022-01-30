let btnRandom = document.querySelector("button");
let result = document.querySelector("h1");

let masterpiece = ["Boku no Hero Academia", "Go-Tōbun no Hanayome", "Bokutachi wa Benkyou ga Dekinai", "Platinum End", "Tsuki to Laika to Nosferatu", "Fullmetal Alchemist", "To Love-Ru", "86", "GAMERS!", "Steins;Gate 0", "Sword Art Online", "Rakudai Kishi no Cavalry", "Sono Bisque Doll wa Koi wo Suru", "Dr. Stone", "Attack on Titan", "Akame ga Kill!", "Cowboy Bebop", " Demon Slayer", "No Game No Life", "One Punch-Man", "Back Street Girls: Gokudolls", "Death Note", "Kakegurui", "Erased", "Mahouka Koukou no Rettousei", "Majo no Tabitabi", "Tokyo Revengers", "Seirei Gensouki: Spirit Chronicles", "Love of Kill", "Sakurada Reset", "Yu-No", "Taimadou Gakuen 35 Shiken Shoutai", "Parasyte", "Kuzu no Honkai", "Akashic Records of Bastard Magic Instructor ", "Kyuukyoku Shinka Shita Full Dive RPG ga Genjitsu Yorimo Kuso-Ge Dattara", , "Rent-a-Girlfriend", "No Guns Life", "Komi-san wa, Komyushou desu", "Ousama Ranking", "Blue Period", "Boku wa Tomodachi ga Sukunai"];

function getRandomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener("click", () => {
    let index = getRandomNumber(0, masterpiece.length - 1);
    result.innerText = masterpiece[index];
});
