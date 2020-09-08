import * as React from 'react'
import { useHistory } from "react-router-dom"
import moment from 'moment'
import { Spin } from 'antd'
import { CalendarOutlined, TagsOutlined } from '@ant-design/icons'
import { DetailWrapper, ArtTitle, ArtIcon, ArtContent } from './style'
import marked from '../../utils/marked'
import 'highlight.js/styles/gradient-dark.css'
import { getArticleApi } from '../../api/article'
import { IArticle }	from '../../store'

const Detail: React.FC = () => {
  const initialArticle: IArticle = {
    _id: "",
    title: "",
    date: "",
    tags: [],
    img: "",
		summary: "",
		content: ""
	}
	let history = useHistory()
	const	artcleId = history.location.pathname.split('/').pop()
	const [article, setArticle] = React.useState<IArticle>(initialArticle)

	React.useEffect(() => {
		window.scrollTo(0,0)
		if(artcleId) {
			getArticleApi(artcleId).then((res) => {
				const result = res.data.data.article
				setArticle(result)
			})
		}
	},[artcleId])
	
	if(article._id) {
		return (
			<DetailWrapper>
				<ArtTitle>{article.title}</ArtTitle>
				<ArtIcon>
					<i><CalendarOutlined />{moment(article.date).format('YYYY-MM-DD')}</i>
					<i><TagsOutlined />{article.tags.join('、')}</i>
				</ArtIcon>
				{article.img ? <img src={article.img} alt={article.title}></img> : <></>}
				<ArtContent dangerouslySetInnerHTML={{ __html: marked(article.summary || '正在加载文章概述...') }} />
				<ArtContent dangerouslySetInnerHTML={{ __html: marked(article.content || '正在加载文章内容...') }} />
			</DetailWrapper>
		)
	}
	return <Spin />
	}

export default Detail