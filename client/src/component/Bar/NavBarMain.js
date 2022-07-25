import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../context/Context";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import RegisterModel from "../models/register";
import LoginModel from "../models/login";
import "./NavBar.css"

const NavBarMain = observer(() => {
    const {user, dispatch, isFetching} = useContext(Context)

    const [registerVisible, setRegisterVisible] = useState(false)
    const [loginVisible, setLoginVisible] = useState(false)

    const logOut = async () => {
        dispatch({type: "LOGOUT"})
        window.location.replace("/")

        console.log(isFetching)
    }

    return (
        <Navbar style={{position: "absolute", top: 0, right: 0, left: 0, zIndex: 2, backgroundColor: "rgb(186, 204, 222, 0)", height: "12%"}}>
            <Container>
                <Navbar.Brand style={{display: "inline-block", fontFamily: "Bookman, URW Bookman L, serif"}} href="/">
                    <Nav>
                        <Nav>
                            <img height={130} width={130} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAA7EAAAOxAGVKw4bAABKAklEQVR4Xu3dCZxN5f/A8a+txowlzKTFMlrIUJYfCtm1ECpZ8ktEu6VUKvULoUUibaiUrUWWCKHFMmQpO0VRGFRihmwzxjr/73Pd6T+Y5d655957zr2f83rdl2XOeZb3uXO/93nOs4hwIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIOEjgn327C6cePZTHQUWmqCEqwJswRG8s1UIAAf8KrF+zvM7mTT/X37xx041bftlYq0xsuW11GjSc2OTW296J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SsBMKXv4v3fuS0lJjvbqQj25VGzsWh3FbpZ0NccG98vbZDgfAVsJ0OVuq9tBYRBAwBuBCnFxZrS7R4c+Hz+oz91/MidXiPOtu96jDDkJgQALENADDE52CCBgnYC2tNd7kpoG8jX9Xhta9WhKSmEz8K1K9dpWz2P3pBicg4BfBQjofuUlcQQQ8KeAtrQX5ZD+iZZt2g7oN3hovVlTJ7+QlLi3TPvOXXr5s0ykjUCwBHiGHix58kUAAZ8FKlSs9L0mckxfF56bWPmKlebd3bnLU/r/eUYOGzJm86aNDdt36tJLd02b4HPGJICADQW8Hh1qwzpQJAQQCGOB8e+/NXje3NnPmMCtrxMayONbtW33knarL/7t1w2VddCcWZs9bxntdmdKWhi/UcKg6gT0MLjJVBGBUBdI2Prr1SagR8fEJBQqUuJ4qNeX+iGAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggYA+B/wNdCYgETc3pDQAAAABJRU5ErkJggg==" />
                        </Nav>
                        <Nav style={{marginTop: 50, marginLeft: -20}}>
                            <b style={{color: "rgb(69, 51, 33)"}}>УКРАЇНСЬКА</b>
                        </Nav>
                    </Nav>
                </Navbar.Brand>
                {
                    <Nav className="mc-auto text-dark" style={{fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif", fontWeight: "bold"}}>
                        {user ?
                            <Nav.Link style={{fontSize: 14, marginTop: 10}}>
                                <p className="UserLink">(Користувач {user.name} {user.lastname})</p>
                            </Nav.Link>
                            : ``}
                        {user ?
                            <Nav style={{marginTop: 8.5}}>
                                {user.role === "TEACHER" || user.role === "ADMIN"?(
                                        <Nav>
                                            <Nav.Link className="ExitNavBar" onClick={() => logOut()}>Exit</Nav.Link>
                                        </Nav>
                                    )
                                    :
                                    (
                                        <Nav >
                                            <Nav.Link onClick={() => logOut()}>Exit</Nav.Link>
                                        </Nav>
                                    )
                                }

                            </Nav>
                            :
                            <Nav>
                                <Nav>
                                    <Nav.Link onClick={()=> setLoginVisible(true)}>Login</Nav.Link>
                                    <LoginModel show={loginVisible} onHide={() => setLoginVisible(false)}/>
                                </Nav>
                            </Nav>
                        }
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBarMain;