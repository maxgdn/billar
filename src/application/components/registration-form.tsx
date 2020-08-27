import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';


const FormUl = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const FormLi = styled.li`
    display: flex;
    justify-content: flex-end;
    padding: .5em;

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    & > label {
        text-transform: uppercase;
        letter-spacing: .09em;
        padding: .5em 1em .5em 0;
        flex: 1;
    }

    & > input {
        flex: 2;
    }
    
`;

const SubmitButton = styled.button`
    
`;

interface RegistrationFormProps {
    submitSuccess: any;
}

const RegistrationForm: React.FC = () => {

    const formik = useFormik({
        initialValues: {
          name: '',
          address: '',
          city: '',
          code: '',
          phone: '',
          email: '',
          contractorIcon: '',
          notifications: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormUl>
                <FormLi>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </FormLi>
                <FormLi>
                    <label htmlFor="address">Address:</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                    />
                </FormLi>
                <FormLi>
                    <label htmlFor="city">City:</label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                    />
                </FormLi>
                <FormLi>
                    <label htmlFor="code">PIN, ZIP Code, Postal Code OR Postcode:</label>
                    <input
                        id="code"
                        name="code"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.code}
                    />
                </FormLi>
                <FormLi>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                </FormLi>
                <FormLi>
                    <label htmlFor="email">Email Address:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </FormLi>
                <FormLi>
                    <label htmlFor="icon">Icon/Logo:</label>
                    <input
                        id="icon"
                        name="icon"
                        type="file"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </FormLi>
                <FormLi>
                    <label htmlFor="notifications">Notifications:</label>
                    <input
                        id="notifications" 
                        name="notifications"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </FormLi>
                <FormLi>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </FormLi>
            </FormUl>
        </form>
    );
}

export default RegistrationForm;