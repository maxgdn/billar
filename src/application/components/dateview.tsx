import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import {DateTime} from 'luxon';

import colors from '../colors';

const DateHeader = styled.span`
    color: ${colors.white};
    font-size: 1.2rem;
    margin: 0 auto;
`;

const DateView: React.FC = () => {
    const [now,setNow] = useState<string | null>("");

    useEffect(() => {
        const interval = setInterval(() => {
            let d = DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
            setNow(d);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <DateHeader>{now}</DateHeader>
    )
}

export default DateView;