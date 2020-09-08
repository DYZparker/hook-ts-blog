import * as React from 'react'

export interface IMenu {
  title: string,
  path: string,
  children?: Array<IMenu>
}

interface ITopic {
  href: string
  src: string
  alt: string
}

export interface IArticle {
  _id: string
  title: string
  date: string
  tags: Array<string>
  img: string
  summary: string
  content?: string
}

interface ITag {
  title: string
  color: string
}

interface ILinkContent {
  id: number
  title: string
  src: string
  href: string
}

interface ILink {
  name: string
  content: Array<ILinkContent>
}

interface IState {
  menuList?: Array<IMenu>
  topicList?: Array<ITopic>
  articleList?: Array<IArticle>
  page?: number
  total?: number
  pathTag?: string
  tagArticleList?: Array<IArticle>
  tagList?: Array<ITag>
  linkList?: Array<ILink>
}

interface IAction {
  type: string
  topicList?: Array<ITopic>
  articleList?: Array<IArticle>
  page?: number
  total?: number
  pathTag?: string
  tagArticleList?: Array<IArticle>
  tagList?: Array<ITag>
  linkList?: Array<ILink>
}

export interface IStore {
  state: {
    menuList?: Array<IMenu>
    topicList?: Array<ITopic>
    articleList?: Array<IArticle>
    page?: number
    total?: number
    pathTag?: string
    tagArticleList?: Array<IArticle>
    tagList?: Array<ITag>
    linkList?: Array<ILink>
  }
  dispatch?: React.Dispatch<IAction>
}

const menuList: Array<IMenu> = [
  {
    "title": "博客首页",
    "path": "/"
  },
  {
    "title": "文章分类",
    "path": "/tagList",
    "children": [
      {
          "title": "H5",
          "path": "/tagList/html"
      },
      {
          "title": "Javascript",
          "path": "/tagList/javascript"
      },
      {
          "title": "React",
          "path": "/tagList/react"
      },
      {
          "title": "Vue",
          "path": "/tagList/vue"
      },
      {
          "title": "Node",
          "path": "/tagList/node"
      },
      {
          "title": "Other",
          "path": "/tagList/other"
      }
    ],
  },
  {
      "title": "后台管理",
      "path": "/management"
  },
  {
      "title": "关于我",
      "path": "/aboutme"
  }
]

const initialState: IState = {
  menuList: menuList,
  topicList: [],
  articleList: [],
  page: 1,
  total: 0,
  pathTag: '',
  tagArticleList: [],
  tagList: [],
  linkList: []
}

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'infoHome':
      return {
        ...state, 
        topicList: action.topicList, 
        total: action.total,
        articleList: action.articleList
      }
    case 'addHomeArticleList':
      if(action.page && state.articleList && action.articleList) {
        return {
          ...state, 
          page: action.page + 1, 
          articleList: state.articleList.concat(action.articleList)
        }
      }else {
        return state
      }
    case 'infoTagArticleList':
      return {
        ...state, 
        pathTag: action.pathTag, 
        tagArticleList: action.tagArticleList
      }
    case 'infoSide':
      return {
        ...state, 
        tagList: action.tagList,
        linkList: action.linkList
      }
    default:
      return state
  }
}

export const StContext = React.createContext<IStore>({
  state: {
    // menuList: menuList,
    topicList: [],
    articleList: [],
    page: 1,
    total: 0,
    pathTag: '',
    tagArticleList: [],
    tagList: [],
    linkList: []
  }
})

export const Store: React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <StContext.Provider value={{state, dispatch}}>
      {children}
    </StContext.Provider>
  )
}
