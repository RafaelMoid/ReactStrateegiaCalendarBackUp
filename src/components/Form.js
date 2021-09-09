import React from "react";
import { Formik, Form as FormikForm, Field } from 'formik';
import PropTypes from 'react';

import './Form.css'

const Form = ({initialValues,handleSubmit}) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <div className="body" style={{backgroundColor: "lightblue"}}>
            <div className="Wrapper" >
             <FormikForm className="Form">
                <h1 className="Form-Welcome">Seja bem vindo</h1>
                <h3 className="Form-Info">Digite seu usuario e senha para se conectar</h3>
                <div className="Form-Group">
                    <Field className="Form-Field" name="user" placeholder="User" type="text" required/>
                </div>
                <div className="Form-Group">
                    <Field className="Form-Field" name="password" placeholder="password" type="password" required/>
                </div>
                <button className="Button-Login" type="submit">Entrar</button>
                <p></p>               
               </FormikForm>
            </div>
        </div>
    </Formik>
    )
    
    


export default Form