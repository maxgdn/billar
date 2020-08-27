import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {Modal, RegistrationForm} from '../components';

const FirstUse: React.FC = () => {
    const [open, setOpen] = useState(true);

    return (
        <Modal open={open} closeable={true}>
            <RegistrationForm/>
        </Modal>
    );
}

export default FirstUse;