// import logo from './logo.svg';
import styles from './App.module.css';
import Test from './Test';
import { Title } from './Components';
import Bootstrap from './Bootstrap';
import Tailwind from './Tailwind';
import './tailwind.css';

function App() {
	return (
		<div className={styles.App}>
			<Title>{process.env.NODE_ENV}</Title>
			<Title theme='dark'>{process.env.NODE_ENV}</Title>
			<p>{process.env.REACT_APP_API_URL}: Test</p>
			<Test />
			{process.env.NODE_ENV === 'production' && (
				<>
					<img src='/logo192.png' alt='' />
				</>
			)}
			<Bootstrap />
			<Tailwind />
		</div>
	);
}

export default App;
