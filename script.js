// 메뉴 hover 기능 (모바일 대응 포함)
document.addEventListener("DOMContentLoaded", () => {
    const mainItems = document.querySelectorAll(".main-menu > li");

    mainItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const submenu = item.querySelector(".sub-menu");
            if (submenu) submenu.style.display = "block";
        });

        item.addEventListener("mouseleave", () => {
            const submenu = item.querySelector(".sub-menu");
            if (submenu) submenu.style.display = "none";
        });
    });
});


// 모든 멤버 카드 가져오기
const memberCards = document.querySelectorAll('.member-card');
const karinaPopup = document.getElementById('karina-popup');
const closeBtn = karinaPopup.querySelector('.close-btn');

// "Karina" 카드 클릭 시 팝업 열기
memberCards.forEach(card => {
    const name = card.querySelector('h3').innerText;
    if (name === "Karina") {
        card.addEventListener('click', () => {
            karinaPopup.style.display = 'block';
        });
    }
});

// 닫기 버튼 클릭 → 팝업 닫기
closeBtn.addEventListener('click', () => {
    karinaPopup.style.display = 'none';
});

// 팝업 바깥 클릭 → 팝업 닫기
window.addEventListener('click', (e) => {
    if (e.target === karinaPopup) {
        karinaPopup.style.display = 'none';
    }
});




// ===================== Winter 팝업 함수 =====================
function initWinterPopup() {
    const memberCards = document.querySelectorAll('.member-card');
    const winterPopup = document.getElementById('winter-popup');
    const winterCloseBtn = winterPopup.querySelector('.close-btn');

    // "Winter" 카드 클릭 → 팝업 열기
    memberCards.forEach(card => {
        const name = card.querySelector('h3').innerText;
        if (name === "Winter") {
            card.addEventListener('click', () => {
                winterPopup.style.display = 'block';
            });
        }
    });

    // 닫기 버튼 클릭 → 팝업 닫기
    winterCloseBtn.addEventListener('click', () => {
        winterPopup.style.display = 'none';
    });

    // 팝업 바깥 클릭 → 팝업 닫기
    window.addEventListener('click', (e) => {
        if (e.target === winterPopup) {
            winterPopup.style.display = 'none';
        }
    });
}

// 함수 실행
initWinterPopup();



// ===================== Giselle 팝업 함수 =====================
function initGisellePopup() {
    const memberCards = document.querySelectorAll('.member-card');
    const gisellePopup = document.getElementById('giselle-popup');
    const giselleCloseBtn = gisellePopup.querySelector('.close-btn');

    // "Giselle" 카드 클릭 → 팝업 열기
    memberCards.forEach(card => {
        const name = card.querySelector('h3').innerText;
        if (name === "Giselle") {
            card.addEventListener('click', () => {
                gisellePopup.style.display = 'block';
            });
        }
    });

    // 닫기 버튼 클릭 → 팝업 닫기
    giselleCloseBtn.addEventListener('click', () => {
        gisellePopup.style.display = 'none';
    });

    // 팝업 바깥 클릭 → 팝업 닫기
    window.addEventListener('click', (e) => {
        if (e.target === gisellePopup) {
            gisellePopup.style.display = 'none';
        }
    });
}

// 함수 실행
initGisellePopup();



// ===================== NingNing 팝업 함수 =====================
function initNingNingPopup() {
    const memberCards = document.querySelectorAll('.member-card');
    const ningningPopup = document.getElementById('ningning-popup');
    const ningningCloseBtn = ningningPopup.querySelector('.close-btn');

    // "NingNing" 카드 클릭 → 팝업 열기
    memberCards.forEach(card => {
        const name = card.querySelector('h3').innerText;
        if (name === "NingNing") {
            card.addEventListener('click', () => {
                ningningPopup.style.display = 'block';
            });
        }
    });

    // 닫기 버튼 클릭 → 팝업 닫기
    ningningCloseBtn.addEventListener('click', () => {
        ningningPopup.style.display = 'none';
    });

    // 팝업 바깥 클릭 → 팝업 닫기
    window.addEventListener('click', (e) => {
        if (e.target === ningningPopup) {
            ningningPopup.style.display = 'none';
        }
    });
}

// 함수 실행
initNingNingPopup();





document.addEventListener("DOMContentLoaded", () => {
  const sectionTitle = document.querySelector(".section-title");
  if (sectionTitle) {
    sectionTitle.addEventListener("click", () => {
      window.open("titles.html", "_blank");
    });
  }
});
