import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

export default function LoadingIndicator() {
    return (
        <Box m={2} style={{ textAlign: 'center' }}>
            <CircularProgress color="inherit" />
        </Box>
    );
}
