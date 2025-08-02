import React from 'react';
import {Link, useParams} from 'react-router-dom';
import '../EmployeeForm.css';

function EmployeeDetail({ employees }) {
    const { id } = useParams();

    // This is to find the employee with the matching ID
    const employee = employees.find(emp => emp.EmployeeId.toString() === id);

    if (!employee) {
        return (
            <div className="employee-detail">
                <h1>Employee not found</h1>
                <p>No employee found with ID: {id}</p>
            </div>
        );
    }

    return (
        <div className="employee-detail">
            <h1>Employee Details</h1>
            <table>
                <tbody>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td><label>Name</label></td>
                    <td>{employee.name}</td>
                </tr>
                <tr>
                    <td><label>Email</label></td>
                    <td>{employee.email}</td>
                </tr>
                <tr>
                    <td><label>Title</label></td>
                    <td>{employee.title}</td>
                </tr>
                <tr>
                    <td><label>Department</label></td>
                    <td>{employee.department}</td>
                </tr>
                <tr>
                    <td><label>Employee ID</label></td>
                    <td>{employee.EmployeeId}</td>
                </tr>
                </tbody>
            </table>
            <Link to="/" className="back-button">
                ← Back to Home
            </Link>
        </div>
    );
}

export default EmployeeDetail;