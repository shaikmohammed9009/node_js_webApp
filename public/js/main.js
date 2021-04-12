// $(".owl-carousel").owlCarousel();
const email = document.getElementById("email")
const Passwords = document.getElementById("Password")

const inValidEmail = document.getElementById("inValidEmail")
const inValids = document.getElementById("inValids")
const submit = document.getElementById("submit")

const valcheck = (event) => {
    event.preventDefault()
    let MyEmail = email.value.trim();
    let pass = Passwords.value.trim();
    if (MyEmail === "") {
        // debugger
        inValidEmail.innerHTML = "Please Enter Email"
        inValids.innerHTML = "Please Enter Password"
            // console.log(inValid);
            // console.log(MyEmail)
    } else if (MyEmail === "" && pass === "") {
        inValidEmail.innerHTML = "Please Enter Email"
        inValids.innerHTML = "Please Enter Password"


    } else if (MyEmail !== "" && pass === "") {
        inValidEmail.innerHTML = ""
        inValids.innerHTML = "Please Enter Password"

    } else if (MyEmail === "" && pass !== "") {
        inValidEmail.innerHTML = "Please Enter Email"
        inValids.innerHTML = ""

    }
}
submit.addEventListener("click", valcheck)


$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<i class='fas fa-caret-left'></i>",
            "<i class='fas fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    /*model box*/

// $('#exampleModal').on('show.bs.modal', function(event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever') // Extract info from data-* attributes
//         // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//         // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
// })