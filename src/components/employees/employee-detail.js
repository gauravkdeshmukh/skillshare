import React, { useEffect, useState } from 'react';
import { Fab, makeStyles, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import AddEmployeeModal from '../modals/employee-modal';
import LoadingIndicator from '../loading-indicator';
import EmployeeSkills from './employee-skills';
import EmployeeAddresses from './employee-addresses';
import Api from '../../services/api.service';

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0)
    },
    total: {
        fontWeight: '700'
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: '1rem'
    },
    fab: {
        position: 'absolute',
        right: '10px'
    }
}));

export default function EmployeeDetail({ employeeId }) {
    const classes = useStyles();

    const [employee, setEmployee] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Load existing employees.
    useEffect(() => {
        try {
            setIsLoading(true);
            fetchEmployee();
        } catch (error) {
            console.log('error fetching one employee', employeeId, error);
        }
    }, [employeeId]); // eslint-disable-line react-hooks/exhaustive-deps

    async function fetchEmployee() {
        const employee = await Api.getOneEmployee(employeeId);
        ;
        setEmployee(employee);
        setIsLoading(false);
    }

    async function deleteSkill(name) {
        const updatedEmployee = await Api.deleteSkill(employee, name);
        setEmployee(updatedEmployee);
    }

    async function deleteAddress(address) {
        ;
        const updatedEmployee = await Api.deleteAddress(address);
        setEmployee(updatedEmployee);
    }

    function handleOpen() {
        setModalIsOpen(true);
    }

    function closeModal(reloadList = false) {
        setModalIsOpen(false);

        if (reloadList === true) {
            fetchEmployee();
        }
    }

    function persistEditedEmployee(data) {
        return Api.updateEmployee({ ...employee, ...data });
    }

    return (
        <React.Fragment>
            {/* LOADING INDICATOR */}
            {isLoading && <LoadingIndicator />}

            {/* USER DATA */}
            {!isLoading && (
                <div>
                    <Fab
                        color="secondary"
                        aria-label="Edit"
                        className={classes.fab}
                        onClick={handleOpen}
                    >
                        <EditIcon />
                    </Fab>

                    <AddEmployeeModal
                        isOpen={modalIsOpen}
                        employee={employee}
                        onCloseModal={closeModal}
                        persistData={persistEditedEmployee}
                    />

                    <Typography variant="h4" className="margin-bottom-2">
                        {employee.firstname} {employee.lastname}
                    </Typography>

                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Address List
                    </Typography>

                    {employee.addresses.map((address, i) => {
                        return (
                            <EmployeeAddresses
                                key={i}
                                address={address}
                                className="margin-bottom-2"
                                onDelete={deleteAddress}
                            />
                        );
                    })}

                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Skills List
                    </Typography>

                    <EmployeeSkills
                        skills={employee.skills}
                        onClickedDelete={deleteSkill}
                        className="margin-bottom-2"
                    />
                </div>
            )}
        </React.Fragment>
    );
}
