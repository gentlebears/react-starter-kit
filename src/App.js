import { createElement, useState } from 'react';
import Button from './components/Button';
import './tailwind.css';
import Tab from './components/Tab';

function Profile() {
	return <div>Burası profile tabı</div>;
}

function App() {
	const todos = ['todo1', 'todo2', 'todo3'];

	const [activeTab, setActiveTab] = useState();
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
				<button onClick={() => setActiveTab(2)}>Aktif Tabı Değiştir</button>
				<Tab activeTab={activeTab} onChange={(tabIndex) => setActiveTab(tabIndex)}>
					<Tab.Panel title='Profil'>
						<Profile />
					</Tab.Panel>
					<Tab.Panel title='Hakkında'>2. tab</Tab.Panel>
					<Tab.Panel title='Ayarlar'>3. tab</Tab.Panel>
				</Tab>
				{activeTab === 2 && <div>Ekstra Alan</div>}
			</div>

			<div style={{ padding: 20 }}>
				<Button>Buton Örneği</Button>
				<Button variant='success'>Buton Örneği</Button>
				<Button variant='danger'>Buton Örneği</Button>
				<Button variant='warning'>Buton Örneği</Button>
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
