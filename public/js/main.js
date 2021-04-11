// $(".owl-carousel").owlCarousel();
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

const Email = document.getElementById("Email")
const submit = document.getElementById("submit")
const inValid = document.getElementById("InValid")
const valcheck = (event) => {
    event.preventDefault()

    let MyEmail = Email.value;
    if (MyEmail === null) {
        inValid.innerHTML = "shaik mohammed";
        // console.log(MyEmail)
    }
}
submit.addEventListener("click", valcheck)