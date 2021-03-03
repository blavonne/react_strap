import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import * as Apps from "../Content/Application";
import {Application} from "../Content/Application"
import PropTypes from "prop-types";
import ErrorPage from "../ErrorHandler/ErrorPage";

/*
У Route есть свои пропсы, которые содержат match и прочую инфу о самом компоненте,
а чтобы передать своё, надо использовать рендер и передавать свои параметры
<Route path='/:name' render={(props) => <App1 apps={apps} {...props}/>} />
здесь (props) => {...props} передаёт пропсы Route, а apps={apps} - пользовательские
данные)
 */

const Router = ({apps, resetActive}) => {
	return (
			<Switch>
				<Route exact path='/' component={Apps.Index}/>
				<Route exact path="/404" render={() => <ErrorPage errorMessage="Страницы не существует" resetActive={resetActive} />} />
				<Route exact path='/:name' render={(props) => <Application apps={apps} {...props}/>} />
				<Route render={() => <Redirect to="/404"/>} />
			</Switch>
	)
}

export default Router;

Router.propTypes = {
	apps : PropTypes.array
}