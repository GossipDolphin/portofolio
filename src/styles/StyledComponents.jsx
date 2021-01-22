import styled from 'styled-components';

export const CharacterAndText = styled.div`
    display: flex;
    @media screen and (min-width: 900px) {
    position: fixed;
    top: 70px;
    >img {
      width: 150px;
    }
  }
  @media screen and (max-width: 900px) {
    position: fixed;
    top: 60px;
    left: 0px;
  }
  >div>p{
      background-color:#616161;
      max-width: 240px;
      border-radius:6px;
      padding: 10px;
      color: white;
  }
  z-index: 10;
`;

export const StandardButtonStyled = styled.div`
    display: flex;
    >p {
      text-align: center;
      margin: 0 auto;
      height: 20px;
      padding-top: 13px;
    }
    opacity: 0;

`;

export const TopButtonsSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  height: 300px;
  max-width: 770px;
  margin: 0 auto;
  padding-top: 50px;
  >a>*{
    border-radius: 4px;
  }
  >a>div{
    background-color:#4D0043;
    width: 150px;
    height: 50px;
    color: white;
    margin: 0;
    :hover {
      background-color: #640057;
      cursor: pointer;
    }
  }
  >*{
    width: 150px;
    height: 50px;
  }
  >:nth-child(1){
    grid-row: 5 / 6;
    grid-column: 1/ 3;
  }
  >:nth-child(2){
    grid-row: 4 / 5;
    grid-column: 2/ 4;
  }
  >:nth-child(3){
    grid-row: 3 / 4;
    grid-column: 3/ 5;
  }
  >:nth-child(4){
    grid-row: 2 / 3;
    grid-column: 4/ 6;
  }
  >:nth-child(5){
    grid-row: 1 / 2;
    grid-column: 5/ 7;
  }
`;

export const TechnologiesSectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 280px;
  margin-top: 100px;
  border-radius:10px;

  >img{
    width: 190px;
    height: 120px;
    margin: 20px;
    opacity: 0;
  }
  >:nth-child(4){
    margin-top: 30px;
    height: 80px;
  }
  >:nth-child(5){
    margin-bottom: 0;
    margin-top: 30px;
  }
  >:nth-child(6){
    margin: 0;
    width: 300px;
    height: 170px;
  }
  >:last-child{
    width: 120px;
    margin-bottom: 0;
  }
`;

export const LanguagesSectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 350px;
  margin-right: 100px;
  >* {
    max-height: 100px;
    margin: 20px;
    border-radius: 5px;
    opacity: 0;
  }
`;

export const ProjectsSectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 100px;
  padding-top: 350px;
  margin-right: 100px;
  >*{
    margin: 20px;
  }
`;

export const ProjectCardStyled = styled.article`
height: 150px;
width: 250px;
  background-color: rgb(100, 0, 67, 0.4);
  border-radius: 5px;
`;