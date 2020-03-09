import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PermIdentity from '@material-ui/icons/PermIdentity';

export default function EmployeeListRow({
    employee,
    onDeleteEmployee,
    onViewEmployee
}) {
    return (
        <TableRow key={employee.id}>
            <TableCell>{employee.firstname}</TableCell>
            <TableCell>{employee.lastname}</TableCell>
            <TableCell align="right">
                <IconButton
                    aria-label="Delete"
                    onClick={() => onDeleteEmployee(employee)}
                >
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    aria-label="Edit"
                    onClick={() => onViewEmployee(employee)}
                >
                    <PermIdentity />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
