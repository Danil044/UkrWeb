import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import axios from "axios";
import {API_URL} from "../../config";
import {useEffect} from "react";
import {Context} from "../../context/Context";
import "./LanPost.css"
import {Dropdown} from "react-bootstrap";

const LanPostItems = observer(({LanguageTopics, nameTopic}) => {

    const [LanUnderTheTopic, setLanUnderTheTopic] = useState([])
    const {user} = useContext(Context)


    useEffect(()=>{
        const getLanUnderTheTopic = async () =>{
            const res = await axios.get(`${API_URL}/LanUnderTheTopic`)
            setLanUnderTheTopic(res.data)
        }
        getLanUnderTheTopic()
    }, [])

    return (
        <div>{nameTopic === "" ?
            <div className="TopicAndPostLan">
                <div>
                    <div style={{display: "inline-block"}}>
                        {user?
                            <div style={{display: "inline-block"}}>{user.role === "TEACHER" || user.role === "ADMIN" ?
                                <div>
                                    <div style={{display: "inline-block"}}>
                                        <a href={`/update/${LanguageTopics._id}`} style={{textDecoration: "none", color: "#41412d"}}>
                                            <h4  className="TitleNameLan">
                                                {LanguageTopics.name}
                                            </h4>
                                        </a>
                                    </div>
                                    <div style={{display: "inline-block"}}>
                                        <a href={`/update/${LanguageTopics._id}`}><img className="PhotoUpdate" style={{marginTop: -10, marginLeft: 17}} height={20} width={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828032.png"/></a>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div>
                                        <h4 className="TitleNameLan"> {LanguageTopics.name}
                                        </h4>
                                    </div>
                                </div>
                            }
                            </div>
                            :
                            <div style={{display: "inline-block"}}>
                                <h2 className="TitleName"> {LanguageTopics.name}
                                </h2>
                            </div>
                        }
                    </div>
                    <div>
                        <div className="PostLan">
                            <Dropdown className="DropdownPostLan">

                                <Dropdown.Toggle className="DropToggleUnderTheTopic" id="dropdown-button-dark-example1" variant="secondary">
                                    Пости до теми
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark" className="DropMenuUnderTheTopic">
                                    {Array.isArray(LanUnderTheTopic) ? (LanUnderTheTopic).map((lan) =>
                                            <div>{LanguageTopics._id === lan.topic ?
                                                <Dropdown.Item href={`/language/${lan._id}`}>

                                                    <div style={{display: "inline-block"}}>
                                                        <a style={{textDecoration: "none", color: "rgb(255, 255, 255, 0.9)"}} href={`/language/${lan._id}`}>
                                                            <h4>
                                                                - {lan.title}
                                                            </h4>
                                                        </a>
                                                    </div>
                                                    {user ?
                                                        <>{user.role === "TEACHER" || user.role === "ADMIN" ?
                                                            <div style={{display: "inline-block"}}>
                                                                <a href={`/updateutt/${lan._id}`}><img style={{marginTop: -10, marginLeft: 30}} height={20} width={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828270.png"/></a>
                                                            </div>
                                                            :
                                                            <></>
                                                        }</>
                                                        :
                                                        <></>
                                                    }
                                                </Dropdown.Item>
                                                :
                                                <></>
                                            }</div>
                                        )
                                        :
                                        <></>
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            :(
                (LanguageTopics.name === nameTopic) ?

                    <div className="TopicAndPost">
                        <div>
                            <div style={{display: "inline-block"}}>
                                {user?
                                    <div style={{display: "inline-block"}}>{user.role === "TEACHER" || user.role === "ADMIN" ?
                                        <div>
                                            <div style={{display: "inline-block"}}>
                                                <a href={`/update/${LanguageTopics._id}`} style={{textDecoration: "none", color: "#41412d"}}>
                                                    <h4  className="TitleName">
                                                        {LanguageTopics.name}
                                                    </h4>
                                                </a>
                                            </div>
                                            <div style={{display: "inline-block"}}>
                                                <a href={`/update/${LanguageTopics._id}`}><img className="PhotoUpdate" style={{marginTop: -15, marginLeft: 30}} height={20} width={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828032.png"/></a>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div>
                                                <h2 className="TitleName"> {LanguageTopics.name}
                                                </h2>
                                            </div>
                                        </div>
                                    }
                                    </div>
                                    :
                                    <div style={{display: "inline-block"}}>
                                        <h2 className="TitleName"> {LanguageTopics.name}
                                        </h2>
                                    </div>
                                }
                            </div>
                            <div>
                                <div className="PostLan">
                                    <Dropdown className="DropdownPostLan">

                                        <Dropdown.Toggle className="DropToggleUnderTheTopic" id="dropdown-button-dark-example1" variant="secondary">
                                            Пости до теми
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="DropMenuUnderTheTopic">
                                            {Array.isArray(LanUnderTheTopic) ? (LanUnderTheTopic).map((lan) =>
                                                    <div>{LanguageTopics._id === lan.topic ?
                                                        <Dropdown.Item href={`/language/${lan._id}`}>

                                                            <div style={{display: "inline-block"}}>
                                                                <a style={{textDecoration: "none", color: "rgb(255, 255, 255, 0.9)"}} href={`/language/${lan._id}`}>
                                                                    <h4>
                                                                        - {lan.title}
                                                                    </h4>
                                                                </a>
                                                            </div>
                                                            {user ?
                                                                <>{user.role === "TEACHER" || user.role === "ADMIN" ?
                                                                    <div style={{display: "inline-block"}}>
                                                                        <a href={`/updateutt/${lan._id}`}><img style={{marginTop: -10, marginLeft: 30}} height={20} width={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828270.png"/></a>
                                                                    </div>
                                                                    :
                                                                    <></>
                                                                }</>
                                                                :
                                                                <></>
                                                            }
                                                        </Dropdown.Item>
                                                        :
                                                        <></>
                                                    }</div>
                                                )
                                                :
                                                <></>
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <></>
            )
        }</div>

    );
});

export default LanPostItems;