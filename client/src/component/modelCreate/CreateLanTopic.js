import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import axios from "axios";
import {API_URL} from "../../config";
import {Form, Modal} from "react-bootstrap";

const CreateLanTopic = observer(({show, onHide}) => {
    const [name, setName] = useState('')

    const handleSubmit = async (e) => {
        console.log("Est")
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/LanTopic`,{
                name
            })
            res.data && window.location.replace("/language")
            console.log(res);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <Modal show={show} onHide={onHide} animation={false} centered style={{fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif", backgroundColor: "rgb(0, 0, 0, 0.4)"}}>
            <Modal.Header closeButton style={{background: "linear-gradient(-45deg, #e8e7bd, #baccff, #b7c5fc, #e8e7bd)"}}>
                <Modal.Title>ДОДАТИ ТЕМУ ДО МОВИ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Додайте нову тему"}
                        maxlength="50"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleSubmit} className="btn btn-secondary btn-lg" type="submit" variant={"outline-dark"} style={{width: "100%", height: 34, fontSize: 14}}>
                    ЗБЕРЕГТИ
                </button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateLanTopic;