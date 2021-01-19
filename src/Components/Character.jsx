import React, { useState, useEffect } from 'react';
import { CharacterAndText } from '../styles/StyledComponents.jsx';
const Character = ({ characterIdle, characterFlying, characterFalling }) => {
    const [characterURI, setCharacterUri] = useState(characterIdle);
    const [message, setMessage] = useState("Hi, my name is Magnus welcome to my portofolio, keep scrolling and I will take you through it :)");

    const [lastScroll, setLastScroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", function () {
            var offset = window.pageYOffset;
            if (offset > lastScroll) {
                setTimeout(() => {
                    setMessage("...")
                }, 200)
                setCharacterUri(characterFalling)
                setLastScroll(window.pageYOffset)
            } else if (offset < lastScroll) {
                setTimeout(() => {
                    setMessage("...")
                }, 200)
                setCharacterUri(characterFlying)
                setLastScroll(window.pageYOffset)
            }
            setTimeout(function () {
                if (offset < 300) {
                    setTimeout(() => {
                        setMessage("Hi, my name is Magnus welcome to my portofolio, keep scrolling and I will take you through it :)")
                    }, 200)
                }
                else if (offset >= 300 && offset < 800) {
                    setTimeout(() => {
                        setMessage("Here are some of my favorite technologies")
                    }, 200)
                }
                else if (offset >= 800) {
                    setTimeout(() => {
                        setMessage("My languages, and fluent in both Norwegian and English ;)")
                    }, 200)

                }
                setCharacterUri(characterIdle)
                setLastScroll(window.pageYOffset)
            }, 500);
        }
            , [characterURI, message])
    })

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