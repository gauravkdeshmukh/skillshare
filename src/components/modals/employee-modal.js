import React, { useState } from 'react';
import { Dialog, DialogContent, Snackbar } from '@material-ui/core';
import AllDetailsForm from '../forms/full-employee-form';

export default function AddEmployeeModal({
    employee = {},
    isOpen,
    onCloseModal,
    persistData
}) {
    const [error, setError] = useState('');

    async function formSubmitted(formData) {
        try {
            ;
            console.log(formData);
            await persistData(formData);
            closeModal(true);
        } catch (err) {
            console.log('ERROR CREATING NEW EMPOYEE', err);;
            setError(err.message);
        }
    }

    function closeModal(reloadList = false) {
        setError('');
        onCloseModal(reloadList);
    }

    return (
        <Dialog
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="form-dialog-title"
        >
            <Snackbar
                open={!!error}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message={<span id="message-id">{error}</span>}
                className="snackbar-error"
            />

            <DialogContent className="padding-2">
                <AllDetailsForm
                    employee={employee}
                    onFormSubmit={formSubmitted}
                    onCancel={closeModal}
                />
            </DialogContent>
        </Dialog>
    );
}
