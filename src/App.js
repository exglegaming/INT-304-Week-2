import './App.css';
import EmployeeForm from './components/EmployeeForm';
import {useEffect, useState} from "react";

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem('employees');
        if (savedData) {
            setEmployees(JSON.parse(savedData));
        }
    }, []);

    const addEmployee = (newEmployee) => {
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);
        saveData(updatedEmployees)
    }

    const saveData = (employeeList) => {
        localStorage.setItem('employees', JSON.stringify(employeeList));
    }

    return (
        <div className="App">
          <h1>Employee Form</h1>
          <EmployeeForm onAddEmployee={addEmployee} />
        </div>
    );
}

export default App;
