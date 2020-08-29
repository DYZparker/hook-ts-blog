import * as React from 'react';
import { Col } from 'antd';
import { ToTopOutlined } from '@ant-design/icons'
import { Globalstyle, WrapperRow, WrapperBackTop } from './style'
import RouterList from './common/routerList'
import { BrowserRouter } from 'react-router-dom'
import Header from './common/header'
import Sider from './common/sider'
import Footer from './common/footer'
import { Store } from './store'

const App: React.FC = () => {
  return (
    <div className="App">
      <Globalstyle />
        <BrowserRouter>
          <Store>
            <Header />
            <WrapperRow justify="center">
              <Col className="main-left" xs={24} sm={24} md={24} lg={17} xl={11}>
                <RouterList />
              </Col>
              <Col className="main-right" xs={0} sm={0} md={0} lg={6} xl={4}>
                <Sider />
              </Col>
            </WrapperRow>
            <Footer />
          </Store>
        </BrowserRouter>
        <WrapperBackTop>
          <ToTopOutlined />
        </WrapperBackTop>
    </div>
  );
}

export default App;
