import React from 'react';
import { Button } from '@material-ui/core';

const styles = {
    address: {
        marginBottom: '1rem'
    },

    addressLine: {
        margin: 0
    }
};

export default function EmployeeAddresses({ address, onDelete }) {
    return (
        <div style={styles.address}>
            <p style={styles.addressLine}>
                {address.line1} {address.line2}
            </p>
            <p style={styles.addressLine}>
                <span>
                    {address.city}, {address.state} {address.zipcode}
                </span>
                <Button
                    style={{ marginLeft: '2rem' }}
                    size="small"
                    onClick={() => onDelete(address)}
                >
                    delete
                </Button>
            </p>
        </div>
    );
}
