import { Title } from './Components';
import Bootstrap from './Bootstrap';
import Tailwind from './Tailwind';
// import logo from './logo.svg';
// import './tailwind.css';
import styles from './App.module.css';
import Test from './Test';
import './style.scss';

function Styles() {
	<div className={styles.App}>
		<Title>{process.env.NODE_ENV}</Title>
		<p className='env'>
			<span>Test</span>
		</p>
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
	</div>;
}

export default Styles;
