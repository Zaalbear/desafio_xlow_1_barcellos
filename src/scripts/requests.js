const baseUrl = 'https://desafio.xlow.com.br/search'

export const getAllProducts = async () => {
  const productsList = await fetch(baseUrl, {
    method: 'GET'
  })
    .then(async (res) => {
      if (res.ok) {
        return await res.json();
      } else {
        throw new Error('Erro na requisição')
      }
    })
    .catch((err) => {
      console.error(err);
    })

  return productsList
}

export const getProduct = async (productId) => {
  const product = await fetch(`${baseUrl}/${productId}`, {
    method: 'GET'
  })
  .then(async (res) => {
    return await res.json()
  })

  return product[0]
}