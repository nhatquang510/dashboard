
import React, { useEffect, useState } from 'react';

// Chakra imports
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text,
    Select,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, Form, Field } from 'formik';

const initialValues = {
    account_balance: 1,
    duration_of_credit: 18,
    payment_status_previous_credit: 3,
    purpose: 2,
    credit_amount: 1049,
    value_savings_stocks: 1,
    length_current_employment: 1,
    instalment_percent: 4,
    sex_marital_status: 1,
    most_valuable_asset: 2,
    age_years: 21,
    concurrent_credits: 2,
    type_of_apartment: 1,
    no_of_credits_at_bank: 1,
    occupation: 2,
    telephone: 1
};

const formFields = [
    { name: 'account_balance', label: 'Account Balance', type: 'number' },
    { name: 'duration_of_credit', label: 'Duration of Credit', type: 'number' },
    { name: 'payment_status_previous_credit', label: 'Payment Status of Previous Credit', type: 'number' },
    { name: 'purpose', label: 'Purpose', type: 'number' },
    { name: 'credit_amount', label: 'Credit Amount', type: 'number' },
    { name: 'value_savings_stocks', label: 'Value of Savings/Stocks', type: 'number' },
    { name: 'length_current_employment', label: 'Length of Current Employment', type: 'number' },
    { name: 'instalment_percent', label: 'Instalment Percent', type: 'number' },
    { name: 'sex_marital_status', label: 'Sex/Marital Status', type: 'number' },
    { name: 'most_valuable_asset', label: 'Most Valuable Asset', type: 'number' },
    { name: 'age_years', label: 'Age (Years)', type: 'number' },
    { name: 'concurrent_credits', label: 'Concurrent Credits', type: 'number' },
    { name: 'type_of_apartment', label: 'Type of Apartment', type: 'number' },
    { name: 'no_of_credits_at_bank', label: 'Number of Credits at Bank', type: 'number' },
    { name: 'occupation', label: 'Occupation', type: 'number' },
    { name: 'telephone', label: 'Telephone', type: 'number' }
];

export default function Prediction() {
    const [returnProb, setReturnProb] = useState(null);

    return (
        <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log(values);
                    setTimeout(() => {
                        actions.setSubmitting(false);
                        axios
                            .post("http://127.0.0.1:5000/", values)
                            .then((response) => {
                                console.log(response);
                                setReturnProb(response.data);                                
                            })
                            .catch((err) => console.error(err));
                    }, 400);
                }}
            >
                {(props) => (
                    <Form>
                        {formFields.map(field => (

                            <FormControl
                                name={field.name}
                                id={field.name}

                                onChange={props.handleChange}
                                style={{ marginBottom: "10px" }}
                                htmlFor={field.name}
                            >
                                <FormLabel>{field.label}</FormLabel>
                                <Input type={field.type} defaultValue={initialValues[field.name]} />
                            </FormControl>

                        ))}
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            {
                returnProb != null &&
                <Box>
                    <Text style={{ margin: "10px" }}>Creditability prediction: {returnProb}</Text>
                </Box>
            }
        </Box>
    );
}