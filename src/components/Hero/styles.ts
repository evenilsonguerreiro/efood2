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
    top: 20px;
    color: white;
    z-index: 2;


    @media screen and (min-width: 1920px) and (min-height: 1080px) {
    .text-overlay {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
    }
  }

    p {
      width: 300px;
      height: 33px;
      font-size: 32px;
      top: 30px;
      left: 171px;
      position: absolute;
    }

    span {
      width: 676px;
      height: 33px;
      font-size: 32px;
      top: 187px;
      left: 171px;
      position: absolute;
    }
  }
`
