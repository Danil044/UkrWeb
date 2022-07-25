import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Form, Modal} from "react-bootstrap";
import axios from "axios";
import {API_URL} from "../../config";
import "./RegisterAndLogin.css"

const Register = observer(({show, onHide}) => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [mailDirty, setMailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [mailErr, setMailErr] = useState('Wrong mail')
    const [passwordErr, setPasswordErr] = useState('The field must not be empty')

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [lastnameDirty, setLastnameDirty] = useState(false)
    const [nameErr, setNameErr] = useState('The field must not be empty')
    const [lastnameErr, setLastnameErr] = useState('The field must not be empty')


    const [role, setRole] = useState('')
    const [check, setCheck] = useState('')
    const [checkErr, setCheckErr] = useState('Error')
    const [checkDirty, setCheckDirty] = useState(false)

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

    const nameHandler = (e) => {
        setName(e.target.value)
        if(!e.target.value){
            setNameErr("The field must not be empty")
        }
        else {
            setNameErr('')
        }
    }

    const lastnameHandler = (e) => {
        setLastname(e.target.value)
        if(!e.target.value){
            setLastnameErr("The field must not be empty")
        }
        else {
            setLastnameErr('')
        }
    }


    const checkHandler = (e) => {
        setCheck(e.target.checked)
        if(!e.target.checked){
            setCheckErr("Error")
        }
        else {
            setCheckErr('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'check':
                setCheckDirty(true)
                break
            case 'mail':
                setMailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
            case 'lastname':
                setLastnameDirty(true)
                break
        }
    }

    useEffect(() =>{
        if(mailErr || passwordErr || lastnameErr || nameErr || checkErr){
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [mailErr, passwordErr, lastnameErr, nameErr, checkErr])

    const handelSubmit = async (e) =>{
        e.preventDefault()
        try {
            const res = await axios.post(`${API_URL}/auth/register`,{
                mail,
                password,
                name,
                lastname,
                role
            })
            res.data && window.location.replace("/")
            console.log(res);
        }catch (err){
            console.log(err)
        }
    }

    return (
        <Modal show={show} onHide={onHide} animation={false} centered style={{fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif", backgroundColor: "rgb(0, 0, 0, 0.4)"}}>
            <Modal.Header closeButton style={{background: "linear-gradient(-45deg, #e8e7bd, #baccff, #b7c5fc, #e8e7bd)"}}>
                <Modal.Title>Додати свій кабінет</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handelSubmit}>
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-outline">
                                    {(nameDirty && nameErr) &&
                                        <div className=" align-items-center bg-danger text-white bg-primary border-2 DivErr">
                                            {nameErr}
                                        </div>}
                                    <Form.Control
                                        value={name}
                                        onChange={e => nameHandler(e)}
                                        onBlur={e => blurHandler(e)}

                                        name="name"
                                        placeholder={"Им'я"}
                                        maxlength="25"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                {(lastnameDirty && lastnameErr) &&
                                    <div className=" align-items-center bg-danger text-white bg-primary border-2 DivErr">
                                        {lastnameErr}
                                    </div>}
                                <Form.Control
                                    value={lastname}
                                    onChange={e => lastnameHandler(e)}
                                    onBlur={e => blurHandler(e)}

                                    name="lastname"
                                    placeholder={"Призвище"}
                                    maxlength="25"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        {(mailDirty && mailErr) &&
                            <div className="bg-danger text-white bg-primary border-2 DivErr">
                                {mailErr}
                            </div>}
                        <Form.Control
                            onChange={e => mailHandler(e)}
                            value={mail}
                            name="mail"
                            title="This email, will be using to contact you"
                            onBlur={e => blurHandler(e)}

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


                            type="password"
                            placeholder="Пароль"
                        />
                    </div>
                    <div className="d-md-flex justify-content-start align-items-center mt-3 py-2" style={{marginLeft: 80}}>

                        <p className="mb-0 me-4 text-dark">Оберіть свою роль: </p>

                        <div className="form-check form-check-inline mb-0 me-4 text-black" >
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                   id="femaleGender"
                                   value={"USER"} onChange={e => setRole(e.target.value)}/>
                            <label className="form-check-label" htmlFor="femaleGender" title="only search ads">USER</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4 text-black" >
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                   id="maleGender"
                                   value={"STUDENT"} onChange={e => setRole(e.target.value)}/>
                            <label className="form-check-label" htmlFor="maleGender" title="allows you to add ads">STUDENT</label>
                        </div>
                    </div>
                    <div>
                        <div className="custom-control custom-checkbox text-dark mt-2" style={{marginLeft: 50}}>
                            {(checkDirty && checkErr) && <div style={{color: "red", marginTop: 2}}>{checkErr}</div>}
                            <div style={{display: "inline-block"}}>
                                <Form.Check value={check} name="check" onChange={e => checkHandler(e)} aria-label="option 1" />
                            </div>
                            <div style={{display: "inline-block", marginLeft: 10}}>
                                <label className="custom-control-label" htmlFor="defaultIndeterminate">Ви надаєте право на використання даних</label>
                            </div>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button disabled={!formValid} onClick={handelSubmit} className="btn btn-secondary btn-lg" type="submit" variant={"outline-dark"} style={{width: "100%", height: 34, fontSize: 14}}>
                    ДОДАТИ
                </button>
            </Modal.Footer>
        </Modal>
    );
});

export default Register;