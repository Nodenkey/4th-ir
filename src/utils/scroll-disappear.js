window.onscroll = () => {
    const x = window.matchMedia("(min-width: 992px)")
    let currentScrollPosition = window.pageYOffset;
    const header = document.querySelector("header");
    if (header) {
        if (currentScrollPosition > "100") {
            header.style.backgroundColor = "#003145";
            header.style.padding = "8px 0";
        } else {
            header.style.padding = "15px 0";
            if (x.matches) {
                header.style.backgroundColor = "transparent";
            }
        }
    }
};
