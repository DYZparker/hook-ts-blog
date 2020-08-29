import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
const Home = React.lazy(() => import('../../pages/home'))
const Detail = React.lazy(() => import('../../pages/detail'))
const TagArticleList = React.lazy(() => import('../../pages/tagArticleList'))
const Management = React.lazy(() => import('../../pages/management'))
const AboutMe = React.lazy(() => import('../../pages/aboutMe'))

const RouterList: React.FC = () => {
	return (
		<React.Suspense fallback={<></>}>
			<Switch>
				<Route path='/' exact component={Home}></Route>
				<Route path='/taglist/:tag' exact component={TagArticleList}></Route>
				<Route path='/detail/:id' exact component={Detail}></Route>
				<Route path='/management' exact component={Management}></Route>
				<Route path='/aboutme' exact component={AboutMe}></Route>
			</Switch>
		</React.Suspense>
	)
}

export default RouterList