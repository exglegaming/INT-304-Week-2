import React from "react";
import './EmployeeForm';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {name: '', email: '', title: '', department: ''};
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Employee:', this.state);

        this.setState({
            name: '',
            email: '',
            title: '',
            department: ''
        });
    };

    render() {
        const { name, email, title, department } = this.state;
        return (
            <form className="employee-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={this.handleChange}
                />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                />
                </div>

                <div className="form-group">
                <label htmlFor="title">Job Title:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={this.handleChange}
                />
                </div>

                <div className="form-group">
                <label htmlFor="department">Department:</label>
                <input
                    id="department"
                    name="department"
                    type="text"
                    value={department}
                    onChange={this.handleChange}
                />
                </div>

                <button type="submit">Submit</button>
            </form>
        );
    
    }
}

export default EmployeeForm;