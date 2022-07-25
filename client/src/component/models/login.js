import React, {useContext, useRef} from 'react';
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../config";
import {Form, Modal} from "react-bootstrap";
import {Context} from "../../context/Context";

const Login = observer(({show, onHide}) => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [mailDirty, setMailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [mailErr, setMailErr] = useState('Wrong mail')
    const [passwordErr, setPasswordErr] = useState('The field must not be empty')

    const [formValid, setFormValid] = useState(false)

    const mailHandler = (e) => {
        setMail(e.target.value)
        const emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        if(!emailCheck.test(String(e.target.value).toLowerCase())){
            setMailErr("Wrong mail")
        }else {
            setMailErr('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(!e.target.value){
            setPasswordErr("The field must not be empty")
        }
        else {
            setPasswordErr('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'mail':
                setMailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    useEffect(() =>{
        if(mailErr || passwordErr){
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [mailErr, passwordErr])

    const {dispatch} = useContext(Context)

    const mailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try{
            const res = await axios.post(`${API_URL}/auth/login`, {
                mail: mailRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            res.data && window.location.replace("/")
        }catch (err){
            dispatch({type: "LOGIN_FAILURE", payload: err.response.data })
        }
    }

    return (
        <Modal show={show} onHide={onHide} animation={false} centered style={{fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif", backgroundColor: "rgb(0, 0, 0, 0.4)"}}>
            <Modal.Header closeButton style={{background: "linear-gradient(-45deg, #e8e7bd, #baccff, #b7c5fc, #e8e7bd)"}}>
                <Modal.Title>Війти до кабінету</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <div>
                        {(mailDirty && mailErr) &&
                            <div className="bg-danger text-white bg-primary border-2 DivErr">
                                {mailErr}
                            </div>}
                        <Form.Control
                            onChange={e => mailHandler(e)}
                            value={mail}
                            name="mail"
                            onBlur={e => blurHandler(e)}
                            ref={mailRef}

                            placeholder="Пошта"
                        />
                    </div>
                    <div className="mt-3">
                        {(passwordErr && passwordDirty) &&
                            <div className="align-items-center bg-danger text-white bg-primary border-0 DivErr">
                                {passwordErr}
                            </div>}
                        <Form.Control
                            onChange={e => passwordHandler(e)}
                            value={password}
                            name="password"
                            onBlur={e => blurHandler(e)}
                            ref={passwordRef}

                            type="password"
                            placeholder="Пароль"
                        />
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button disabled={!formValid} onClick={handleSubmit} className="btn btn-secondary btn-lg" type="submit" variant={"outline-dark"} style={{width: "100%", height: 34, fontSize: 14}}>
                    ВІЙТИ
                </button>
            </Modal.Footer>
        </Modal>
    );
});

export default Login;