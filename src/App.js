import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import wsielogo from './wsielogo.png';
import { Toolbar, Container, Grid, Paper } from '@material-ui/core';
import EmployeeList from './components/employees/employee-list';
import EmployeeDetail from './components/employees/employee-detail';

import './App.css';

import Amplify from '@aws-amplify/core';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  const [employee, setEmployee] = useState({});

    function viewEmployee(selectedEmployee) {
        setEmployee(selectedEmployee);
    }

  return (
    <React.Fragment>
    <AppBar position="fixed">
      <Toolbar>
      <img src={wsielogo} className="App-logo" alt="logo" />
      <h1>What Should I eat</h1>
      </Toolbar>
    <main>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={5}>
                            <Paper>
                            <EmployeeList onViewEmployee={viewEmployee} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={7}>
                            <Paper>
                            {employee.id && (
                                    <EmployeeDetail employeeId={employee.id} />
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
      </AppBar>
  </React.Fragment>
  );
}

export default App;
