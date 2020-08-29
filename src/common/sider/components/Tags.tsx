import * as React from 'react'
import { Link } from 'react-router-dom'
import { Tag, Divider } from 'antd'
import { TagOutlined } from '@ant-design/icons'
import { TagsWrapper } from '../style'
import { getSideInfoApi } from '../../../api/common'
import { IStore, StContext } from '../../../store'

const Tags: React.FC = () => {
	const store: IStore = React.useContext(StContext)
	const tagList = store.state.tagList

  React.useEffect(() => {
    getSideInfoApi().then((res) => {
			const result = res.data
			store.dispatch!({
				type: 'infoSide',
				tagList: result.tagList,
				linkList: result.linkList
			})
    })
	},[store.dispatch])

	return React.useMemo(() => {
		if(tagList && tagList.length > 0) {
			return (
				<TagsWrapper>
					<Divider>标签分类</Divider>
					{tagList.map((item) => {
						return (
							<Tag icon={<TagOutlined />} color={item.color} key={item.title}>
									<Link to={'/taglist/' + item.title} >
										{item.title}
									</Link>
							</Tag>
						)
					})}
				</TagsWrapper>
			)
		}else {
			return <></>
		}
  }, [tagList])
}

export default Tags