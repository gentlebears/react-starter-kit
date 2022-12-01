import { createElement } from 'react';
import Button from './components/Button';
import './tailwind.css';

function App() {
	const todos = ['todo1', 'todo2', 'todo3'];
	/*
	const ul = createElement(
		'ul',
		null,
		todos.map((todo) => createElement('li', null, todo)),
	);
	const h1 = createElement('h1', null, 'gentle.com');
	return createElement(
		'main',
		{
			className: 'test',
			id: 'main',
		},
		h1,
		ul,
	);
*/

	const searchFuntion = () => {
		alert('hello');
	};
	return (
		<>
			<div style={{ padding: 20 }}>
				<Button>Buton Örneği</Button>
				<Button text='Buton Örneği' variant='success' />
				<Button text='Buton Örneği' variant='danger' />
				<Button text='Buton Örneği' variant='warning' />
			</div>

			<main className='test' id='main'>
				<h1 tabIndex='3' style={{ color: 'red', backgroundColor: 'yellow' }}>
					gentle.com
				</h1>
				<label htmlFor='search' tabIndex='2' onClick={searchFuntion}>
					Arama
				</label>
				<input type='text' id='search' tabIndex='1' />
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</main>
		</>
	);
}

export default App;
