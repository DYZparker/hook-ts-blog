import * as React from 'react'
import Topic from './components/Topic'
import ArticleCard from '../../common/articleCard'
import { ListWrapper } from './style'
import { SmileOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { getCommonInfoApi } from '../../api/common'
import { getArticleListApi } from '../../api/article'
import { IStore, StContext } from '../../store'

const Home: React.FC = () => {
  const store: IStore = React.useContext(StContext)
  const articleList = store.state.articleList
  let pageStore = store.state.page
  let totalStore = store.state.total

  React.useEffect(() => {
    if(articleList && articleList.length === 0) {
      getCommonInfoApi().then((res) => {
        const result = res.data.data
        store.dispatch!({
          type: 'infoHome',
          topicList: result.topicList,
          total: result.total,
          articleList: result.articleList
        })
      })
    }
  },[articleList, store.dispatch])

  //文章列表懒加载
  React.useEffect(() => {
    const scrollMore = () => {
      if(pageStore) {
        getArticleListApi({page: pageStore + 1, size: 5, search:{tags: ''}}).then((res) => {
          const result = res.data.data
          store.dispatch!({
            type: 'addHomeArticleList',
            page: pageStore,
            articleList: result.articleList
          })
        })
      }
    }
    const showMore = () => {
      const scrollY = document.documentElement.scrollTop || document.body.scrollTop // 滚动条在Y轴上的滚动距离
      const vh = document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight // 页面的可视高度（能看见的）
      const allHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) // 页面的总高度（所有的）
      if (scrollY + vh >= allHeight) { // 当滚动条滑到页面底部
        if(articleList && totalStore !== articleList.length) {
          scrollMore()
        }
      }
    }
    window.addEventListener('scroll', showMore)
    return () => {
      window.removeEventListener('scroll', showMore)
    }
  },[totalStore, pageStore, articleList, store.dispatch])
	
	return React.useMemo(() => {
    if(articleList && articleList.length > 0) {
      return (
        <>
          <Topic />
          <ListWrapper>
            <div className="list-header">最新文章</div>
            {
              articleList.map((item) => {
                return (<ArticleCard article={item} key={item.title}/>)
              })
            }
            {
              totalStore === articleList.length ? 
              <div className="list-over"><SmileOutlined /> 已经是最后一篇了 <SmileOutlined /></div> : 
              <div className="list-more"><ArrowDownOutlined /> 下拉加载更多 <ArrowDownOutlined /></div>
            }
          </ListWrapper>
        </>
      )
    }else {
      return <></>
    }
  }, [totalStore, articleList])
}

export default Home