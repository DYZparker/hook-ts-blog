import * as React from 'react'
import { Avatar, Popover, Divider } from 'antd'
import { AutorWrapper } from '../style'
import { UserOutlined, GithubOutlined, QqOutlined, WechatOutlined, MailOutlined } from '@ant-design/icons'

const Author: React.FC = () => {
	return (
		<AutorWrapper>
			<Avatar size={100} icon={<UserOutlined />} src="http://122.51.57.99:7777/image/author.jpg" />
			<div className="author-content">
				<p>Web前端学习，Vue、React框架实践</p>
				<Divider>社交帐号</Divider>
				<div className="author-icon">
					<Popover content="https://github.com/DYZparker">
						<GithubOutlined />
					</Popover>
					<Popover content="182345999">
						<QqOutlined />
					</Popover>
					<Popover content="d13880777416">
						<WechatOutlined />
					</Popover>
					<Popover content="182345999@qq.com">
						<MailOutlined />
					</Popover>
				</div>
			</div>
		</AutorWrapper>
	)
}

export default Author