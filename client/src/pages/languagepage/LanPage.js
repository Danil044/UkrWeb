import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../context/Context";
import {Button, Form} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../config";
import LanPostList from "../../component/LanPost/LanPostList";
import CreateLanTopic from "../../component/modelCreate/CreateLanTopic";
import CreateLanUnderTheTopic from "../../component/modelCreate/CreateLanUnderTheTopic";
import "./LanPage.css"

const LanPage = observer(() => {
    const [nameTopic, setNameTopic] = useState('');

    const [LanguageTopicVisible, setLanguageTopicVisible] = useState(false)
    const [LanguageUnderTheTopicVisible, setLanguageUnderTheTopicVisible] = useState(false)

    const [LanguageUnderTheTopic, setLanguageUnderTheTopic] = useState([])
    const [LanguageTopic, setLanguageTopic] = useState([])
    const {search} = useLocation()
    const {user} = useContext(Context)

    const fetchLanguageUnderTheTopic = async ()=>{
        const res = await axios.get(`${API_URL}/LanUnderTheTopic` + search)
        setLanguageUnderTheTopic(res.data)
    }

    const fetchLanguageTopic = async ()=>{
        const res = await axios.get(`${API_URL}/LanTopic` + search)
        setLanguageTopic(res.data)
    }

    useEffect(()=>{
        fetchLanguageUnderTheTopic()
        fetchLanguageTopic()
    }, [search])

    return (
        <div style={{marginTop: 65, marginLeft: 30, marginRight: 30, minHeight: "calc(69.8vh - 20px)"}}>
            <div className="BlockAddAndSearch">
                <h1 className="NamePage">Ураїнська мова</h1>
                <>{user?
                    <>{user.role === "ADMIN" || user.role === "TEACHER" ?
                        <div>
                            <div >
                                <div>
                                    <button class="btn btn-outline-secondary" style={{width: "100%", height: 50, marginTop: 20, fontSize: 18, fontWeight: "bold"}} onClick={() => setLanguageTopicVisible(true)}>Додати тему</button>
                                    <CreateLanTopic show={LanguageTopicVisible} onHide={() => setLanguageTopicVisible(false)}/>
                                </div>
                                <div>
                                    <button class="btn btn-outline-secondary" style={{width: "100%", height: 50, marginTop: 20, fontSize: 18, fontWeight: "bold"}} onClick={() => setLanguageUnderTheTopicVisible(true)}>Додати підтему</button>
                                    <CreateLanUnderTheTopic show={LanguageUnderTheTopicVisible} onHide={() => setLanguageUnderTheTopicVisible(false)}/>
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                    }</>
                    :
                    <></>
                }
                </>
                <div>
                    <input className="InputSearch"
                           value={nameTopic}
                           onChange={e => setNameTopic(e.target.value)}

                           placeholder={"ЗНАЙТИ ТЕМУ"}
                    />
                </div>
            </div>

            <div style={{marginTop: 18, marginBottom: 40}}>
                <div>
                    <LanPostList LanguageTopic={LanguageTopic} LanguageUnderTheTopic={LanguageUnderTheTopic} nameTopic={nameTopic}/>
                </div>
            </div>
        </div>
    );
});

export default LanPage;