import React from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import LitPostItems from "./LitPostItems";

const LitPostList = observer(({LiteratureTopic, LiteratureUnderTheTopic, nameTopic}) => {
    return (
        <Row style={{zIndex: 1}}>
            <div>
                {Array.isArray(LiteratureTopic) > 0 ? (LiteratureTopic).map((lit)=>(
                        <LitPostItems LiteratureTopics={lit} nameTopic={nameTopic}/>
                    ))
                    :
                    <></>
                }
            </div>
        </Row>
    );
});

export default LitPostList;