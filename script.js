const craeteTitleProducts = (title, color) => {
    return `Комплект постельного белья из ${title}. "${color}"`;
};

const PRODUCTS = [
    {
        id: "p-99",
        title: craeteTitleProducts("тенселя", "Cлоновая кость"),
        price: "5 490 ₽",
        image: "assets/image_for_products/image 99.png",
    },
    {
        id: "p-100",
        title: craeteTitleProducts("тенселя", "Голубой"),
        price: "5 790 ₽",
        image: "assets/image_for_products/image 100.png",
    },
    {
        id: "p-92",
        title: craeteTitleProducts("тенселя", "Серо-голубой"),
        price: "6 190 ₽",
        image: "assets/image_for_products/image 92.png",
    },
    {
        id: "p-74",
        title: craeteTitleProducts("хлопока", "Синий"),
        price: "6 490 ₽",
        image: "assets/image_for_products/image 74.png",
    },
    {
        id: "p-108",
        title: craeteTitleProducts("сатина", "Тёмно-синий"),
        price: "6 890 ₽",
        image: "assets/image_for_products/image 108.png",
    },
    {
        id: "p-115",
        title: craeteTitleProducts("тенселя", "Серо-синий"),
        price: "7 190 ₽",
        image: "assets/image_for_products/image 115.png",
    },
    {
        id: "p-109",
        title: craeteTitleProducts("тенселя", "Сиреневый"),
        price: "7 490 ₽",
        image: "assets/image_for_products/image 109.png",
    },
    {
        id: "p-111",
        title: craeteTitleProducts("тенселя", "Тауп"),
        price: "7 790 ₽",
        image: "assets/image_for_products/image 111.png",
    },
    {
        id: "p-85",
        title: craeteTitleProducts("тенселя", "Персиковый"),
        price: "8 190 ₽",
        image: "assets/image_for_products/image 85.png",
    },
    {
        id: "p-114",
        title: craeteTitleProducts("сатина", "Айвори"),
        price: "8 490 ₽",
        image: "assets/image_for_products/image 114.png",
    },
    {
        id: "p-112",
        title: craeteTitleProducts("тенселя", "Розовый"),
        price: "8 790 ₽",
        image: "assets/image_for_products/image 112.png",
    },
    {
        id: "p-113",
        title: craeteTitleProducts("тенселя", "Пурпурный"),
        price: "8 990 ₽",
        image: "assets/image_for_products/image 113.png",
    },
    {
        id: "p-88",
        title: craeteTitleProducts("сатина", "Кирпичный"),
        price: "9 190 ₽",
        image: "assets/image_for_products/image 88.png",
    },
    {
        id: "p-101",
        title: craeteTitleProducts("тенселя", "Коричневый"),
        price: "9 390 ₽",
        image: "assets/image_for_products/image 101.png",
    },
    {
        id: "p-106",
        title: craeteTitleProducts("тенселя", "Бежевый"),
        price: "9 590 ₽",
        image: "assets/image_for_products/image 106.png",
    },
    {
        id: "p-102",
        title: craeteTitleProducts("тенселя", "Оранжевый"),
        price: "9 790 ₽",
        image: "assets/image_for_products/image 102.png",
    },
    {
        id: "p-105",
        title: craeteTitleProducts("тенселя", "Серо-бежевый"),
        price: "9 890 ₽",
        image: "assets/image_for_products/image 105.png",
    },
    {
        id: "p-104",
        title: craeteTitleProducts("тенселя", "Бежевый"),
        price: "9 990 ₽",
        image: "assets/image_for_products/image 104.png",
    },
];

const NEW_PRODUCT_IDS = ["p-88", "p-101", "p-106", "p-102", "p-105", "p-104"];
const STORAGE_KEY = "nuvole-bianche-favorites";
const HEART_EMPTY = `
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14.5 0.5C17.3045 0.5 19.5 2.68674 19.5 5.5C19.5 7.22061 18.7289 8.82587 17.2695 10.6113C15.8047 12.4035 13.699 14.3154 11.1143 16.6592L11.1133 16.6602L10 17.6729L8.88672 16.6602L8.88574 16.6592C6.30104 14.3154 4.19531 12.4035 2.73047 10.6113C1.27109 8.82587 0.5 7.22061 0.5 5.5C0.5 2.68674 2.69555 0.5 5.5 0.5C7.08865 0.5 8.62159 1.24211 9.62012 2.40527L10 2.84766L10.3799 2.40527C11.3784 1.24211 12.9114 0.5 14.5 0.5Z" fill="transparent" stroke="#730E12"/>
    </svg>
`;
const HEART_FILLED = `
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14.5 0.5C17.3045 0.5 19.5 2.68674 19.5 5.5C19.5 7.22061 18.7289 8.82587 17.2695 10.6113C15.8047 12.4035 13.699 14.3154 11.1143 16.6592L11.1133 16.6602L10 17.6729L8.88672 16.6602L8.88574 16.6592C6.30104 14.3154 4.19531 12.4035 2.73047 10.6113C1.27109 8.82587 0.5 7.22061 0.5 5.5C0.5 2.68674 2.69555 0.5 5.5 0.5C7.08865 0.5 8.62159 1.24211 9.62012 2.40527L10 2.84766L10.3799 2.40527C11.3784 1.24211 12.9114 0.5 14.5 0.5Z" fill="#730E12" stroke="#730E12"/>
    </svg>
`;
let memoryFavorites = [];

function getFavorites() {
    try {
        const favorites = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        return Array.isArray(favorites) ? favorites : [];
    } catch {
        return memoryFavorites;
    }
}

function setFavorites(ids) {
    memoryFavorites = ids;

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
        return;
    }
}

function toggleFavorite(id) {
    const favorites = getFavorites();
    const nextFavorites = favorites.includes(id)
        ? favorites.filter((itemId) => itemId !== id)
        : [...favorites, id];

    setFavorites(nextFavorites);
}

function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.id = product.id;

    card.innerHTML = `
        <div class="product-card__image-wrap">
            <img class="product-card__image" src="${product.image}" alt="${product.title}">
            <button class="product-card__heart" type="button" aria-label="Добавить в избранное" data-heart="${product.id}"></button>
        </div>
        <h3 class="product-card__title">${product.title}</h3>
        <div class="product-card__bottom">
            <span class="product-card__price">${product.price}</span>
            <button class="product-card__buy" type="button">Купить</button>
        </div>
    `;

    return card;
}

function updateHeartButtons() {
    const favorites = getFavorites();

    document.querySelectorAll("[data-heart]").forEach((button) => {
        const active = favorites.includes(button.dataset.heart);
        button.innerHTML = active ? HEART_FILLED : HEART_EMPTY;
        button.setAttribute(
            "aria-label",
            active ? "Убрать из избранного" : "Добавить в избранное",
        );
    });
}

function createModalMarkup() {
    const modalRoot = document.createElement("div");
    modalRoot.className = "modal";
    modalRoot.hidden = true;
    modalRoot.innerHTML = `
        <div class="modal__overlay" data-modal-close></div>
        <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <form class="modal__form" novalidate>
                <h2 class="modal__title" id="modal-title">Задать вопрос</h2>
                <div class="modal__fields">
                    <label class="modal__field">
                        <span>Имя<span class="modal__required">*</span></span>
                        <input type="text" name="name" placeholder="Имя" required>
                    </label>
                    <label class="modal__field">
                        <span>Фамилия<span class="modal__required">*</span></span>
                        <input type="text" name="surname" placeholder="Фамилия" required>
                    </label>
                    <label class="modal__field">
                        <span>Отчество</span>
                        <input type="text" name="patronymic" placeholder="Отчество">
                    </label>
                    <label class="modal__field modal__field--half">
                        <span>Телефон<span class="modal__required">*</span></span>
                        <input type="tel" name="phone" placeholder="Телефон" required>
                    </label>
                    <label class="modal__field modal__field--half">
                        <span>Почта</span>
                        <input type="email" name="email" placeholder="Почта">
                    </label>
                    <label class="modal__field modal__field--full">
                        <span>Вопрос<span class="modal__required">*</span></span>
                        <textarea name="message" placeholder="Введите вопрос..." required></textarea>
                    </label>
                </div>
                    <p class="modal__note">* Обязательно для заполнения</p>
                <div class="modal__bottom">
                    <div class="modal__actions">
                        <button class="modal__button modal__button--cancel" type="button" data-modal-close>Отмена</button>
                        <button class="modal__button" type="submit">Отправить</button>
                    </div>
                </div>
            </form>
            <div class="modal__success" hidden>
                <p data-modal-success-text>Ваш вопрос отправлен, скоро свяжемся с Вами.</p>
                <button class="modal__button" type="button" data-modal-close>Закрыть</button>
            </div>
        </div>
    `;
    document.body.append(modalRoot);
    return modalRoot;
}

const modal = createModalMarkup();
const modalForm = modal.querySelector(".modal__form");
const modalTitle = modal.querySelector(".modal__title");
const modalSuccess = modal.querySelector(".modal__success");
const modalSuccessText = modal.querySelector("[data-modal-success-text]");
let lastFocusedElement = null;

function openModal(type = "question") {
    const isOrder = type === "order";
    lastFocusedElement = document.activeElement;
    modalTitle.textContent = isOrder
        ? "Оставить заявку на заказ"
        : "Задать вопрос";
    modalSuccessText.textContent = isOrder
        ? "Ваша заявка отправлена, скоро свяжемся с Вами."
        : "Ваш вопрос отправлен, скоро свяжемся с Вами.";
    modalForm.hidden = false;
    modalSuccess.hidden = true;
    modalForm.reset();
    modal.hidden = false;
    modal.classList.remove("modal--success");
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => modal.classList.add("is-open"));
    modal.querySelector("input")?.focus();
}

function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    window.setTimeout(() => {
        modal.hidden = true;
        modalForm.hidden = false;
        modalSuccess.hidden = true;
    }, 180);
    lastFocusedElement?.focus?.();
}

function renderProducts(container) {
    const mode = container.dataset.products;
    let products = PRODUCTS;

    if (mode === "new") {
        products = NEW_PRODUCT_IDS.map((id) =>
            PRODUCTS.find((product) => product.id === id),
        ).filter(Boolean);
    }

    if (mode === "favorites") {
        const favoriteIds = getFavorites();
        products = PRODUCTS.filter((product) =>
            favoriteIds.includes(product.id),
        );
        const empty = document.querySelector(".empty-favorites");
        if (empty) {
            empty.hidden = products.length > 0;
        }
    }

    container.innerHTML = "";
    products.forEach((product) => container.append(createProductCard(product)));
    updateHeartButtons();
}

document.querySelectorAll("[data-products]").forEach(renderProducts);

const burger = document.querySelector(".burger");
if (burger) {
    burger.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("nav-open");
        burger.setAttribute("aria-expanded", String(isOpen));
        burger.setAttribute(
            "aria-label",
            isOpen ? "Закрыть меню" : "Открыть меню",
        );
    });
}

const slider = document.querySelector(".products--home");
const sliderPrev = document.querySelector("[data-slider-prev]");
const sliderNext = document.querySelector("[data-slider-next]");

if (slider && sliderPrev && sliderNext) {
    const getSliderStep = () => {
        const firstCard = slider.querySelector(".product-card");
        if (!firstCard) {
            return 0;
        }

        const styles = window.getComputedStyle(slider);
        const gap = parseFloat(styles.columnGap || styles.gap) || 0;

        return firstCard.getBoundingClientRect().width + gap;
    };

    const scrollSlider = (direction) => {
        slider.scrollBy({
            left: direction * getSliderStep(),
            behavior: "smooth",
        });
    };

    sliderPrev.addEventListener("click", () => scrollSlider(-1));
    sliderNext.addEventListener("click", () => scrollSlider(1));
}

document.addEventListener("click", (event) => {
    const modalTrigger = event.target.closest(
        ".nav__mail, .footer__question, .product-card__buy",
    );
    if (modalTrigger) {
        event.preventDefault();
        openModal(
            modalTrigger.classList.contains("product-card__buy")
                ? "order"
                : "question",
        );
        return;
    }

    if (event.target.closest("[data-modal-close]")) {
        closeModal();
        return;
    }

    const button = event.target.closest("[data-heart]");
    if (!button) {
        return;
    }

    toggleFavorite(button.dataset.heart);

    if (document.body.dataset.page === "favorites") {
        const container = document.querySelector('[data-products="favorites"]');
        if (container) {
            renderProducts(container);
        }
    } else {
        updateHeartButtons();
    }
});

modalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!modalForm.checkValidity()) {
        modalForm.reportValidity();
        return;
    }

    modalForm.hidden = true;
    modalSuccess.hidden = false;
    modal.classList.add("modal--success");
    modalSuccess.querySelector("button")?.focus();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});
