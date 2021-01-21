import React, { useState, useRef } from 'react';
import { CharacterAndText } from '../styles/StyledComponents.jsx';
const Character = ({ characterIdle, characterFlying, characterFalling, getRefArray }) => {
    const [characterURI, setCharacterUri] = useState(characterIdle);
    const [message, setMessage] = useState("Hi, my name is Magnus welcome to my portofolio, keep scrolling and I will take you through it :)");

    const [lastScroll, setLastScroll] = useState(0);
    const [offset, setOffset] = useState(0);
    var debounce_timer;
    let isImgLoaded = useRef(false);

    window.onscroll = () => {
        if (debounce_timer) {
            window.clearTimeout(debounce_timer);
        }
        debounce_timer = window.setTimeout(function () {
            handleScroll();
            setFlyingFalling();
        }, 1);
        setTimeout(function () {
            if (offset > 400 && !isImgLoaded.current) {
                isImgLoaded.current = true;
                console.log(getRefArray())
                fadeButtonsInn(unfade, getRefArray())
            }
        }, 100);
    }

    function setFlyingFalling() {
        setOffset(window.pageYOffset);
        if (offset > lastScroll) {
            setCharacterUri(characterFalling);
            setLastScroll(window.pageYOffset);
        } else if (offset < lastScroll) {
            setCharacterUri(characterFlying);
            setLastScroll(window.pageYOffset);
        }
        setTimeout(function () {
            setCharacterUri(characterIdle);
        }, 500);
    }

    function handleScroll() {
        setOffset(window.pageYOffset);
        setTimeout(function () {
            if (offset < 200) {
                setTimeout(() => {
                    setMessage("Hi, my name is Magnus welcome to my portofolio, keep scrolling and I will take you through it :)");
                }, 200);
            }
            else if (offset >= 300 && offset < 1000) {
                setTimeout(() => {
                    setMessage("Here are some of my favorite technologies");
                }, 200);
            }
            else if (offset >= 1000) {
                setTimeout(() => {
                    setMessage("My languages, and fluent in both Norwegian and English ;)");
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

    return (
        <CharacterAndText>
            <img src={characterURI} className="App-logo" alt="logo" />
            <div>
                <p id="message">{message}</p>
            </div>
        </CharacterAndText>
    )
}
export default Character;

function fadeButtonsInn(unfade, refArray) {
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


