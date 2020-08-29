import styled from 'styled-components'

export const TopicWrapper = styled.div`
  overflow: hidden;
  height: 17.5rem;
  line-height: 17.5rem;
  text-align: center;
  border-radius: .5rem;
  box-sizing: border-box;
  img {
    width: 100%;
  }
`

export const ListWrapper = styled.div`
  background-color: #fff;
  margin-top: 1.7rem;
  border-radius: .3rem;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: .3rem;
  .list-header{
    font-size: 1.1rem;
    padding: 1rem;
  }
  .list-more, .list-over{
    border-top: 1px lightgrey solid;
    color: #1e90ff;
    font-size: 1.2rem;
    padding: 2rem;
    text-align: center;
  }
`
