import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import axios from "axios";
import {API_URL} from "../../config";
import {useEffect} from "react";
import {Context} from "../../context/Context";
import {Dropdown} from "react-bootstrap";
import "./LitPost.css"

const LitPostItems = observer(({LiteratureTopics, nameTopic}) => {

    const [LitUnderTheTopic, setLitUnderTheTopic] = useState([])
    const {user} = useContext(Context)


    useEffect(()=>{
        const getLitUnderTheTopic = async () =>{
            const res = await axios.get(`${API_URL}/LitUnderTheTopic`)
            setLitUnderTheTopic(res.data)
        }
        getLitUnderTheTopic()
    }, [])

    return (
        <div>{nameTopic === "" ?
            <div className="TopicAndPost">
                <div>
                    <div style={{display: "inline-block"}}>
                        {user?
                            <div style={{display: "inline-block"}}>{user.role === "TEACHER" || user.role === "ADMIN" ?
                                <div>
                                    <div style={{display: "inline-block"}}>
                                        <a href={`/updatelit/${LiteratureTopics._id}`} style={{textDecoration: "none", color: "#41412d"}}>
                                            <h4  className="TitleNameLit">
                                                {LiteratureTopics.name}
                                            </h4>
                                        </a>
                                    </div>
                                    <div style={{display: "inline-block"}}>
                                        <a href={`/updatelit/${LiteratureTopics._id}`}><img className="PhotoUpdateLit" style={{marginTop: -15, marginLeft: 30}} height={20} width={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828032.png"/></a>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div>
                                        <h2 className="TitleNameLit"> {LiteratureTopics.name}
                                        </h2>
                                    </div>
                                </div>
                            }
                            </div>
                            :
                            <div style={{display: "inline-block"}}>
                                <h2 className="TitleNameLit"> {LiteratureTopics.name}
                                </h2>
                            </div>
                        }
                    </div>
                    <div>
                        <div className="PostLit">
                            <Dropdown className="DropdownPostLit">

                                <Dropdown.Toggle className="DropToggleUnderTheTopicLit" id="dropdown-button-dark-example1" variant="secondary">
                                    Пости до теми
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark" className="DropMenuUnderTheTopicLit">
                                    {Array.isArray(LitUnderTheTopic) ? (LitUnderTheTopic).map((lit) =>
                                            <div>{LiteratureTopics._id === lit.topic ?
                                                <Dropdown.Item className="DropMenuUnderTheTopicItemLit" href={`/literature/${lit._id}`}>

                                                    <div style={{display: "inline-block" }}>
                                                        <a style={{textDecoration: "none", color: "rgb(255, 255, 255, 0.9)"}} href={`/literature/${lit._id}`}>
                                                            <h4 className="DropNameLit">
                                                                - {lit.title}
                                                            </h4>
                                                        </a>
                                                    </div>
                                                    {user ?
                                                        <>{user.role === "TEACHER" || user.role === "ADMIN" ?
                                                            <div style={{display: "inline-block"}}>
                                                                <a href={`/updateuttlit/${lit._id}`}><img className="IconUpdateDown" height={20} width={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828270.png"/></a>
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
                (LiteratureTopics.name === nameTopic) ?

                    <div className="TopicAndPost">
                        <div>
                            <div style={{display: "inline-block"}}>
                                {user?
                                    <div style={{display: "inline-block"}}>{user.role === "TEACHER" || user.role === "ADMIN" ?
                                        <div>
                                            <div style={{display: "inline-block"}}>
                                                <a href={`/updatelit/${LiteratureTopics._id}`} style={{textDecoration: "none", color: "#41412d"}}>
                                                    <h4  className="TitleNameLit">
                                                        {LiteratureTopics.name}
                                                    </h4>
                                                </a>
                                            </div>
                                            <div style={{display: "inline-block"}}>
                                                <a href={`/updatelit/${LiteratureTopics._id}`}><img className="PhotoUpdateLit" style={{marginTop: -15, marginLeft: 30}} height={20} width={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828032.png"/></a>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div>
                                                <h2 className="TitleNameLit"> {LiteratureTopics.name}
                                                </h2>
                                            </div>
                                        </div>
                                    }
                                    </div>
                                    :
                                    <div style={{display: "inline-block"}}>
                                        <h2 className="TitleNameLit"> {LiteratureTopics.name}
                                        </h2>
                                    </div>
                                }
                            </div>
                            <div>
                                <div className="PostLit">
                                    <Dropdown className="DropdownPostLit">

                                        <Dropdown.Toggle className="DropToggleUnderTheTopicLit" id="dropdown-button-dark-example1" variant="secondary">
                                            Пости до теми
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" className="DropMenuUnderTheTopicLit">
                                            {Array.isArray(LitUnderTheTopic) ? (LitUnderTheTopic).map((lit) =>
                                                    <div>{LiteratureTopics._id === lit.topic ?
                                                        <Dropdown.Item className="DropMenuUnderTheTopicItemLit" href={`/literature/${lit._id}`}>

                                                            <div style={{display: "inline-block"}}>
                                                                <a style={{textDecoration: "none", color: "rgb(255, 255, 255, 0.9)"}} href={`/literature/${lit._id}`}>
                                                                    <h4 className="DropNameLit">
                                                                        - {lit.title}
                                                                    </h4>
                                                                </a>
                                                            </div>
                                                            {user ?
                                                                <>{user.role === "TEACHER" || user.role === "ADMIN" ?
                                                                    <div style={{display: "inline-block"}}>
                                                                        <a href={`/updateuttlit/${lit._id}`}><img className="IconUpdateDown" height={20} width={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828270.png"/></a>
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

export default LitPostItems;