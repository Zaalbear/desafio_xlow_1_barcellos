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