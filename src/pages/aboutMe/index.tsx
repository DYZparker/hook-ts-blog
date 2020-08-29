import * as React from 'react'
import { Timeline, Typography, Divider } from 'antd';
import { ManOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { AboutMeWrapper } from './style'

const { Title, Paragraph, Text } = Typography

const AboutMe: React.FC = () => {
  
	React.useEffect(() => {
		window.scrollTo(0,0)
  },[])
  
  return (
    <AboutMeWrapper>
      <Title level={2}>博客介绍</Title>
      <Paragraph>
        此博客为个人搭建，挂载于腾讯云服务器，实践+笔记
      </Paragraph>
      <Title level={4}>建站应用</Title>
      <Paragraph>
        <ul>
          <li>前台：react-hooks、typeScript、antd</li>
          <li>中台：vue、element</li>
          <li>后台：koa2、mangoDB</li>
        </ul>
      </Paragraph>

      <Divider />
      <Title level={4}>等待施工</Title>
      <Paragraph>
        <Text>二零二零年</Text>
        <ul>
          <li>评论列表+登录系统</li>
          <li>文章目录导航栏</li>
          <li>SSR服务端渲染</li>
        </ul>
      </Paragraph>

      <Divider />
      <Title level={4}>个人时间轴</Title>
      <Timeline mode="alternate">
        <Timeline.Item dot={<ManOutlined style={{ fontSize: '16px' }} />}>Born in 1987-09-12</Timeline.Item>
        <Timeline.Item color="green">小学、初中就读于碑垭小学、江口小学、碑垭中学</Timeline.Item>
        <Timeline.Item color="green">2006年毕业于剑阁中学</Timeline.Item>
        <Timeline.Item color="green">2010年毕业于四川师范大学成都学院自动化专业</Timeline.Item>
        <Timeline.Item>2010-2013 攀成钢自动化部实习、工作</Timeline.Item>
        <Timeline.Item>2013-2017 四川成焊宝玛焊接装备工程有限公司自动化部</Timeline.Item>
        <Timeline.Item>2017至今web前端</Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
          现居成都ing
        </Timeline.Item>
      </Timeline>
    </AboutMeWrapper>
  )
}

export default AboutMe