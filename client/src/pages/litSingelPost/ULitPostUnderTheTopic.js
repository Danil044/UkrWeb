import React from 'react';
import {observer} from "mobx-react-lite";
import UpdateLitUnderTheTopic from "../../component/modelUpdateAndDelete/UpdateLitUnderTheTopic"


const ULitPostUnderTheTopic = observer(() => {
    return (
        <div>
            <UpdateLitUnderTheTopic/>
        </div>
    );
});

export default ULitPostUnderTheTopic;