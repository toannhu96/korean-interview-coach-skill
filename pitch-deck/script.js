const slides = Array.from(document.querySelectorAll(".slide"));
const currentSlide = document.querySelector("#current-slide");
const totalSlides = document.querySelector("#total-slides");
const slideTitle = document.querySelector("#slide-title");
const progressFill = document.querySelector("#progress-fill");
const prevButton = document.querySelector('[data-action="prev"]');
const nextButton = document.querySelector('[data-action="next"]');

let activeIndex = 0;

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function updateDeck(index) {
  activeIndex = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  currentSlide.textContent = formatNumber(activeIndex + 1);
  totalSlides.textContent = formatNumber(slides.length);
  slideTitle.textContent = slides[activeIndex].dataset.title || "";
  progressFill.style.width = `${((activeIndex + 1) / slides.length) * 100}%`;

  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === slides.length - 1;

  const url = new URL(window.location.href);
  url.hash = `slide-${activeIndex + 1}`;
  window.history.replaceState(null, "", url);
}

function goNext() {
  updateDeck(activeIndex + 1);
}

function goPrev() {
  updateDeck(activeIndex - 1);
}

function getInitialSlide() {
  const match = window.location.hash.match(/^#slide-(\d+)$/);
  if (!match) return 0;
  return Number(match[1]) - 1;
}

prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);

window.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping =
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement ||
    target?.isContentEditable;

  if (isTyping) return;

  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    goNext();
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goPrev();
  }

  if (event.key === "Home") {
    event.preventDefault();
    updateDeck(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    updateDeck(slides.length - 1);
  }
});

window.addEventListener("hashchange", () => {
  updateDeck(getInitialSlide());
});

updateDeck(getInitialSlide());
