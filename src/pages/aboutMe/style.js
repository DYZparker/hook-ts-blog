import styled from 'styled-components'

export const AboutMeWrapper = styled.div`
  @keyframes fadeInBottom{
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInBottom;
  background-color: #fff;
  border-radius: .3rem;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: 1rem;
  overflow: hidden;
  img{
    width: 100%;
  }
`
