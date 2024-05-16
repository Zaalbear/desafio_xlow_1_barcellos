export const render = (arr) => {
    const productsList = document.querySelector(".products_list")

    console.log(productsList);

    productsList.innerHtml = ''

    arr.forEach(product => {
        const card = createCard(product)

        productsList.appendChild(card)
    });
}

const createCard = ({ productName }) => {
    const container = document.createElement("li")
    const img = document.createElement("img")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")

    h3.innerText = productName


    container.append(h3)

    return container
}