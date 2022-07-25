import React from 'react';
import {observer} from "mobx-react-lite";
import UpdateLanUnderTheTopic from "../../component/modelUpdateAndDelete/UpdateLanUnderTheTopic"


const ULanPostUnderTheTopic = observer(() => {
    return (
        <div>
            <UpdateLanUnderTheTopic/>
        </div>
    );
});

export default ULanPostUnderTheTopic;