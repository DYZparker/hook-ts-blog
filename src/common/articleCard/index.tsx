import * as React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { CalendarOutlined, TagsOutlined } from '@ant-design/icons'
import { CardWrapper } from './style'
import { IArticle }	from '../../store'

interface propsType {
	article: IArticle
}

const ArticleCard = (props: propsType) => {
	const article = props.article
	return (
		<CardWrapper>
			<div className="card-title"><Link to={'/detail/' + article._id}>{article.title}</Link></div>
			<div className="card-icon">
				<i><CalendarOutlined />{moment(article.date).format('YYYY-MM-DD')}</i>
				<i><TagsOutlined />{article.tags.join('、')}</i>
			</div>
			<div className="card-context">
				{article.img ? <img src={article.img} alt={article.title}></img> : <></>}
				<p>{article.summary}</p>
			</div>
			<div className="card-go"><Link to={'/detail/' + article._id}>查看全文 &gt; </Link></div>
		</CardWrapper>
	)
}

export default ArticleCard