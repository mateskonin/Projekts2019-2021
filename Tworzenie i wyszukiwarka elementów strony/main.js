const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);

    if (txt) {
        const tekst = document.createTextNode(txt);
        element.appendChild(tekst);
    }
    if (attr) {

        element.setAttribute(attr, value)
    }
    document.querySelector('.content').appendChild(element);
}

const searchElements = (e, nameElement) => {
    e.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = ""

    const elements = document.querySelectorAll(nameElement);
    if (elements.length) {
        infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie znalazłem ${elements.length} elementów ${nameElement}</p>`;
        showInfo(elements, infoElement);
    } else {
        infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie nie znalazłem elementów ${nameElement}</p>`;
        return;
    }
}

const showInfo = (elements, infoElement) => {
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>klasa/klasy:${element.className}</div>
        <div>Wysokość elementu: ${element.offsetHeight}</div>
        <div>Szerokość elementu: ${element.offsetWidth}</div>
        <div>Odległość od górnej krawędzi: ${element.offsetTop}</div>
        <div>Odległość od lewej krawędzi: ${element.offsetLeft}</div>
        <div>Liczba elementów dzieci: ${element.childElementCount}</div>
        `;
        infoElement.appendChild(item)
    });
}

//listener
const addForm = document.querySelector(".form--add")
addForm.addEventListener("submit", (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.txt.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
))

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value))