(() => {
        const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        // modalContent: document.querySelector(".modal-cont"),
    };

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
// refs.modalContent.addEventListener("click", closeModalOutside);
document.addEventListener("keydown", closeModalEscape);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
}

// function closeModalOutside(e) {
//     if (e.target === refs.modalContent) return;
//     refs.modal.classList.add("is-hidden");
// }

function closeModalEscape(e) {
    if (e.key === "Escape") {
        refs.modal.classList.add("is-hidden");
    }
}

})();