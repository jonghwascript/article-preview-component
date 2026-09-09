const shareBtn = document.querySelector(".preview-card__share-btn");
const sharePanel = document.querySelector(".preview-card__share");

shareBtn.addEventListener("click", function () {
    this.classList.toggle("preview-card__share-btn--active");
    sharePanel.classList.toggle("el_hidden");
});
