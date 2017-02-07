import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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
export default connect(mapStateToProps)(BookList);
