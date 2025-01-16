import styled from 'styled-components'

export const HeroBar = styled.div`
  position: absolute;
  width: 100%;
  height: 280px;
  top: 162px;

  img {
    width: 100%;
  }

  .text-overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 20px;
    color: white;
  }

  .text-overlay p {
    width: 101px;
    height: 33px;
    font-size: 32px;
    top: 30px;
    left: 180px;
    position: absolute;
  }

  .text-overlay span {
    width: 676px;
    height: 33px;
    font-size: 32px;
    top: 200px;
    left: 180px;
    position: absolute;
  }
`
