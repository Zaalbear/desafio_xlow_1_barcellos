const baseUrl = 'https://desafio.xlow.com.br/search'

export const request = async () => {
  const products = await fetch(baseUrl, {
    method: 'GET'
  })
  .then(async (res) => {
    if (res.ok){
        return console.log(await res.json());
    } else {
        throw new Error('Erro na requisição')
    }
  })
  .catch((err) => {
    console.error(err);
  })
}