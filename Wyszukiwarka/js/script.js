const input = document.querySelector("input")
const items = document.querySelectorAll(".list-item")

// const search = input.value
// console.log(search);



const checkEnter = () => {

    // items.forEach(item => {
    //         // if (input.value === "") {
    //         //     item.classList.remove("hide")
    //         //     console.log(input.value);
    //         // }
    //         if (item.textContent !== input.value) {
    //             item.classList.add("hide")
    //         }
    //         if (item.textContent === input.value) {
    //             item.classList.remove("hide")
    //         }
    //         if ("" === input.value) {
    //             item.classList.remove("hide")
    //         }

    //     }

    // )

    const text = input.value.toLocaleLowerCase()

    // items.forEach(item => {
    //     if (item.textContent.toLowerCase().indexOf(text) !== -1) {
    //         item.classList.remove("hide")
    //     } else {
    //         item.classList.add("hide")

    //     }
    // })
    items.forEach(item => {

        if (item.textContent.toLowerCase().includes(text) && text.length !== 0) {
            item.classList.remove("hide")
        } else if (text.length === 0) {
            item.classList.add("hide")

        }
    })
}

input.addEventListener("keyup", checkEnter)

const button = document.querySelector("button")
const container = document.querySelector(".container")

button.addEventListener("click", () => {
    container.classList.toggle("scale")
})