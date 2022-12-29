$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 2,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1100: {
            items: 3,
        },
        1400: {
            items: 4,
            loop: false,
        }
    }
});





// --------------------------------------------------------------








// function store() {
//     var inputEmail = document.getElementById("email");
//     localStorage.setItem("email", inputEmail.value);
//     var inputPassword = document.getElementById('pw');
//     localStorage.setItem("password", inputPassword.value);

//     var storedEmail = localStorage.getItem("email");
//     var storedPassword = localStorage.getItem("password")
// }