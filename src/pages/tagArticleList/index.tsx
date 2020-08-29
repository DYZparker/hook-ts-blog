import * as React from 'react'
import { useHistory } from "react-router-dom"
import ArticleCard from '../../common/articleCard'
import { Empty, Spin } from 'antd';
import { ListWrapper } from './style'
import { getArticleListApi } from '../../api/article'
import { IStore, StContext } from '../../store'

const TagArticleList: React.FC = () =>{
	let history = useHistory()
  const pathTagHistory = history.location.pathname.split('/').pop()
  const store: IStore = React.useContext(StContext)
  const tagArticleList = store.state.tagArticleList
  const pathTagStore = store.state.pathTag

  React.useEffect(() => {
		window.scrollTo(0,0)
    if(pathTagStore !== pathTagHistory) {
      getArticleListApi({page: 1, size: 100, search:{tags: pathTagHistory}}).then((res) => {
        const result = res.data.data
        store.dispatch!({
          type: 'infoTagArticleList',
          pathTag: pathTagHistory, 
          tagArticleList: result.articleList
        })
      })
    }
  },[pathTagHistory, pathTagStore, store.dispatch])
	
	return React.useMemo(() => {
    if(pathTagStore === pathTagHistory) {
      return (
        <ListWrapper>
          <div className="list-header">包含<span>{pathTagHistory}</span>的文章 ：</div>
          {tagArticleList ?
            tagArticleList.map((item) => {
              return (<ArticleCard article={item} key={item.title}/>)
            })
            : <Empty />
          }
        </ListWrapper>
      )
    }else {
      return <Spin />
    }
  }, [pathTagHistory, pathTagStore, tagArticleList])
}

export default TagArticleList