import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../context/Context";
import {Button} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../config";
import LitPostList from "../../component/LitPost/LitPostList";
import CreateLitTopic from "../../component/modelCreate/CreateLitTopic";
import CreateLitUnderTheTopic from "../../component/modelCreate/CreateLitUnderTheTopic";
import CreateLanTopic from "../../component/modelCreate/CreateLanTopic";
import CreateLanUnderTheTopic from "../../component/modelCreate/CreateLanUnderTheTopic";
import LanPostList from "../../component/LanPost/LanPostList";
import "./LitPage.css"


const LitPage = observer(() => {
    const [nameTopic, setNameTopic] = useState('');

    const [LiteratureTopicVisible, setLiteratureTopicVisible] = useState(false)
    const [LiteratureUnderTheTopicVisible, setLiteratureUnderTheTopicVisible] = useState(false)

    const [LiteratureUnderTheTopic, setLiteratureUnderTheTopic] = useState([])
    const [LiteratureTopic, setLiteratureTopic] = useState([])
    const {search} = useLocation()
    const {user} = useContext(Context)

    const fetchLiteratureUnderTheTopic = async ()=>{
        const res = await axios.get(`${API_URL}/LitUnderTheTopic` + search)
        setLiteratureUnderTheTopic(res.data)
    }

    const fetchLiteratureTopic = async ()=>{
        const res = await axios.get(`${API_URL}/LitTopic` + search)
        setLiteratureTopic(res.data)
    }

    useEffect(()=>{
        fetchLiteratureUnderTheTopic()
        fetchLiteratureTopic()
    }, [search])

    return (
        <div style={{marginTop: 65, marginLeft: 30, marginRight: 30, minHeight: "calc(69.8vh - 20px)"}}>
            <div className="BlockAddAndSearch">
                <h1 className="NamePage">Ураїнська література</h1>
                <>{user?
                    <>{user.role === "ADMIN" || user.role === "TEACHER" ?
                        <div>
                            <div >
                                <div>
                                    <button class="btn btn-outline-secondary" style={{width: "100%", height: 50, marginTop: 20, fontSize: 18, fontWeight: "bold"}} onClick={() => setLiteratureTopicVisible(true)}>Додати тему</button>
                                    <CreateLitTopic show={LiteratureTopicVisible} onHide={() => setLiteratureTopicVisible(false)}/>
                                </div>
                                <div>
                                    <button class="btn btn-outline-secondary" style={{width: "100%", height: 50, marginTop: 20, fontSize: 18, fontWeight: "bold"}} onClick={() => setLiteratureUnderTheTopicVisible(true)}>Додати підтему</button>
                                    <CreateLitUnderTheTopic show={LiteratureUnderTheTopicVisible} onHide={() => setLiteratureUnderTheTopicVisible(false)}/>
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
                    <LitPostList LiteratureTopic={LiteratureTopic} LiteratureUnderTheTopic={LiteratureUnderTheTopic} nameTopic={nameTopic}/>
                </div>
            </div>
        </div>
    );
});

export default LitPage;