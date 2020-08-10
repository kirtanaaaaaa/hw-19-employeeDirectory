import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeCard from './components/EmployeeCard/EmployeeCard/EmployeeCard';
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/Title';
import employees from "./employees.json"


function App() {
  return (
    <Wrapper>
      <Title> Employee Directory </Title>
      <EmployeeCard 
         name={employees[0].name}
         email={employees[0].email}
         role={employees[0].role}
         department={employees[0].department}> 
      </EmployeeCard>
      <EmployeeCard 
         name={employees[1].name}
         email={employees[1].email}
         role={employees[1].role}
         department={employees[1].department}> 
      </EmployeeCard>
      <EmployeeCard 
         name={employees[2].name}
         email={employees[2].email}
         role={employees[2].role}
         department={employees[2].department}> 
      </EmployeeCard>
      <EmployeeCard 
         name={employees[3].name}
         email={employees[3].email}
         role={employees[3].role}
         department={employees[3].department}> 
      </EmployeeCard>
      <EmployeeCard 
         name={employees[4].name}
         email={employees[4].email}
         role={employees[4].role}
         department={employees[4].department}> 
      </EmployeeCard>
      <EmployeeCard 
         name={employees[5].name}
         email={employees[5].email}
         role={employees[5].role}
         department={employees[5].department}> 
      </EmployeeCard>
      <EmployeeCard 
         name={employees[6].name}
         email={employees[6].email}
         role={employees[6].role}
         department={employees[6].department}> 
      </EmployeeCard>
      <EmployeeCard 
         name={employees[7].name}
         email={employees[7].email}
         role={employees[7].role}
         department={employees[7].department}> 
      </EmployeeCard>
     
    </Wrapper>
   
  );
}

export default App;
