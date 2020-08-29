import styled from 'styled-components'

export const DetailWrapper = styled.div`
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

export const ArtTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 3rem 0;
`

export const ArtIcon = styled.div`
  color: #aaa;
  margin: 1rem 0;
  i {
    margin-right: 1.2rem;
  }
`

export const ArtContent = styled.div`
  margin: 3rem 0;
  line-height: 2;

  p,
  blockquote,
  ul,
  ol,
  dl,
  pre {
    margin-top: 0;
    margin-bottom: 0.6em;
  }

  h1,
  h2 {
    border-bottom: 1px solid #e2e2e2;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
      font-size: 24px;
  }

  h3 {
      font-size: 18px;
  }

  h4 {
      font-size: 16px;
  }

  h5 {
      font-size: 14px;
  }

  h6 {
      color: #777777;
      background-color: inherit;
      font-size: 14px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0 0 0.6em;
    font-weight: 600;

    text-indent: 0;

    &:target {
      padding-top: 4.5rem;
    }
  }

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul,
  ol {
    padding: 0.2em 0.8em;

    > li {
      line-height: 2;
      padding-left: 0.2em;
      margin-left: 0.2em;
      list-style-type: disc;

      > p {
        text-indent: 0;
      }

      > ul {
        &:last-child {
          margin-bottom: 0;
        }

        li {
          list-style-type: circle;

          > ul li {
            list-style-type: square;
          }
        }
      }
    }
  }

  > ul,
  ol {
    padding: 0 20px;
  }

  ol > li {
    list-style-type: decimal;
  }

  blockquote {
    margin: 0;
    margin-bottom: 0.6em;
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;

    p {
      text-indent: 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  pre{
    padding-left: 3.8em;
    font-family: Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 12px;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    border-radius: 4px;
    padding: 1em;
    line-height: 1.5;
    color: #ccc;
    background-color: #2d2d2d;
    overflow: auto;
    box-sizing: border-box;
    code {
      // padding: 0;
      // background-color: transparent;
      // color: inherit;
      // vertical-align: unset;
      // font-size: 1em;
      // text-align: left;
      // line-height: 1.5;
      // tab-size: 4;
    }
  }

  code {
    // background-color: #2d2d2d;
    // border-radius: 4px;
    // box-sizing: border-box;
    // padding: 1em;
    // line-height: 1.5;
    // color: #ccc;
  }


  hr {
    margin-bottom: 0.6em;
    height: 1px;
    background: #dadada;
    border: none;
  }

  table {
    width: 100%;
    border: 1px solid #ddd;
    margin-bottom: 0.6em;
    border-collapse: collapse;
    text-align: left;

    thead {
      background: #eee;
    }

    th,
    td {
      padding: 0.1em 0.4em;
      border: 1px solid #ddd;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    margin-bottom: 0.6em;
  }
`
