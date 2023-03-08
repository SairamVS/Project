import axios from "axios";
import React,{Component} from "react";
import './Table.css';

class Table extends Component{
    state = {
        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/books')
        .then(response =>{
            this.setState({
                data:response.data
                
            });
            console.log(response)
        })
        .catch(error =>{
            console.log(error);
        });
    }

    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>S_No</th>
                        <th>Book_Id</th>
                        <th>Book_Name</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Language</th>
                        <th>Price</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user => (
                        <tr key={user.bk_Id}>
                            <td>{user.s_no}</td>
                            <td>{user.bk_Id}</td>
                            <td>{user.bk_name}</td>
                            <td>{user.author}</td>
                            <td>{user.genre}</td>
                            <td>{user.language}</td>
                            <td>{user.price}</td>
                            <td>{user.publisher}</td>                        
                            </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;