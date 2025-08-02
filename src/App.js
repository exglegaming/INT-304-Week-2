import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem('employees');
        if (savedData) {
            setEmployees(JSON.parse(savedData));
        }
    }, []);

    const addEmployee = (newEmployee) => {
        const employeeWithId = {
            ...newEmployee,
            EmployeeId: Date.now()
        };

        const updatedEmployees = [...employees, employeeWithId];
        setEmployees(updatedEmployees);
        saveData(updatedEmployees)
    }

    const saveData = (employeeList) => {
        localStorage.setItem('employees', JSON.stringify(employeeList));
    }

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={
                        <>
                            <h1>Employee Form</h1>
                            <EmployeeForm onAddEmployee={addEmployee} />
                            <EmployeeList employees={employees} />
                        </>
                    } />
                    <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
