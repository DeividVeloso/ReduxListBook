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
        console.log(this.props.asdf) //--> vai retornar 123
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
        asdf : '123'
    }
}

