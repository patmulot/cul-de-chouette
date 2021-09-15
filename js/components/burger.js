const burger = {
    'init': function () {
        const burgerIconElement = document.querySelector(".burger-icon");
        burgerIconElement.addEventListener("click", burger.handleClickOneBurgerIcon);
        window.addEventListener('resize', burger.handleClickOnBody);
        document.querySelector("main").addEventListener("click", burger.handleClickOnBody);
    },
    handleClickOneBurgerIcon(evt) {
        evt.preventDefault();
        let burgerButton = evt.currentTarget;
        let linksToDisplayElements = burgerButton.closest(".nav-container").querySelector(".nav_links-container");
        let headerLogoElement = burgerButton.closest(".nav-container").querySelector(".nav-header_logo");
        burgerButton.classList.toggle("active-burger");
        linksToDisplayElements.classList.toggle("active-burger-links");
        headerLogoElement.classList.toggle("active-header-logo");
    },
    handleClickOnBody(evt) {
        evt.preventDefault();
        let burgerButton = document.querySelector(".burger-icon");
        let linksToDisplayElements = document.querySelector(".nav_links-container");
        let headerLogoElement = burgerButton.closest(".nav-container").querySelector(".nav-header_logo");
        burgerButton.classList.remove("active-burger");
        linksToDisplayElements.classList.remove("active-burger-links");
        headerLogoElement.classList.remove("active-header-logo");
    }
}