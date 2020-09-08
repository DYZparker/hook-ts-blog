import styled from 'styled-components'

export const SiderWrapper = styled.div`
  margin-left: 1.7rem;
`

export const AutorWrapper = styled.div`
  text-align: center;
  border-radius: .3rem;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: 1.7rem;
  overflow: hidden;
  .author-content{
    margin-top: 2rem;
    p {
      font-size: .8rem;
    }
    .author-icon{
      color: inherit;
      display: flex;
      justify-content: space-around;
      span {
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
  }
`

export const TagsWrapper = styled.div`
  border-radius: .3rem;
  background-color: #fff;
  margin-top: 1.7rem;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: .5rem;
  overflow: hidden;
  >span{
    font-size: .7rem;
    margin: .3rem .3rem;
  }
`

export const LinkBoxWrapper = styled.div`
  border-radius: .3rem;
  background-color: #fff;
  margin-top: 1.7rem;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: .5rem;
  overflow: hidden;
`

