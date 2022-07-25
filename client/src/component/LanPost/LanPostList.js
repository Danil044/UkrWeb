import React from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import LanPostItems from "./LanPostItems";

const LanPostList = observer(({LanguageTopic, LanguageUnderTheTopic, nameTopic}) => {
    return (
        <Row style={{zIndex: 1}}>
            <div>
                {Array.isArray(LanguageTopic) > 0 ? (LanguageTopic).map((lan)=>(
                    <LanPostItems LanguageTopics={lan} nameTopic={nameTopic}/>
                ))
                    :
                    <></>
                }
            </div>
        </Row>
    );
});

export default LanPostList;