import * as React from 'react'
import { Button , Typography, Divider } from 'antd';
import { ManagementWrapper } from './style'

const { Title, Paragraph } = Typography

const Management: React.FC = () => {
	React.useEffect(() => {
		window.scrollTo(0,0)
  },[])
  
  return (
    <ManagementWrapper>
      <Title level={3}>管理链接</Title>
      <Button type="primary">前往管理系统</Button>
      <Divider />
      <Title level={3}>管理介绍</Title>
      <Paragraph>
        博客管理系统是由Vue + Element写的一个中台，有登录系统和Token验证，管理前台博客的轮播图、标签、链接，还有文章的增删改等
      </Paragraph>
      <Divider />
      <Title level={3}>管理预览</Title>
      <Paragraph>
        <ul>
          <li>前台：react-hooks、typeScript、antd</li>
          <li>中台：vue、element</li>
          <li>后台：koa2、mangoDB</li>
        </ul>
      </Paragraph>
    </ManagementWrapper>
  )
}

export default Management