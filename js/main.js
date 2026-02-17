// blur cards
const cards = document.querySelectorAll(".project-card");

function updateFocus() {

    const viewportCenter = window.innerHeight / 2;
    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
        }
    });

    cards.forEach(card => card.classList.remove("focused"));

    if (closestCard) {
        closestCard.classList.add("focused");
    }
}

window.addEventListener("scroll", updateFocus);
window.addEventListener("load", updateFocus);

