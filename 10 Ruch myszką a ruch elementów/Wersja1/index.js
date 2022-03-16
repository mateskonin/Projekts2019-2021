document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.anim-bg');

    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].addEventListener("click", function() {
    //         if (i == 7) {
    //             return
    //         } else {
    //             elements[i].classList.add('remove-cloud')
    //         }
    //     })
    // }

    // elements.forEach(function(element) {
    //     element.addEventListener("click", function() {
    //         if (this.classList.contains("flying-balloon")) {
    //             return
    //         } else {
    //             this.classList.add('remove-cloud')
    //         }
    //     })
    // })

    document.addEventListener('mousemove', function(event) {
        const {
            clientX,
            clientY
        } = event;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        elements.forEach(element => {

            const ratioX = -element.getAttribute('ratioX');
            const ratioY = -element.getAttribute('ratioY');

            const moveX = (clientX - centerX) * ratioX;
            const moveY = (clientY - centerY) * ratioY;

            element.style.transform = `translate(${moveX}px, ${moveY}px)`;

            element.addEventListener("click", function() {
                if (this.classList.contains("flying-balloon")) {
                    return
                } else {
                    this.classList.add('remove-cloud');
                }
            })
        })
    })


})