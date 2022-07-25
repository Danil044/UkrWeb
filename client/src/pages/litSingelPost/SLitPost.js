import React from 'react';
import {observer} from "mobx-react-lite";
import SinLitPost from "../../component/SingelLitPost/SinLitPost";

const SLitPost = observer(() => {
    return (
        <div>
            <SinLitPost/>
        </div>
    );
});

export default SLitPost;