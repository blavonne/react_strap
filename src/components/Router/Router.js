import React from "react";
import {Route, Switch} from "react-router-dom";
import * as Apps from "../Content/AppsContent";
import App2 from "../Content/AppsContent"

/*
<Route path={"/department/:departmentid"} component={DepartmentIndex} />\
departmentid придёт в DepartmentIndex
 */


const Router = () => {
	return (
		<div className="Content">
			<Switch>
				<Route exact path='/' component={Apps.Index}/>
				<Route path='/Application1' component={Apps.App1}/>
				<Route path='/Application2' component={Apps.App2}/>
				<Route path='/Application3' component={Apps.App3}/>
				<Route path='/Application4' component={Apps.App4}/>
				<Route path='/Application5' component={Apps.App5}/>
				<Route path='/Application6' component={Apps.App6}/>
				<Route path='/Application7' component={Apps.App7}/>
			</Switch>
		</div>
	)
}

// const RouteList = (apps) => {
// 	console.log('RouteList', apps)
// 	console.log('RouteList', typeof apps)
// 	return (
// 		<Switch>
// 			<Route exact path='/' component={Apps.Index}/>
// 			{apps.apps.map((app, index) => {
// 				return (
// 					<Route path={app.name} render={() => <App2 name={app.name}/>} key={index}/>
// 				)
// 			})}
// 		</Switch>
// 	)
// }
//
// const Router = (apps) => {
// 	console.log('Router', apps)
// 	console.log('Router', typeof apps)
// 	return (
// 		<div className="Content">
// 			<RouteList apps={apps}/>
// 		</div>
// 	)
// }

export default Router;