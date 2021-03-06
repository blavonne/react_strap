import React from 'react';
import SearchLogo from './assets/search.svg';
import { InputGroup, Input } from 'reactstrap';

const Search = ({ apps, filter }) => {
	const DataSearch = e => {
		const value = e.target.value.toLowerCase();
		const mask = apps.filter(app => {
			return app.name.toLowerCase().includes(value);
		}).map(app => app.id);
		filter(mask);
	}

	return (
		<InputGroup className="form-control Search">
			<Input
				type="search"
				name="search"
				id="exampleSearch"
				placeholder="Поиск по категориям"
				onChange={DataSearch}
				className="searchArea"
			/>
				<img src={SearchLogo} alt="" title="Search"/>
		</InputGroup>
	)
}

export default Search;