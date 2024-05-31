
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


export default function Prediction() {
    const [returnProb, setReturnProb] = useState(null);

    return (
        <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
            <Formik
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
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="account_balance" id="account_balance" style={{ marginBottom: "10px" }} htmlFor="account_balance">
                                    <FormLabel>Account Balance</FormLabel>
                                    <Select name="account_balance" id="account_balance" onChange={props.handleChange} placeholder='Select the account balance' defaultValue={1}>
                                        <option value={1}>No account</option>
                                        <option value={2}>None (No balance)</option>
                                        <option value={3}>Some Balance</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="duration_of_credit" id="duration_of_credit" style={{ marginBottom: "10px" }} htmlFor="duration_of_credit">
                                    <FormLabel>Duration of Credit </FormLabel>
                                    <Input type='number' defaultValue={1} />
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="payment_status" id="payment_status" style={{ marginBottom: "10px" }} htmlFor="payment_status">
                                    <FormLabel>Payment Status</FormLabel>
                                    <Select name="payment_status" id="payment_status" onChange={props.handleChange} placeholder='Select the payment status' defaultValue={1}>
                                        <option value={1}>Some Problems</option>
                                        <option value={2}>Paid Up</option>
                                        <option value={3}>No Problems (in this bank)</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="purpose" id="purpose" style={{ marginBottom: "10px" }} htmlFor="purpose">
                                    <FormLabel>Purpose of Credit</FormLabel>
                                    <Select name="purpose" id="purpose" onChange={props.handleChange} placeholder='Select the purpose of credit' defaultValue={1}>
                                        <option value={1}>New car</option>
                                        <option value={2}>Used car</option>
                                        <option value={3}>Home Related</option>
                                        <option value={4}>Other</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="credit_amount" id="credit_amount" style={{ marginBottom: "10px" }} htmlFor="credit_amount">
                                    <FormLabel>Credit Amount</FormLabel>
                                    <Input type='number' defaultValue={1} />
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="value_savings_stocks" id="value_savings_stocks" style={{ marginBottom: "10px" }} htmlFor="value_savings_stocks">
                                    <FormLabel>Savings/Stock Value</FormLabel>
                                    <Select name="value_savings_stocks" id="value_savings_stocks" onChange={props.handleChange} placeholder='Select the savings/stock value' defaultValue={1}>
                                        <option value={1}>None</option>
                                        <option value={2}>Below 100 DM</option>
                                        <option value={3}>[100, 1000] DM</option>
                                        <option value={4}>Above 1000 DM</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="length_current_employment" id="length_current_employment" style={{ marginBottom: "10px" }} htmlFor="length_current_employment">
                                    <FormLabel>Employment Length</FormLabel>
                                    <Select name="length_current_employment" id="length_current_employment" onChange={props.handleChange} placeholder='Select the employment length' defaultValue={1}>
                                        <option value={1}>Below 1 year (including unemployed)</option>
                                        <option value={2}>[1, 4)</option>
                                        <option value={3}>[4, 7)</option>
                                        <option value={4}>Above 7</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="installments_percent" id="installments_percent" style={{ marginBottom: "10px" }} htmlFor="installments_percent">
                                    <FormLabel>Installments %</FormLabel>
                                    <Select name="installments_percent" id="installments_percent" onChange={props.handleChange} placeholder='Select the installments percentage' defaultValue={1}>
                                        <option value={1}>Above 35%</option>
                                        <option value={2}>[25%,35%)</option>
                                        <option value={3}>[20%,25%)</option>
                                        <option value={4}>Below 20%</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="sex_marital_status" id="sex_marital_status" style={{ marginBottom: "10px" }} htmlFor="sex_marital_status">
                                    <FormLabel>Sex/Marital Status</FormLabel>
                                    <Select name="sex_marital_status" id="sex_marital_status" onChange={props.handleChange} placeholder='Select the sex/marital status' defaultValue={1}>
                                        <option value={1}>Male Divorced/Single</option>
                                        <option value={2}>Male Married/Widowed</option>
                                        <option value={3}>Female</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="guarantor" id="guarantor" style={{ marginBottom: "10px" }} htmlFor="guarantor">
                                    <FormLabel>Guarantor</FormLabel>
                                    <Select name="guarantor" id="guarantor" onChange={props.handleChange} placeholder='Select the guarantor status' defaultValue={1}>
                                        <option value={1}>None</option>
                                        <option value={2}>Yes</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="duration_in_current_address" id="duration_in_current_address" style={{ marginBottom: "10px" }} htmlFor="duration_in_current_address">
                                    <FormLabel>Duration in current address</FormLabel>
                                    <Input type='number' defaultValue={1} />
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="most_valuable_asset" id="most_valuable_asset" style={{ marginBottom: "10px" }} htmlFor="most_valuable_asset">
                                    <FormLabel>Most valuable asset</FormLabel>
                                    <Input type='number' defaultValue={1} />
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="age_years" id="age_years" style={{ marginBottom: "10px" }} htmlFor="age_years">
                                    <FormLabel>Age (years)</FormLabel>
                                    <Input type='number' defaultValue={1} />
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="concurrent_credits" id="concurrent_credits" style={{ marginBottom: "10px" }} htmlFor="concurrent_credits">
                                    <FormLabel>Concurrent Credits</FormLabel>
                                    <Select name="concurrent_credits" id="concurrent_credits" onChange={props.handleChange} placeholder='Select the concurrent credits' defaultValue={1}>
                                        <option value={1}>Other Banks or Dept Stores</option>
                                        <option value={2}>None</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="type_of_apartment" id="type_of_apartment" style={{ marginBottom: "10px" }} htmlFor="type_of_apartment">
                                    <FormLabel>Type of department</FormLabel>
                                    <Input type='number' defaultValue={1} />
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="num_credits" id="num_credits" style={{ marginBottom: "10px" }} htmlFor="num_credits">
                                    <FormLabel>No of Credits at this bank</FormLabel>
                                    <Select name="num_credits" id="num_credits" onChange={props.handleChange} placeholder='Select the number of credits' defaultValue={1}>
                                        <option value={1}>1</option>
                                        <option value={2}>More than 1</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="occupation" id="occupation" style={{ marginBottom: "10px" }} htmlFor="occupation">
                                    <FormLabel>Occupation</FormLabel>
                                    <Select name="occupation" id="occupation" onChange={props.handleChange} placeholder='Select the occupation' defaultValue={1}>
                                        <option value={1}>Unemployed/unskilled</option>
                                        <option value={2}>Skilled</option>
                                        <option value={3}>Executive</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="no_of_dependents" id="no_of_dependents" style={{ marginBottom: "10px" }} htmlFor="no_of_dependents">
                                    <FormLabel>No of dependents</FormLabel>
                                    <Input type='number' defaultValue={1} />
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="telephone" id="telephone" style={{ marginBottom: "10px" }} htmlFor="telephone">
                                    <FormLabel>Telephone</FormLabel>
                                    <Input type='number' defaultValue={1} />
                                </FormControl>
                            )}
                        </Field>

                        <Field>
                            {({ field, form }) => (
                                <FormControl name="foreign_worker" id="foreign_worker" style={{ marginBottom: "10px" }} htmlFor="foreign_worker">
                                    <FormLabel>Foreign Worker</FormLabel>
                                    <Select name="foreign_worker" id="foreign_worker" onChange={props.handleChange} placeholder='Select the foreign worker status' defaultValue={1}>
                                        <option value={1}>Yes</option>
                                        <option value={2}>No</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>

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