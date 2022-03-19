const currencyOne = document.querySelector("#currency-one")
const currencyTwo = document.querySelector("#currency-two")
const amountOne = document.querySelector(".amount-one")
const amountTwo = document.querySelector(".amount-two")
const swapBtn = document.querySelector(".swap")
const rateInfo = document.querySelector(".rate-info")

const calculate = () => {
    fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
        .then(res => res.json())
        .then(data => {
            const currency1 = currencyOne.value
            const currency2 = currencyTwo.value
            console.log(data.rates[currency2]);
            // console.log(data.rates.EUR);
            // console.log(data.base);
            const sum = amountOne.value * data.rates[currency2]
            amountTwo.value = sum.toFixed(2)
            rateInfo.textContent = `${amountOne.value} ${currency1} = ${sum.toFixed(4)} ${currency2}`
        })
}

const change = () => {
    // Stworzenie dodatkowej zmiennej z ta samą warości
    const first = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = first

    calculate()
}

currencyOne.addEventListener("change", calculate)
currencyTwo.addEventListener("change", calculate)
amountOne.addEventListener("input", calculate)
swapBtn.addEventListener("click", change)

calculate()