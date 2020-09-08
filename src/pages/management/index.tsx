import * as React from 'react'
import { Button , Typography, Divider } from 'antd';
import { ManagementWrapper } from './style'

const { Title, Paragraph } = Typography

const Management: React.FC = () => {
  const arr = Array.from(new Array(7)).map((item, index) => {
    return "http://122.51.57.99:7777/image/img" + (index + 1) + ".jpg"
  })
	React.useEffect(() => {
		window.scrollTo(0,0)
  },[])

  return (
    <ManagementWrapper>
      <Title level={3}>链接</Title>
      <Button type="primary" href="http://dengyunzhong.com:8888/" target="_blank">前往管理系统</Button>
      <Divider />
      <Title level={3}>介绍</Title>
      <Paragraph>
        博客管理系统是由Vue + Element写的一个中台，有登录系统和Token验证，管理前台博客的轮播图、标签、链接，还有文章的增删改等
      </Paragraph>
      <Divider />
      <Title level={3}>预览</Title>
      <Paragraph>
        {
          arr.map((item) => {
            return (<img src={item} alt={item} key={item}></img>)
          })
        }
      </Paragraph>
    </ManagementWrapper>
  )
}

export default Management