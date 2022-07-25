import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../config";
import "./UpdateLanAndLitTopic.css"

const UpdateLanTopic = observer(() => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]

    const [postTopic, setPostTopic] = useState({})
    const [name, setName] = useState("")


    useEffect(()=>{
        const getPostTopic = async () =>{
            const res = await axios.get(`${API_URL}/LanTopic/` + path)
            setPostTopic(res.data)
            setName(res.data.name)
        }
        getPostTopic()
    }, [path])

    const handleDelete = async () => {
        try{
            await axios.delete(`${API_URL}/LanTopic/${postTopic._id}`, {
                name
            })
            window.location.replace("/language")
        }catch (err){
            console.log(err)
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`${API_URL}/LanTopic/${postTopic._id}`, {
                name
            })
            window.location.reload();
        }catch (err){
            console.log(err)
        }
    }

    return (
        <div style={{textAlign: "center", marginTop: 50, marginLeft: "8%", marginRight: "8%"}}>
            <div className="UpdateLan">
                <div>
                    <h1 className="TopicName" >Тема: {name}</h1>
                    <p><input
                        type="text"
                        value={name}
                        autoFocus
                        onChange={(e) => setName(e.target.value)}
                        className="text-black, InputTopic"
                        maxlength="50"
                    /></p>
                </div>
                <div className="ButtonUpdate">
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

export default UpdateLanTopic;