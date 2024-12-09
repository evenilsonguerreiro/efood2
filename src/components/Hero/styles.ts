import styled from 'styled-components'

export const HeroBar = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }

  .text-overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 20px;
    color: white;
  }

  .text-overlay p {
    width: 101px;
    height: 33px;
    font-size: 32px;
    margin-bottom: 150px;
  }

  .text-overlay span {
    width: 676px;
    height: 33px;
    font-size: 32px;
  }
`
