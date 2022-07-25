import React from 'react';
import {observer} from "mobx-react-lite";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../config";
import {Form} from "react-bootstrap";
import FileBase64 from 'react-file-base64';
import isBase64 from "validator/es/lib/isBase64";
import "./UpdateLanAndLitUnderTheTopic.css"

const UpdateLanUnderTheTopic = observer(() => {
    const PF = "http://localhost:4000/images/"
    const location = useLocation()

    const path = location.pathname.split("/")[2];

    const [LanPost, setLanPost] = useState({})
    const [title, setTitle] = useState("")
    const [textOne, setTextOne] = useState("")
    const [textTwo, setTextTwo] = useState("")
    const [textThree, setTextThree] = useState("")
    const [linksURL, setLinksURL] = useState("")
    const [exercise, setExercise] = useState("")
    const [photoOne, setPhotoOne] = useState(null)
    const [photoTwo, setPhotoTwo] = useState(null)
    const [photoThree, setPhotoThree] = useState(null)

    useEffect(() => {
        const getLanPost = async () => {
            const res = await axios.get(`${API_URL}/LanUnderTheTopic/` + path)
            setLanPost(res.data)
            setTitle(res.data.title)
            setTextOne(res.data.textOne)
            setTextTwo(res.data.textTwo)
            setTextThree(res.data.textThree)
            setLinksURL(res.data.linksURL)
            setExercise(res.data.exercise)
            setPhotoOne(res.data.photoOne)
            setPhotoTwo(res.data.photoTwo)
            setPhotoThree(res.data.photoThree)
        };

        getLanPost()
    }, [path])

    const handleDelete = async () => {
        try{
            await axios.delete(`${API_URL}/LanUnderTheTopic/${LanPost._id}`, {
                title,
                textOne,
                textTwo,
                textThree,
                linksURL,
                exercise,
                photoOne,
                photoTwo,
                photoThree
            })
            window.location.replace("/language")
        }catch (err){
            console.log(err)
        }
    }

    const handleUpdate = async () => {
        const newPost = {
            title,
            textOne,
            textTwo,
            textThree,
            exercise,
            linksURL
        };
        try {
            const res = await axios.put(`${API_URL}/LanUnderTheTopic/${LanPost._id}`, newPost);
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }


    const handleUpdatePhotoOne = async () => {
        const newPost = {
            photoOne
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
        try {
            const res = await axios.put(`${API_URL}/LanUnderTheTopic/${LanPost._id}`, newPost);
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdatePhotoTwo = async () => {
        const newPost = {
            photoTwo
        };
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
        try {
            const res = await axios.put(`${API_URL}/LanUnderTheTopic/${LanPost._id}`, newPost);
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdatePhotoThree = async () => {
        const newPost = {
            photoThree
        };
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
            const res = await axios.put(`${API_URL}/LanUnderTheTopic/${LanPost._id}`, newPost);
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="BodyUpdateLanAndLitUTT">
            <div className="UpdateLanAndLitUTT">
                <h1 style={{textAlign: "center", marginBottom: 30}}>Оновлення поста</h1>
                <div>
                    <div style={{marginBottom: 40}}>
                        <p><b style={{fontSize: 18, marginLeft: 10}}>Назва: </b><input
                            type="text"
                            value={title}
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-black InputField"
                            maxLength="50"
                        /></p>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <div style={{marginBottom: 10}}>
                            <b style={{fontSize: 20}}>Текст перший</b>
                        </div>
                        <div>
                            <textarea
                                type="text"
                                value={textOne}
                                autoFocus
                                onChange={(e) => setTextOne(e.target.value)}
                                className="text-black TextareaField"
                                maxLength="1100"
                            />
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <div style={{marginBottom: 10}}>
                            <b style={{fontSize: 20}}>Текст другий</b>
                        </div>
                        <div>
                            <textarea
                                type="text"
                                value={textTwo}
                                autoFocus
                                onChange={(e) => setTextTwo(e.target.value)}
                                className="text-black TextareaField"
                                maxLength="1100"
                            />
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <div style={{marginBottom: 10}}>
                            <b style={{fontSize: 20}}>Текст третій</b>
                        </div>
                        <div>
                            <textarea
                                type="text"
                                value={textThree}
                                autoFocus
                                onChange={(e) => setTextThree(e.target.value)}
                                className="text-black TextareaField"
                                maxLength="1100"
                            />
                        </div>
                    </div>
                    <div style={{textAlign: "center", marginBottom: 25}}>
                        <div style={{display: "inline-block"}}>
                            <div>
                                <div>
                                    {photoOne && (
                                        <img src={PF + photoOne} className="PhotoPost" alt=""/>
                                    )}
                                </div>
                                <div style={{marginTop: -15, marginLeft: 28}}>
                                    <div style={{display: "inline-block"}}>
                                        <Form.Control
                                            className="mt-3"
                                            style={{width: "75%"}}
                                            placeholder="Додати перше фото"
                                            type="file"
                                            id="fileInput"
                                            multiple accept="image/*"
                                            onChange={(e) => setPhotoOne(e.target.files[0])}
                                        />
                                    </div>
                                    <div style={{display: "inline-block"}}>
                                        <button
                                            className="btn btn-outline-dark"
                                            style={{borderRadius: 50, marginLeft: -80}}
                                            onClick={handleUpdatePhotoOne}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "inline-block"}}>
                            <div>
                                <div>
                                    {photoTwo && (
                                        <img src={PF + photoTwo} className="PhotoPost" alt=""/>
                                    )}
                                </div>
                                <div style={{marginTop: -15, marginLeft: 28}}>
                                    <div style={{display: "inline-block"}}>
                                        <Form.Control
                                            className="mt-3"
                                            style={{width: "75%"}}
                                            placeholder="Додати друге фото"
                                            type="file"
                                            id="fileInput"
                                            multiple accept="image/*"
                                            onChange={(e) => setPhotoTwo(e.target.files[0])}
                                        />
                                    </div>
                                    <div style={{display: "inline-block"}}>
                                        <button
                                            className="btn btn-outline-dark"
                                            style={{borderRadius: 50, marginLeft: -80}}
                                            onClick={handleUpdatePhotoTwo}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "inline-block"}}>
                            <div>
                                <div>
                                    {photoThree && (
                                        <img src={PF + photoThree} className="PhotoPost" alt=""/>
                                    )}
                                </div>
                                <div style={{marginTop: -15, marginLeft: 28}}>
                                    <div style={{display: "inline-block"}}>
                                        <Form.Control
                                            className="mt-3"
                                            style={{width: "75%"}}
                                            placeholder="Додати третє фото"
                                            type="file"
                                            id="fileInput"
                                            multiple accept="image/*"
                                            onChange={(e) => setPhotoThree(e.target.files[0])}
                                        />
                                    </div>
                                    <div style={{display: "inline-block"}}>
                                        <button
                                            className="btn btn-outline-dark"
                                            style={{borderRadius: 50, marginLeft: -80}}
                                            onClick={handleUpdatePhotoThree}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{textAlign: "center"}}>
                    <div style={{marginBottom: 10}}>
                        <b style={{fontSize: 20}}>Посилання на додатковий матеріал</b>
                    </div>
                    <div>
                            <textarea
                                type="text"
                                value={linksURL}
                                autoFocus
                                onChange={(e) => setLinksURL(e.target.value)}
                                className="text-black TextareaField"
                                maxLength="1100"
                            />
                    </div>
                </div>
                <div style={{textAlign: "center"}}>
                    <div style={{marginBottom: 10}}>
                        <b style={{fontSize: 20}}>Завдання</b>
                    </div>
                    <div>
                            <textarea
                                type="text"
                                value={exercise}
                                autoFocus
                                onChange={(e) => setExercise(e.target.value)}
                                className="text-black TextareaField"
                                maxLength="1100"
                            />
                    </div>
                </div>
                <div style={{marginTop: 20, textAlign: "center"}}>
                    <button
                        className="btn btn-secondary btn-lg"
                        style={{width: "40%", height: 34, fontSize: 14}}
                        onClick={handleUpdate}
                    >UPDATE</button>
                    <button
                        className="btn btn-secondary btn-lg"
                        style={{width: "40%", height: 34, fontSize: 14, marginLeft: 20}}
                        onClick={handleDelete}
                    >DELETE</button>
                </div>
            </div>
        </div>
    );
});

export default UpdateLanUnderTheTopic;