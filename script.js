const HEART_EMOJI = "💗";
// Режим футера: "typing" или "pulse"
const FOOTER_MODE = "typing";


const timelineData = [
  {
    date: "07.04.2024",
    title: "Наша первая весна",
    text: "Тот самый день, когда всё стало по-настоящему и началась наша история.",
    // Можно добавлять 2 фото (или 1) — порядок сохраняется
    images: ["images/story-1a.jpg", "images/story-1b.jpg"],
  },
  {
    date: "Лето 2024",
    title: "Тёплые прогулки",
    text: "Город, солнце, музыка и наши бесконечные разговоры.",
    images: ["images/story-2a.jpg", "images/story-2b.jpg"],
  },
  {
    date: "07.04.2025",
    title: "Первый год вместе",
    text: "Мы стали ещё ближе, научились понимать друг друга с полуслова.",
    images: ["images/story-3a.jpg", "images/story-3b.jpg"],
  },
];


const galleryData = [
  { src: "../images/gallery-1.jpg", alt: "Фото 1", comment: "Люблю, когда ты меня так обнимаешь;)" },
  { src: "../images/gallery-2.jpg", alt: "Фото 2", comment: "Сахарная вата" },
  { src: "../images/gallery-3.jpg", alt: "Фото 3", comment: "Валелик"},
  { src: "../images/gallery-4.jpg", alt: "Фото 4" },
  { src: "../images/gallery-5.jpg", alt: "Фото 5" },
  { src: "../images/gallery-6.jpg", alt: "Фото 6" },
];

const momentsData = [
  {
    date: "Апрель 2024",
    title: "Первое совместное путешествие",
    text: "Мы поехали в Кисловодск — это было наше первое путешествие вместе. Тогда ещё был день рождения у Лили, и всё это сделало поездку особенно тёплой и запоминающейся.",
    images: ["../images/moment-1a.jpg", "../images/moment-1b.jpg", "../images/moment-1c.jpg", "../images/moment-1d.jpg"],
  },
  {
    date: "Май-июнь",
    title: "Много прогулок",
    text: "Мы много гуляли вместе, и я каждый раз ловила себя на мысли, как сильно мне нравятся эти моменты рядом с тобой.",
    images: ["../images/moment-2a.jpg", "../images/moment-2b.jpg", "../images/moment-2c.jpg", "../images/moment-2d.jpg"],
  },
  {
    date: "Июль",
    title: "Море и долгая разлука",
    text: "Море было красивым, но без тебя чего-то не хватало… Тогда я особенно поняла, как сильно скучаю по тебе.",
    images: ["../images/moment-3a.jpg", "../images/moment-3b.jpg", "../images/moment-3c.jpg", "../images/moment-3d.jpg", "../images/moment-3g.jpg"],
  },
  {
    date: "Сентябрь 2024",
    title: "Долгожданная встреча",
    text: "Наша встреча была долгожданной. Пусть были небольшие расстройства, но главное — мы снова были рядом, и от этого становилось по-настоящему хорошо.",
    images: ["images/moment-4a.jpg"]
  },
  {
    date: "Декабрь 2024",
    title: "Дни рождения",
    text: "Эти дни рождения мы провели вдвоём — тихо, уютно и очень по-нашему. Это было особенное время только для нас.",
    images: ["../images/moment-5a.jpg", "../images/moment-5b.jpg"]
  },
  {
    date: "Февраль 2025",
    title: "Зимняя поездка в Кисловодск",
    text: "Это было невероятно красиво… Я впервые увидела Эльбрус целиком именно рядом с тобой. Мы много смеялись, и я была по-настоящему счастлива.",
    images: ["../images/moment-6a.jpg", "../images/moment-6b.jpg", "../images/moment-6c.jpg", "../images/moment-6d.jpg"],
  },
  {
    date: "Апрель 2025",
    title: "1 год вместе",
    text: "Целый год вместе… Мы много гуляли, впервые побывали в Японском саду — тогда всё было таким красивым, как и наши чувства.",
    images: ["../images/moment-7a.jpg", "../images/moment-7h.jpg", "../images/moment-7c.jpg", "../images/moment-7j.jpg", "../images/moment-7b.jpg"],
  },
  {
    date: "Май-июнь 2025",
    title: "Летние прогулки",
    text: "Тёплые дни, долгие прогулки и ты рядом — что может быть лучше?",
    images: ["../images/moment-8a.jpg", "../images/moment-8b.jpg", "../images/moment-8c.jpg", "../images/moment-8d.jpg"],
  },
  {
    date: "Июль 2025",
    title: "Снова море",
    text: "Ты снова приехал к нам на море. Ты познакомился с папой, и для меня это было очень волнительно.",
    images: ["../images/moment-9a.jpg", "../images/moment-9b.jpg", "../images/moment-9c.jpg", "../images/moment-9d.jpg"],
  },
  {
    date: "Апрель 2026",
    title: "2 года вместе",
    text: "Уже 2 года мы идём рядом… поддерживая друг друга, вдохновляя и просто любя. И я хочу, чтобы это никогда не заканчивалось 💗",
    images: ["images/moment-10a.jpg", "images/moment-10b.jpg"],
    firework: true

  },
];


const timeline = document.getElementById("timeline");
const galleryGrid = document.getElementById("galleryGrid");
const momentsGrid = document.getElementById("momentsGrid");

function renderTimeline() {
  timeline.innerHTML = timelineData
    .map((item) => {
      const images = item.images && item.images.length
        ? item.images
        : item.image
          ? [item.image]
          : [];

      const photosMarkup = images
        .map(
          (src, index) => `
            <div class="timeline__photo">
              <img src="${src}" alt="${item.title} — фото ${index + 1}" loading="lazy" decoding="async" />
            </div>
          `
        )
        .join("");

      return `
        <article class="timeline__item reveal">
          <div class="timeline__date">${item.date}</div>
          <h3 class="timeline__title">${item.title}</h3>
          <div class="timeline__photos">
            ${photosMarkup}
          </div>
          <p class="timeline__text">${item.text}</p>
        </article>
      `;
    })
    .join("");
}

function renderGallery() {
  galleryGrid.innerHTML = galleryData
    .map(
      (item, index) => {
        const commentMarkup = item.comment
          ? `<div class="gallery__overlay"><span>${item.comment}</span></div>`
          : "";

        return `
        <button class="gallery__item reveal" type="button" data-src="${item.src}" data-alt="${item.alt}" aria-label="Открыть фото ${index + 1}">
          <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" />
          ${commentMarkup}
        </button>
      `;
      }
    )
    .join("");
}

function renderMoments() {
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const spread = isMobile ? 16 : 26;
  const tilt = isMobile ? 10 : 16;
  const size = isMobile ? 64 : 72;

  momentsGrid.innerHTML = momentsData
    .map((item) => {
      const images = item.images && item.images.length ? item.images : [];
      const count = images.length;
      const fanWidth = count ? size + (count - 1) * spread : 0;

      const photosMarkup = images
        .map((src, index) => {
          const offset = index * spread;
          const rotate = (index - (count - 1) / 2) * tilt;
          const z = index + 1;

          return `
            <button class="moment-photo" type="button" data-src="${src}" data-alt="${item.title} — фото ${index + 1}" style="--x:${offset}px; --r:${rotate}deg; --z:${z};">
              <img src="${src}" alt="${item.title} — фото ${index + 1}" loading="lazy" decoding="async" />
            </button>
          `;
        })
        .join("");

      const fanMarkup = photosMarkup
        ? `<div class="moment-photos" style="--fan-width:${fanWidth}px; --fan-size:${size}px;">${photosMarkup}</div>`
        : "";

      const cardClass = photosMarkup ? "card reveal card--with-photos" : "card reveal";
      const fireAttr = item.firework ? " data-firework=\"true\"" : "";

      return `
        <article class="${cardClass}"${fireAttr}>
          <div class="card__date">${item.date}</div>
          <h3 class="card__title">${item.title}</h3>
          <p class="card__text">${item.text}</p>
          ${fanMarkup}
        </article>
      `;
    })
    .join("");
}

renderTimeline();
renderGallery();
renderMoments();


const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = () => document.querySelectorAll(".reveal");

const footerTyping = document.querySelector(".footer__typing");
const footerPulse = document.querySelector(".footer__pulse");

if (footerTyping || footerPulse) {
  if (FOOTER_MODE === "typing") {
    if (footerPulse) footerPulse.classList.add("is-hidden");
    if (footerTyping) {
      const text = footerTyping.dataset.text || "";
      if (prefersReducedMotion) {
        footerTyping.innerHTML = text.replace(/\n/g, "<br>");
      } else {
        footerTyping.classList.add("typing");
        let i = 0;
        const step = () => {
          i += 1;
          footerTyping.innerHTML = text.slice(0, i).replace(/\n/g, "<br>");
          if (i < text.length) {
            setTimeout(step, 40);
          } else {
            footerTyping.classList.remove("typing");
          }
        };
        step();
      }
    }
  } else {
    if (footerTyping) footerTyping.classList.add("is-hidden");
  }
}

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems().forEach((el) => observer.observe(el));
} else {
  revealItems().forEach((el) => el.classList.add("in-view"));
}


function launchHeartFirework(container) {
  const count = 14;
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = HEART_EMOJI;

    const angle = Math.random() * Math.PI * 2;
    const radius = 40 + Math.random() * 50;
    const dx = Math.cos(angle) * radius;
    const dy = Math.sin(angle) * radius - 20;

    heart.style.setProperty("--dx", `${dx}px`);
    heart.style.setProperty("--dy", `${dy}px`);
    heart.style.animationDelay = `${Math.random() * 0.2}s`;

    container.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

function setupFireworkObserver() {
  const cards = document.querySelectorAll(".card[data-firework=\"true\"]");
  if (!cards.length) return;

  const trigger = (card) => {
    if (card.dataset.fired) return;
    card.dataset.fired = "true";
    launchHeartFirework(card);
  };

  const checkVisible = () => {
    let pending = false;
    cards.forEach((card) => {
      if (card.dataset.fired) return;
      pending = true;
      const rect = card.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
      if (visible) {
        trigger(card);
      }
    });
    if (!pending) {
      window.removeEventListener("scroll", checkVisible);
      window.removeEventListener("resize", checkVisible);
    }
  };

  if ("IntersectionObserver" in window) {
    const fireObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trigger(entry.target);
            fireObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30% 0px" }
    );

    cards.forEach((card) => fireObserver.observe(card));
  }

  checkVisible();
  window.addEventListener("scroll", checkVisible, { passive: true });
  window.addEventListener("resize", checkVisible);
  window.addEventListener("orientationchange", checkVisible);
  window.addEventListener("load", checkVisible);
  setTimeout(checkVisible, 300);
}

if (!prefersReducedMotion) {
  setupFireworkObserver();
}

document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox__img");
const lightboxClose = lightbox.querySelector(".lightbox__close");
const lightboxPrev = lightbox.querySelector(".lightbox__prev");
const lightboxNext = lightbox.querySelector(".lightbox__next");

let lightboxItems = [];
let lightboxIndex = 0;

function setLightboxIndex(index) {
  if (!lightboxItems.length) return;
  lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[lightboxIndex];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt || "";

  const showNav = lightboxItems.length > 1;
  lightboxPrev.style.display = showNav ? "grid" : "none";
  lightboxNext.style.display = showNav ? "grid" : "none";
}

function openLightboxList(items, startIndex = 0) {
  lightboxItems = items;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  setLightboxIndex(startIndex);
}

function openLightbox(src, alt) {
  openLightboxList([{ src, alt }], 0);
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  lightboxImg.alt = "";
  lightboxItems = [];
  lightboxIndex = 0;
}

galleryGrid.addEventListener("click", (event) => {
  const item = event.target.closest(".gallery__item");
  if (!item) return;

  const items = galleryData.map((photo, index) => ({
    src: photo.src,
    alt: photo.alt || `Фото ${index + 1}`,
  }));

  const index = Array.from(galleryGrid.querySelectorAll(".gallery__item")).indexOf(item);
  openLightboxList(items, Math.max(index, 0));
});

momentsGrid.addEventListener("click", (event) => {
  const fan = event.target.closest(".moment-photos");
  if (!fan) return;

  const buttons = Array.from(fan.querySelectorAll(".moment-photo"));
  if (!buttons.length) return;

  const items = buttons.map((btn, index) => ({
    src: btn.dataset.src,
    alt: btn.dataset.alt || `Фото ${index + 1}`,
  }));

  const clicked = event.target.closest(".moment-photo");
  const startIndex = clicked ? buttons.indexOf(clicked) : 0;
  openLightboxList(items, Math.max(startIndex, 0));
});

lightboxPrev.addEventListener("click", () => setLightboxIndex(lightboxIndex - 1));
lightboxNext.addEventListener("click", () => setLightboxIndex(lightboxIndex + 1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

lightboxClose.addEventListener("click", closeLightbox);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
  if (lightbox.classList.contains("open") && lightboxItems.length > 1) {
    if (event.key === "ArrowLeft") {
      setLightboxIndex(lightboxIndex - 1);
    }
    if (event.key === "ArrowRight") {
      setLightboxIndex(lightboxIndex + 1);
    }
  }
});

if (!prefersReducedMotion) {
  const finalSection = document.getElementById("final");
  const heroSection = document.querySelector(".hero");

  function spawnClickHeart(event, container) {
    // Перезапускаем анимацию сердечек в финальном блоке (если есть)
    document.body.classList.remove("hearts-active");
    void document.body.offsetWidth; // принудительный reflow
    document.body.classList.add("hearts-active");

    // Эмодзи-сердце появляется в месте клика
    const heart = document.createElement("span");
    heart.className = "click-heart";
    heart.textContent = HEART_EMOJI;

    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    container.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }

  if (finalSection) {
    finalSection.addEventListener("click", (event) => {
      spawnClickHeart(event, finalSection);
    });
  }

  if (heroSection) {
    heroSection.addEventListener("click", (event) => {
      spawnClickHeart(event, heroSection);
    });
  }
}




















