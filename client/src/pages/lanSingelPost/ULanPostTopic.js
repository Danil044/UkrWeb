import React from 'react';
import {observer} from "mobx-react-lite";
import UpdateLanTopic from "../../component/modelUpdateAndDelete/UpdateLanTopic"

const ULanPostTopic = observer(() => {
    return (
        <div>
            <UpdateLanTopic/>
        </div>
    );
});

export default ULanPostTopic;