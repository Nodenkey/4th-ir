window.onscroll = () => {
    const x = window.matchMedia("(min-width: 992px)")
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > "100") {
        document.querySelector("header").style.backgroundColor = "#003145";
        document.querySelector("header").style.padding = "8px 0";
    }else {
        document.querySelector("header").style.padding = "15px 0";
        if (x.matches){
            document.querySelector("header").style.backgroundColor = "transparent";
        }
    }
};
