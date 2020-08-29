import * as React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd'
import { TopicWrapper } from '../style'
import { IStore, StContext } from '../../../store'

const Topic: React.FC = () => {
  const store: IStore = React.useContext(StContext)
	const topicList = store.state.topicList

	//Topic包裹于Home组件中，Home的render组件已经用useMemo返回，则此处可不重复
	return (
		<TopicWrapper>
			<Carousel autoplay>
				{topicList ?
					topicList.map((item) => {
						return (<div key={item.alt}>
							<Link to={item.href}><img src={item.src} alt={item.alt} /></Link>
						</div>)
					})
					: <></>
				}
			</Carousel>
		</TopicWrapper>
	)
}

export default Topic