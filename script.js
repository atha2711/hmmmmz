let currentPage = 0;
const book = document.querySelector(".book");
const music = document.getElementById("bgMusic");
let musicStarted = false;

/* =========================
   DATA 31 FOTO DI SINI
========================= */

const memories = [
    { img: "images/foto9.jpg", date: "25 Februari 2024", desc: "pertama kali jalan jalan ke blok m naik kereta walaupun bareng bareng sama yang lain it was super fun." },
    { img: "images/foto10.jpeg", date: "11 June 2024", desc: "our first gebyar P5 kamu jadi sie dokum dan akuu jagain stand but we still manage to see each other bahkan aku jadi sie dokum buat kelas kamu jadi sie dokum buat gebyar nya." },
    { img: "images/foto11.jpg", date: "13 Januari 2024", desc: "this was super random of us playing a filter on my ipad i think heheh jujur agak lupa pake apaa seinget aku si ipad yaaa." },
    { img: "images/foto12.jpg", date: "13 Januari 2024", desc: "hari ini nonton haikyuu bareng temen temen yang lain juga dan hari ini kita udh setengah tahun." },
    {img: "images/foto13.jpg", date: "19 June 2024", desc: "kita disini photobox yang kesekian kali nya tapi ini di aeon aku bolos latihan terus juga lagi sakit and first time eating sushi it was soooo gooodd hehehe." },
    { img: "images/foto14.jpg", date: "25 June 2024", desc: "buakar buakar di rumah ica yagesyaa heheh seruu." },
    { img: "images/foto15.jpg", date: "2 October 2024", desc: "masuk pertama kali hari batik nasional pas kelas 11 samaa disini seruu bangett ketauan bu uli ges hehehe." },
    { img: "images/foto16.jpg", date: "20 October 2024", desc: "our very first concert in sma 44 nonton hivi and adikara super duper fun capeee panass buangett langsung ireng but it was super fun." },
    { img: "images/foto17.jpg", date: "20 October 2024", desc: "our very first concert in sma 44 nonton hivi and adikara super duper fun capeee panass buangett langsung ireng but it was super fun." },
    { img: "images/foto18.jpg", date: "13 December 2024", desc: "our anniversary dan merayakannya dengan full jamkos seharian ketawa tawa bareng main bareng dan mengakhirinya dengan mam our favorite food yaituuu reddog." },
    { img: "images/foto19.jpg", date: "17 December 2024", desc: "classmeet dayy kelass kita juara 2 yeaay hehehhe superr fun dayy." },
    { img: "images/foto20.jpg", date: "17 December 2024", desc: "classmeet dayy kelass kita juara 2 yeaay hehehhe superr fun dayy." },
    { img: "images/foto21.jpg", date: "18 July 2025", desc: "demos ekskul as agit cuyy." },
    { img: "images/foto22.jpg", date: "18 July 2025", desc: "demos ekskul as agit cuyy." },
    { img: "images/foto23.jpg", date: "9 August 2025", desc: "hari ini kita sempet berantem but we handle it very very well kitaa berdua lomba di beda lomba dan ga bisa saling nonton but we did our best and im very proud of you that day." },
    
    // Tambahkan sampai 31
];

/* =========================
   BUAT HALAMAN OTOMATIS
========================= */

memories.forEach(memory => {

    const page = document.createElement("div");
    page.classList.add("page");

    page.innerHTML = `
    <div class="polaroid">
        <img src="${memory.img}" class="fade-in">
    </div>
    <h2>${memory.date}</h2>
    <p>${memory.desc}</p>
    <span class="continue-text">Tap anywhere to continue ✨</span>
`;

    book.appendChild(page);
});

/* HALAMAN TERAKHIR */

const lastPage = document.createElement("div");
lastPage.classList.add("page", "last-page");
lastPage.innerHTML = `
    <img src="images/cat-roses.gif" class="fade-in">
    <h2>Happy Valentines Day my love💗🌷</h2>
    <p>
    that's not even the half of our story but thats just the glimps of it hehehe we came along way from freshman year till senior year and maybe 
    i can't say this in person in mean time but  i want to say that im super lucky and greatful to have met someone like you you're such an amazing and wonderful person pleasee keep being who you are and alwayss smileee for me and for everyone elsee pleasee keep that smile on your face, your the most prettyyy brilliant strong girl i ever known achaa akann selalu mendoakan uwaa supayaaa uwaaa mendapatkan apa yang uwaaa cita citakann untuk kedepannyaa semogaa kitaa berdua mendapatkan snbp teknik ui barengg yaaa aamiinn. heheheh i lovee youuu soo muchh honeyyy mwaahh😽🫂💗🌷
    I love you ❤️
    </p>
`;
book.appendChild(lastPage);

/* =========================
   NAVIGATION
========================= */

function nextPage() {

    const pages = document.querySelectorAll(".page");

    if (!musicStarted) {
        music.play();
        musicStarted = true;
    }

    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove("active");
        currentPage++;
        pages[currentPage].classList.add("active");

        // 💖 Cek apakah ini last page
        if (pages[currentPage].classList.contains("last-page")) {
            for (let i = 0; i < 20; i++) {
                createHeart();
            }
        }
    }

    createHeart();
}


document.addEventListener("click", function(e){
    if(!e.target.matches("button")){
        nextPage();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animation = "floatUp 4s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function typeWriter(element, text, speed = 40) {
    element.innerHTML = "";
    let i = 0;
    let timer = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(timer);
    }, speed);
}

const coverText = document.querySelector("#cover p");
typeWriter(coverText, coverText.textContent);

const mascot = document.querySelector(".mascot");
const bubble = document.querySelector(".bubble");
function showRandomMessage() {

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    bubble.textContent = randomMessage;

    bubble.classList.add("show");

    setTimeout(() => {
        bubble.classList.remove("show");
    }, 2000);
}

const messages = [
    "I love you 💕",
    "You're my favorite person 🫂",
    "Hehe miss you 😚",
];

mascot.addEventListener("click", () => {

    // random text
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    bubble.textContent = randomMessage;

    // tampilkan bubble
    bubble.classList.add("show");

    // keluarin hati juga
    for (let i = 0; i < 3; i++) {
        createHeart();
    }

    // hilang setelah 2 detik
    setTimeout(() => {
        bubble.classList.remove("show");
    }, 2000);
});

mascot.addEventListener("click", () => {

    showRandomMessage();

    for (let i = 0; i < 3; i++) {
        createHeart();
    }
});
setInterval(() => {
    showRandomMessage();
}, 5000); // 10000ms = 10 detik