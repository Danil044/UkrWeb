import React from 'react';
import {observer} from "mobx-react-lite";
import UpdateLitTopic from "../../component/modelUpdateAndDelete/UpdateLitTopic"

const ULitPostTopic = observer(() => {
    return (
        <div>
            <UpdateLitTopic/>
        </div>
    );
});

export default ULitPostTopic;