/* eslint-disable @typescript-eslint/no-unused-vars */
export const limitarDescricao = (descricao?: string, limite = 200) => {
  if (!descricao) {
    return '' // Retorna uma string vazia se não houver descrição
  }

  if (descricao.length <= limite) {
    return descricao // Retorna a descrição inteira se for menor ou igual ao limite
  } else {
    return descricao.slice(0, limite) + '...' // Se for maior que o limite, corta a descrição e adiciona '...'
  }
}
