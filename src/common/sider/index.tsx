import * as React from 'react'
import { SiderWrapper } from './style'
import { Affix } from 'antd'
import Author from './components/Author'
import Tags from './components/Tags'
import LinkBox from './components/LinkBox'

const Sider: React.FC = () => {
	return (
		<SiderWrapper>
			<Author />
			<Affix offsetTop={50}>
				<div>
					<Tags />
					<LinkBox />
				</div>
			</Affix>
		</SiderWrapper>
	)
}

export default Sider
