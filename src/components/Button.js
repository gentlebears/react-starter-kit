import classNames from 'classnames';

function Button({ children, text, variant = 'default' }) {
	return (
		<button
			className={classNames({
				'p-4 h-10 flex items-center rounded': true,
				'bg-gray-200': variant === 'default',
				'bg-green-500 text-white': variant === 'success',
				'bg-red-500 text-white': variant === 'danger',
				'bg-yellow-300 text-yellow-800': variant === 'warning',
			})}
		>
			{text}
		</button>
	);
}
export default Button;
