//SelectBook é uma ActionCreator, que precisa retornar uma ação
//um objeto com um tipo de propriedade
export function selectBook(book){
  return {
  type: 'BOOK_SELECTED', //Sempre em caixa alta, essa é a descrição da ação
  payload: book // é o pedaço de dado que descreve a ação
  }
}
 
