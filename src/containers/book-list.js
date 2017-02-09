import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    onClick={() => this.props.selectBook(book)} 
                    key={book.title} 
                    className="list-group-item">{book.title}
                    </li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//Essa é a ligação entre redux e o react
//Essa função serve para transformar nosso state em argumento
function mapStateToProps(state) {
//Qualquer coisa que for retornada vai se apresentar como uma prop
//dentro do componente BookList
    return {
        //Qualquer coisa que retornar aqui vai ser uma prop aqui dentro dessa classe this.props.books
        books: state.books //Vem do reducer.
    }
}

//Qualquer coisa que retornar dessa função vai se tornar uma prop do nosso BookList container
function mapDispatchToProps(dispatch){
    //Esse segundo selectBook é minha Action Creator que importei
    //Sempre que seleckBook for chamado o resuldado tem que ser passado para todos os
    //nossos reducers
    //dispatch que filtra e passa para os reducers
    return bindActionCreators({selectBook: selectBook }, dispatch)
}

//Promove BookList componente para um container 
//Ele precisa saber sobre o novo dispath method, seleckBook.
//E tornar ele valido para ser uma Prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
