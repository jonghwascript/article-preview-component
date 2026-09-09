const shareBtn = document.querySelector(".preview-card__share-btn");
const sharePanel = document.querySelector(".preview-card__share-pop");

shareBtn.addEventListener("click", function () {
    const isActive = this.classList.toggle("preview-card__share-btn--active");
    sharePanel.classList.toggle("el_hidden");
    this.setAttribute("aria-expanded", isActive);
});
