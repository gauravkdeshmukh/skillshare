import React, { useEffect } from 'react';
import { useFormState } from 'react-use-form-state';
import { Grid, TextField } from '@material-ui/core';

export default function AddressInput({ address = {}, onChange }) {
    // eslint-disable-next-line no-unused-vars
    const [formState, { text }] = useFormState(null, {
        // Watch form changes and propagate with onChange.
        onChange: (e, stateValues, nextStateValues) => {
            onChange(address.name, nextStateValues);
        }
    });

    // Apply existingn values to form
    useEffect(() => {
        Object.keys(address.values).forEach(key => {
            formState.setField(key, address.values[key]);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Grid container spacing={3} className="margin-bottom-2">
            <Grid item xs={12}>
                <TextField
                    required
                    {...text('line1')}
                    label="Address line 1"
                    fullWidth
                    autoComplete="billing address-line1"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    {...text('line2')}
                    label="Address line 2"
                    fullWidth
                    autoComplete="billing address-line2"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    {...text('city')}
                    label="City"
                    fullWidth
                    autoComplete="billing address-level2"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    {...text('state')}
                    label="State/Province/Region"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    {...text('zipcode')}
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="billing postal-code"
                />
            </Grid>
        </Grid>
    );
}
