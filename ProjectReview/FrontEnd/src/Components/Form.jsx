import React, { Component } from "react";
import axios from "axios";
import "./Create.css";
import "./Table.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            s_no:"",
            bk_Id: "",
            bk_name: "",
            author: "",
            genre: "",
            language: "",
            price: "",
            publisher:"",
            fuelData: [], // Array to store fuel data fetched from the server
        };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:8080/books").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }
    handles_noChange = (event) => {
        this.setState({ s_no: event.target.value });
    };
    handlebk_IdChange = (event) => {
        this.setState({ bk_Id: event.target.value });
    };
    handlebk_name = (event) => {
        this.setState({ bk_name: event.target.value });
    };
    handleauthor = (event) => {
        this.setState({ author: event.target.value });
    };
    handlegenre = (event) => {
        this.setState({ genre: event.target.value });
    };
    handlelanguage = (event) => {
        this.setState({ language: event.target.value });
    };
    handleprice = (event) => {
        this.setState({ price: event.target.value });
    };
    handlepublisher = (event) => {
        this.setState({ publisher: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            s_no:this.state.s_no,
            bk_Id: this.state.bk_Id,
            bk_name: this.state.bk_name,
            author: this.state.author,
            genre: this.state.genre,
            language: this.state.language,
            price: this.state.price,
            publisher:this.state.publisher,
        };
        console.log(data);
        axios.post("http://localhost:8080/Add", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
                s_no:"",
                bk_Id: "",
                bk_name: "",
                author: "",
                genre: "",
                language: "",
                price: "",
                publisher:"",
            });
        });
    };

    handleUpdate = (bk_Id, data) => {
        // Send PUT request to update fuel data with the given ID
        axios.put(`http://localhost:808/update/${bk_Id}`, data).then((response) => {
            // Update the state to reflect the updated fuel data
            const updatedFuelData = this.state.fuelData.map((Library) => {
                if (Library.bk_Id === response.data.bk_Id) {
                    return response.data;
                } else {
                    return Library;
                }
            });
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleDelete = (bk_Id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:8080/delete/${bk_Id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedFuelData = this.state.fuelData.filter(
                (Library) => Library.bk_Id !== bk_Id
            );
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            s_no: data.s_no,
            bk_Id: data.bk_Id,
            bk_name: data.bk_name,
            author: data.author,
            genre: data.genre,
            language: data.language,
            price: data.price,
            publisher:data.publisher,
            isEdit: true,
        });
        console.log(this.state.bk_Id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            s_no:this.state.s_no,
            bk_Id: this.state.bk_Id,
            bk_name: this.state.bk_name,
            author: this.state.author,
            genre: this.state.genre,
            language:this.state.language,
            price:this.state.price,
            publisher:this.state.publisher,
        };
        const bk_Id = this.state.bk_Id;
        axios
            .put(`http://localhost:8080/update/${bk_Id}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    s_no:"",
                    bk_Id: "",
                    bk_name: "",
                    author: "",
                    genre: "",
                    language:"",
                    price:"",
                    publisher:"",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                <label className="login-label">s_no</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.s_no}
                        onChange={this.handles_noChange}
                    />
                    <br /><br />
                    <label className="login-label">bk_Id</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.bk_Id}
                        onChange={this.handlebk_IdChange}
                    />
                    <br /><br />
                    <label className="login-label">bk_name</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.bk_name}
                        onChange={this.handlebk_name}
                    />
                    <br /><br />

                    <label className="login-label">author</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleauthor}
                    />
                    <br /><br />

                    <label className="login-label">genre</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.genre}
                        onChange={this.handlegenre}
                    />
                    <br /><br />

                    <label className="login-label">language</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.language}
                        onChange={this.handlelanguage}
                    />
                    <br /><br />

                    <label className="login-label">price</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.price}
                        onChange={this.handleprice}
                    />
                    <br /><br />
                    <label className="login-label">publisher</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.publisher}
                        onChange={this.handlepublisher}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                            <th>s_no</th>
                            <th>bk_Id</th>
                            <th>bk_name</th>
                            <th>author</th>
                            <th>genre</th>
                            <th>language</th>
                            <th>price</th>
                            <th>publisher</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.bk_Id}>
                                <td>{data.s_no}</td>
                                <td>{data.bk_Id}</td>
                                <td>{data.bk_name}</td>
                                <td>{data.author}</td>
                                <td>{data.genre}</td>
                                <td>{data.language}</td>
                                <td>{data.price}</td>
                                <td>{data.publisher}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.bk_Id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.bk_Id} />
                    <label>s_no</label>
                    <input
                        type="number"
                        name="s_no"
                        value={this.state.s_no}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>bk_Id</label>
                    <input
                        type="number"
                        name="bk_Id"
                        value={this.state.bk_Id}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>bk_name</label>
                    <input
                        type="text"
                        name="bk_name"
                        value={this.state.bk_name}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>author</label>
                    <input
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>genre</label>
                    <input
                        type="text"
                        name="genre"
                        value={this.state.genre}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>language</label>
                    <input
                        type="text"
                        name="language"
                        value={this.state.language}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>price</label>
                    <input
                        type="number"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>publisher</label>
                    <input
                        type="text"
                        name="publisher"
                        value={this.state.publisher}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Form;