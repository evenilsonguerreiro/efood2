import styled from 'styled-components'

export const HeroBar = styled.div`
  position: absolute;
  width: 100%;
  height: 280px;
  top: 162px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .text-overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: white;
    z-index: 2;
    text-align: center;

    p {
      font-size: 32px;
<<<<<<< HEAD
      top: 30px;
      position: absolute;
=======
      margin-bottom: 10px;
>>>>>>> c46237503b4eb3996ef28830e62a354db0b32179
    }

    span {
      font-size: 32px;
<<<<<<< HEAD
      top: 187px;
      position: absolute;
=======
    }
  }

  @media screen and (min-width: 1370px) and (min-height: 1080px) {
    .text-overlay {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
>>>>>>> c46237503b4eb3996ef28830e62a354db0b32179
    }
  }
`
