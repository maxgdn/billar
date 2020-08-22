import styled from 'styled-components';
import React from 'react';
import {DateTime} from 'luxon';

const DateHeader = styled.h1`
    color: blue;
`;

const DateView: React.FC = () => {
    let now = DateTime.local().toLocaleString(DateTime.DATETIME_MED);
    return (
        <DateHeader>{now}</DateHeader>
    )
}

export default DateView;