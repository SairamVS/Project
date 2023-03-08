import React,{Component} from "react";
import axios from "axios";
import "./Create.css";

class Create extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        s_no:"",
        bk_Id:'',
        bk_name:'',
        author:'',
        genre:'',
        language:'',
        price:'',
        publisher:''
    };
    }

    handles_no = (event) =>{
        this.setState({ s_no : event.target.value});
    };
    handlebk_IdChange = (event) =>{
        this.setState({ bk_Id : event.target.value});
    };
    handlebk_name = (event) =>{
        this.setState({ bk_name : event.target.value});
    };
    handleauthor = (event) =>{
        this.setState({ author : event.target.value});
    };
    handlegenre = (event) =>{
        this.setState({ genre : event.target.value});
    };
    handlelanguage = (event) =>{
        this.setState({ language : event.target.value});
    };
    handleprice = (event) =>{
        this.setState({ price : event.target.value});
    };
    handlepublisher = (event) =>{
        this.setState({ publisher : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            s_no: this.state.s_no,
            bk_Id: this.state.bk_Id,
            bk_name: this.state.bk_name,
            author: this.state.author,
            genre: this.state.genre,
            language: this.state.language,
            price: this.state.price,
            publisher: this.state.publisher,
        };
        console.log(data);
        axios.post('http://localhost:8080/Add',data)
    };

    render()
    {
        return(
            <form onSubmit={this.handleSubmit} className="Lib" >
               <label className="login-label">S_No</label>

               <input
               className="Lib"
               type="number"
               value={this.state.s_no}
               onChange={this.handles_no}
               />

               <br></br><br></br>

               <label className="login-label">Book_Id</label>
               <input
               className="Lib"
               type="number"
               value={this.state.bk_Id}
               onChange={this.handlebk_IdChange}
               />
                
                <br></br><br></br>

               <label className="login-label">Book_Name</label>
               <input
               className="Lib"
               type="text"
               value={this.state.bk_name}
               onChange={this.handlebk_name}
               />

                <br></br><br></br>

               <label className="login-label">Author</label>
               <input
               className="Lib"
               type="text"
               value={this.state.author}
               onChange={this.handleauthor}
               />

                <br></br><br></br>

               <label className="login-label">Genre</label>
               <input
               className="Lib"
               type="text"
               value={this.state.genre}
               onChange={this.handlegenre}
               />

                <br></br><br></br>

               <label className="login-label">Language</label>
               <input
               className="Lib"
               type="text"
               value={this.state.language}
               onChange={this.handlelanguage}
               />

                <br></br><br></br>

               <label className="login-label">Price</label>
               <input
               className="Lib"
               type="number"
               value={this.state.price}
               onChange={this.handleprice}
               />

                <br></br><br></br>

               <label className="login-label">Publisher</label>
               <input
               className="Lib"
               type="text"
               value={this.state.publisher}
               onChange={this.handlepublisher}
               />

                <br></br><br></br>

               <button className="submitt" type="submit" id="asd">
                ADD
               </button>
               <br></br><br></br>
               </form>
               );
               
    }
}
export default Create;