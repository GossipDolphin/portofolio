import React, { useEffect } from 'react';
import { TopButtonsSectionStyled } from '../styles/StyledComponents.jsx';
import StandardButton from './StandardButton.jsx';
import {Link} from 'react-scroll'



const TopButtonsContainer = () => {

    var refArray = [];

    useEffect(() => {
        fadeButtonsInn(unfade, refArray);
    })

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
        <TopButtonsSectionStyled>
            <Link>
            <StandardButton refArray={refArray} value="kek" text="Contact"></StandardButton>
            </Link>
            <Link>
            <StandardButton refArray={refArray} text="Other Skills"></StandardButton>
            </Link>
            <Link>
            <StandardButton refArray={refArray} text="Projects"></StandardButton>
            </Link>
            <Link>
            <StandardButton refArray={refArray} text="Languages"></StandardButton>
            </Link>
            <Link to="Technologies" spy={true} smooth={true} duration="500">
            <StandardButton refArray={refArray} text="Technologies"></StandardButton>
            </Link>
        </TopButtonsSectionStyled>
    )
}

export default TopButtonsContainer;
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
}

/*
Functions for fading buttons out

  function fade(element) {
      var op = 1;
      var timer = setInterval(function () {
          if (op <= 0.1){
              clearInterval(timer);
              element.style.display = 'none';
          }
          element.style.opacity = op;
          element.style.filter = 'alpha(opacity=' + op * 100 + ")";
          op -= op * 0.1;
      }, 7);
  }

    function fadeButtonsOut(fade, refArray) {
        setTimeout(function () {
            fade(refArray[0].current);
        }, 50);
        setTimeout(function () {
            fade(refArray[1].current);
        }, 100);
        setTimeout(function () {
            fade(refArray[2].current);
        }, 150);
        setTimeout(function () {
            fade(refArray[3].current);
        }, 200);
        setTimeout(function () {
            fade(refArray[4].current);
        }, 250);
    }
*/

