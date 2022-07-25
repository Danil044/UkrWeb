import React from 'react';
import {observer} from "mobx-react-lite";
import SinLanPost from "../../component/SingelLanPost/SinLanPost";

const SLanPost = observer(() => {
    return (
        <div>
            <SinLanPost/>
        </div>
    );
});

export default SLanPost;