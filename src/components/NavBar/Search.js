import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Search = ({ term, apps, update }) => {
	const DataSearch = e => {
		console.log('val', e.target.value);
		const value = e.target.value.toLowerCase();

		const filter = apps.filter(app => {
			return app.name.toLowerCase().includes(value);
		});
		console.log('filter', filter);
		update(filter);
	}

	return (
		<FormGroup>
			<Input
				type="search"
				name="search"
				id="exampleSearch"
				placeholder="Поиск по категориям"
				onChange={DataSearch}
				value={term}
			/>
		</FormGroup>
	)
}

export default Search;