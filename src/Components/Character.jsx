import React, { useState, useRef } from 'react';
import { CharacterAndText } from '../styles/StyledComponents.jsx';
import { Link } from 'react-scroll'

const Character = ({ characterIdle, characterFlying, characterFalling, getRefArray, getLanguagesRefArray, getProjectsRefArray }) => {
    const [characterURI, setCharacterUri] = useState(characterIdle);
    const [message, setMessage] = useState("Hi, my name is Magnus welcome to my portofolio, keep scrolling and I will take you through it :)");

    const [lastScroll, setLastScroll] = useState(0);
    var debounce_timer;
    let isImgLoaded = useRef(false);
    let isLanguagesLoaded = useRef(false);
    let isProjectsLoaded = useRef(false);

    window.onscroll = () => {
        if (debounce_timer) {
            window.clearTimeout(debounce_timer);
        }
        debounce_timer = window.setTimeout(function () {
            handleScroll();
            setFlyingFalling();
        }, 5);
        setTimeout(function () {
            if (window.pageYOffset > 400 && !isImgLoaded.current) {
                isImgLoaded.current = true;
                fadeLogosInn(unfade, getRefArray())
            }
        }, 100);
        setTimeout(function () {
            if (window.pageYOffset > 800 && !isLanguagesLoaded.current) {
                isLanguagesLoaded.current = true;
                fadeLanguagesInn(unfade, getLanguagesRefArray())
            }
        }, 100);
        setTimeout(function () {
            if (window.pageYOffset > 1500 && !isProjectsLoaded.current) {
                isProjectsLoaded.current = true;
                fadeProjectsInn(unfade, getProjectsRefArray())
            }
        }, 100);
    }

    function setFlyingFalling() {
        if (window.pageYOffset > lastScroll) {
            setCharacterUri(characterFalling);
            setLastScroll(window.pageYOffset);
            setMessage("...")
        } else if (window.pageYOffset < lastScroll) {
            setCharacterUri(characterFlying);
            setLastScroll(window.pageYOffset);
            setMessage("...")
        }
        setTimeout(function () {
            setCharacterUri(characterIdle);
        }, 500);
    }

    function handleScroll() {
        setTimeout(function () {
                if (window.pageYOffset < 360) {
                    setTimeout(() => {
                        setMessage("Hi, my name is Magnus welcome to my portofolio, keep scrolling and I will take you through it :)");
                    }, 200);
                }
                else if (window.pageYOffset >= 360 && window.pageYOffset < 900) {
                    setTimeout(() => {
                        setMessage("Here are some of my favorite technologies");
                    }, 200);
                }
                else if (window.pageYOffset >= 900 && window.pageYOffset < 1500) {
                    setTimeout(() => {
                        setMessage("here are some of the the languages i know, im also fluent in both Norwegian and English :)");
                    }, 200);
                }
                else if (window.pageYOffset >= 1500 && window.pageYOffset < 2000) {
                    setTimeout(() => {
                        setMessage("Here are some of my projects with coresponding github repo");
                    }, 200);
                }
            setCharacterUri(characterIdle);
        }, 500);
    }

    function unfade(element) {
        var op = 0.1;
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 7);
    }
    var duration = 500;
    return (
        <CharacterAndText>
            <img src={characterURI} className="App-logo" alt="logo" />
            <div>
                <p id="message">{message}</p>
            </div>
            <div>
            <Link  to="Technologies" spy={true} smooth={true} duration={duration}>
                <p>Technologies</p>
            </Link>
            <Link to="Languages" spy={true} smooth={true} duration={duration}>
                <p>Languages</p>
            </Link>
            <Link to="Projects" spy={true} smooth={true} duration={duration}>
                <p>Projects</p>
            </Link>
            <Link to="Projects" spy={true} smooth={true} duration={duration}>
                <p>Other Skills</p>
            </Link>
            <Link to="Projects" spy={true} smooth={true} duration={duration}> 
                <p>Contact</p>
            </Link>
            </div>
        </CharacterAndText>
    )
}
export default Character;

function fadeLogosInn(unfade, refArray) {
    setTimeout(function () {
        unfade(refArray[0].current);
    }, 50);
    setTimeout(function () {
        unfade(refArray[1].current);
    }, 130);
    setTimeout(function () {
        unfade(refArray[2].current);
    }, 180);
    setTimeout(function () {
        unfade(refArray[3].current);
    }, 230);
    setTimeout(function () {
        unfade(refArray[4].current);
    }, 280);
    setTimeout(function () {
        unfade(refArray[5].current);
    }, 330);
    setTimeout(function () {
        unfade(refArray[6].current);
    }, 380);
}

function fadeLanguagesInn(unfade, refArray) {
    setTimeout(function () {
        unfade(refArray[0].current);
    }, 50);
    setTimeout(function () {
        unfade(refArray[1].current);
    }, 130);
    setTimeout(function () {
        unfade(refArray[2].current);
    }, 180);
    setTimeout(function () {
        unfade(refArray[3].current);
    }, 230);
    setTimeout(function () {
        unfade(refArray[4].current);
    }, 280);
    setTimeout(function () {
        unfade(refArray[5].current);
    }, 330);
}

function fadeProjectsInn(unfade, refArray) {
    setTimeout(function () {
        unfade(refArray[0].current);
    }, 50);
    setTimeout(function () {
        unfade(refArray[1].current);
    }, 130);
    setTimeout(function () {
        unfade(refArray[2].current);
    }, 180);
}


