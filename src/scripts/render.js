import { getProduct } from "./requests.js";

export const render = (arr) => {
    const productsList = document.querySelector(".products_list")
    const productCounter = document.querySelector(".products_counter")
    const counter = arr.length

    productCounter.innerText = counter

    productsList.innerHtml = ''

    arr.forEach(async product => {
        const card = createCard(await getProduct(product.productId))

        productsList.appendChild(card)
    });
}

const createCard = (product) => {
    const imagesArr = product.items[0].images

    const container = document.createElement("li")
    const tumb = document.createElement("img")
    const h3 = document.createElement("h3")
    const ul = document.createElement("ul")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const button = document.createElement("button")

    tumb.src = imagesArr[0].imageUrl
    tumb.alt = imagesArr[0].imageText
    imagesArr.forEach((image) => {
      const img = cardImg(image)
      ul.appendChild(img)

      img.addEventListener('click', () => {
        tumb.src = image.imageUrl
        tumb.alt = image.imageText
      })
    })
    h3.innerText = product.productName
    p1.innerText = parseFloat(product.items[0].sellers[0].commertialOffer.PriceWithoutDiscount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p2.innerText = parseFloat(product.items[0].sellers[0].commertialOffer.FullSellingPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    button.innerText = 'COMPRAR'

    container.classList.add('products_item')
    tumb.classList.add('product_img')
    h3.classList.add('product_name')
    ul.classList.add('alter_list')
    p1.classList.add('original_price')
    p2.classList.add('product_price')
    button.classList.add('buy_button')

    p1.innerText === p2.innerText ? p1.classList.add('hide_original_price') : p1.classList.remove('hide_original_price')

    container.append(tumb, h3, ul, p1, p2, button)

    return container
}

const cardImg = (image) => {
    const li = document.createElement('li')
    const img = document.createElement('img')

    img.src = image.imageUrl
    img.alt = image.imageText

    li.classList.add("alter_img_container")
    img.classList.add("alter_img")

    li.appendChild(img)

    return li
}

