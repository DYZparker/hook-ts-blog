import * as React from 'react'
import { Avatar, Tabs, List, Divider } from 'antd'
import { LinkBoxWrapper } from '../style'
import { IStore, StContext } from '../../../store'

const { TabPane } = Tabs

const LinkBox: React.FC = () => {
	const store: IStore = React.useContext(StContext)
	const linkList = store.state.linkList

	return (
		<LinkBoxWrapper>
			<Divider>相关链接</Divider>
			<Tabs defaultActiveKey="javascript" animated={true} centered>
				{linkList ?
					linkList.map((item) => {
						return (
							<TabPane tab={item.name} key={item.name}>
								<List
									itemLayout="horizontal"
									dataSource={item.content}
									renderItem={i => (
										<List.Item>
											<List.Item.Meta
												avatar={<Avatar shape="square" src={i.src} />}
												title={<a href={i.href} target="_blank" rel="noopener noreferrer">{i.title}</a>}
												// description="Ant Design, a design language"
											/>
										</List.Item>
									)}
								/>
							</TabPane>
						)
					})
					: <></>
				}
			</Tabs>
		</LinkBoxWrapper>
	)
}

export default LinkBox