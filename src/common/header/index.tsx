import * as React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { HeaderWrapper, HeaderTitle } from './style'
import MenuList from './components/MenuList'
import logoImg from '../../statics/image/logo.png'

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Row justify="center">
				<Col xs={24} sm={24} md={10} lg={12} xl={9}>
					<Link to='/'>
						<HeaderTitle><img src={logoImg} alt='logo' /></HeaderTitle>
					</Link>
				</Col>
				<Col xs={0} sm={0} md={14} lg={12} xl={6}>
					<MenuList />
				</Col>
			</Row>
		</HeaderWrapper>
	)
}

export default Header