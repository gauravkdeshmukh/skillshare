import React, { useEffect } from 'react';
import { useFormState } from 'react-use-form-state';
import { Grid, TextField } from '@material-ui/core';

export default function EmployeeInput({ employee = {}, onChange }) {
    const [formState, { text }] = useFormState(null, {
        // Watch form changes and propagate with onChange.
        onChange: (e, stateValues, nextStateValues) => {
            onChange(nextStateValues);
        }
    });

    // Apply existingn values to form
    useEffect(() => {
        formState.setField('firstname', employee.firstname);
        formState.setField('lastname', employee.lastname);
    }, []); // esslint-disable-line react-hooks/exhaustive-deps

    return (
        <Grid container spacing={3} className="margin-bottom-2">
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    {...text('firstname')}
                    label="First name"
                    fullWidth
                    autoComplete="fname"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    {...text('lastname')}
                    label="Last name"
                    fullWidth
                    autoComplete="lname"
                />
            </Grid>
        </Grid>
    );
}
