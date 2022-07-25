import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import axios from "axios";
import {API_URL} from "../../config";
import {Context} from "../../context/Context";
import {Form, Modal} from "react-bootstrap";

const CreateLanUnderTheTopic = observer(({show, onHide}) => {
    const [topicCat, setTopicCat] = useState([])

    useEffect(()=>{
        const getTopic = async ()=>{
            const res = await axios.get(`${API_URL}/LanTopic`)
            setTopicCat(res.data)
        }
        getTopic()
    }, [])

    const [title, setTitle] = useState('')
    const [titleDirty, setTitleDirty] = useState(false)
    const [titleErr, setTitleErr] = useState("Empty")

    const [textOne, setTextOne] = useState('')
    const [textOneDirty, setTextOneDirty] = useState(false)
    const [textOneErr, setTextOneErr] = useState("Empty")

    const [textTwo, setTextTwo] = useState('')
    const [textThree, setTextThree] = useState('')
    const [linksURL, setLinksURL] = useState('')
    const [exercise, setExercise] = useState('')

    const [photoOne, setPhotoOne] = useState(null)
    const [photoTwo, setPhotoTwo] = useState(null)
    const [photoThree, setPhotoThree] = useState(null)

    const [topic, setTopic] = useState('')

    const {user} = useContext(Context)

    const [formValid, setFormValid] = useState(false)

    const titleHandler = (e) => {
        setTitle(e.target.value)
        if(!e.target.value){
            setTitleErr("Empty")
        }
        else {
            setTitleErr('')
        }
    }

    const textOneHandler = (e) => {
        setTextOne(e.target.value)
        if(!e.target.value){
            setTextOneErr("Empty")
        }
        else {
            setTextOneErr('')
        }
    }

    const blurHandler = (e) =>{
        switch (e.target.name){
            case 'title':
                setTitleDirty(true)
                break
            case 'textOne':
                setTextOneDirty(true)
                break
        }
    }

    useEffect(() =>{
        if(title || textOne){
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [textOne, title])

    const uploadImageOne = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setPhotoOne(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleSubmit = async (e) => {
        console.log("Est")
        e.preventDefault();
        const newPost = {
            userId: user._id,
            title,
            textOne,
            textTwo,
            textThree,
            exercise,
            linksURL,
            topic
        };
        if (photoOne) {
            const data =new FormData();
            const filename = Date.now() + photoOne.name;
            data.append("name", filename);
            data.append("file", photoOne);
            newPost.photoOne = filename;
            try {
                await axios.post(`${API_URL}/upload`, data);
            } catch (err) {
                console.log(err)
            }
        }
        if (photoTwo) {
            const data =new FormData();
            const filename = Date.now() + photoTwo.name;
            data.append("name", filename);
            data.append("file", photoTwo);
            newPost.photoTwo = filename;
            try {
                await axios.post(`${API_URL}/upload`, data);
            } catch (err) {
                console.log(err)
            }
        }
        if (photoThree) {
            const data =new FormData();
            const filename = Date.now() + photoThree.name;
            data.append("name", filename);
            data.append("file", photoThree);
            newPost.photoThree = filename;
            try {
                await axios.post(`${API_URL}/upload`, data);
            } catch (err) {
                console.log(err)
            }
        }
        try {
            const res = await axios.post(`${API_URL}/LanUnderTheTopic`, newPost);
            window.location.replace("/language");
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <Modal  show={show} onHide={onHide} animation={false} style={{fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif", backgroundColor: "rgb(0, 0, 0, 0.4)"}}>
            <Modal.Header closeButton style={{background: "linear-gradient(-45deg, #e8e7bd, #baccff, #b7c5fc, #e8e7bd)"}}>
                <Modal.Title>ДОДАТИ МАТЕРІАЛ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <select className="form-select" aria-label="Default select example" style={{width: "100%"}} value={topic} onChange={e => setTopic(e.target.value)}>
                        <option selected>Оберіть тему</option>
                        {Array.isArray(topicCat) ?
                            topicCat.map(c =>
                                <option  onBlur={e=>blurHandler(e)} value={c._id} key={c.id}>
                                    {c.name}
                                </option>
                            )
                            :
                            <></>
                        }
                    </select>
                    {(titleDirty && titleErr) &&
                        <div>
                        </div>}
                    <Form.Control
                        name="title"
                        value={title}
                        onChange={e => titleHandler(e)}
                        onBlur={e=> blurHandler(e)}
                        className="mt-3"
                        placeholder="Додайте назву посту"
                        maxlength="50"
                    />
                    {(textOneDirty && textOneErr) &&
                        <div>
                        </div>}
                    <textarea
                        name="textOne"
                        value={textOne}
                        onChange={e => textOneHandler(e)}
                        onBlur={e=> blurHandler(e)}
                        className="mt-3 "
                        placeholder="Додайте текст"
                        maxlength="1100"
                        style={{width: "100%", paddingLeft: 10, paddingRight: 10, borderColor: "rgb(0, 0, 0, 0.2)"}}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Додайте фото"
                        type="file"
                        id="fileInput"
                        multiple accept="image/*"
                        onChange={(e) => setPhotoOne(e.target.files[0])}
                    />
                    <textarea
                        value={textTwo}
                        onChange={e => setTextTwo(e.target.value)}
                        className="mt-3 "
                        placeholder="Додайте текст"
                        maxlength="1100"
                        style={{width: "100%", paddingLeft: 10, paddingRight: 10, borderColor: "rgb(0, 0, 0, 0.2)"}}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Додайте фот"
                        type="file"
                        id="fileInput"
                        multiple accept="image/*"
                        onChange={(e) => setPhotoTwo(e.target.files[0])}
                    />
                    <textarea
                        value={textThree}
                        onChange={e => setTextThree(e.target.value)}
                        className="mt-3 "
                        placeholder="Додайте текст"
                        maxlength="1100"
                        style={{width: "100%", paddingLeft: 10, paddingRight: 10, borderColor: "rgb(0, 0, 0, 0.2)"}}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Додайте фото"
                        type="file"
                        id="fileInput"
                        multiple accept="image/*"
                        onChange={(e) => setPhotoThree(e.target.files[0])}
                    />
                    <hr style={{height: 2, marginTop: 25}}/>
                    <textarea
                        value={linksURL}
                        onChange={e => setLinksURL(e.target.value)}
                        className="mt-3 "
                        placeholder="Додайте посилання(додатковий матеріал)"
                        maxlength="1100"
                        style={{width: "100%", paddingLeft: 10, paddingRight: 10, borderColor: "rgb(0, 0, 0, 0.2)"}}
                    />
                    <textarea
                        value={exercise}
                        onChange={e => setExercise(e.target.value)}
                        className="mt-3 "
                        placeholder="Додайте завдання"
                        maxlength="1100"
                        style={{width: "100%", paddingLeft: 10, paddingRight: 10, borderColor: "rgb(0, 0, 0, 0.2)"}}
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

export default CreateLanUnderTheTopic;