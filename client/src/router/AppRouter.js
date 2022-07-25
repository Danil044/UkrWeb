import React, {useContext} from 'react';
import {Redirect, Route, Router, Switch, useHistory} from "react-router-dom";
import {Context} from "../context/Context";
import Main from "../pages/main/Main";
import LanPage from "../pages/languagepage/LanPage";
import LitPage from "../pages/literaturpage/LitPage";
import SLanPost from "../pages/lanSingelPost/SLanPost";
import ULanPostTopic from "../pages/lanSingelPost/ULanPostTopic";
import ULanPostUnderTheTopic from "../pages/lanSingelPost/ULanPostUnderTheTopic";
import SLitPost from "../pages/litSingelPost/SLitPost";
import ULitPostTopic from "../pages/litSingelPost/ULitPostTopic";
import ULitPostUnderTheTopic from "../pages/litSingelPost/ULitPostUnderTheTopic";
import NavBar from "../component/Bar/NavBar";
import NavBarMain from "../component/Bar/NavBarMain";
import FooterBar from "../component/Bar/FooterBar";

const AppRouter = () => {
    const history = useHistory()
    const {user} = useContext(Context)

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <NavBarMain/>
                    <Main/>
                </Route>
                <Route exact path="/language">
                    <NavBar/>
                    <LanPage/>
                    <FooterBar/>
                </Route>
                <Route exact path="/literature">
                    <NavBar/>
                    <LitPage/>
                    <FooterBar/>
                </Route>
                <Route exact path="/language/:lanId">
                    <NavBar/>
                    <SLanPost/>
                    <FooterBar/>
                </Route>
                <Route exact path="/update/:lantopicId">
                    <NavBar/>
                    <ULanPostTopic/>
                </Route>
                <Route exact path="/updateutt/:lanunderthetopicId">
                    <NavBar/>
                    <ULanPostUnderTheTopic/>
                </Route>
                <Route exact path="/literature/:litId">
                    <NavBar/>
                    <SLitPost/>
                    <FooterBar/>
                </Route>
                <Route exact path="/updatelit/:littopicId">
                    <NavBar/>
                    <ULitPostTopic/>
                </Route>
                <Route exact path="/updateuttlit/:litunderthetopicId">
                    <NavBar/>
                    <ULitPostUnderTheTopic/>
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;