import styled from 'styled-components';

export const CharacterAndText = styled.div`
    display: flex;
    @media screen and (min-width: 900px) {
    position: fixed;
    top: 70px;
  }
  @media screen and (max-width: 900px) {
    position: fixed;
    top: 60px;
    left: 0px;
  }
  >div>p{
      background-color:#616161;
      max-width: 300px;
      border-radius:6px;
      padding: 10px;
      color: white;
  }
`;