import { Triangle } from 'react-loader-spinner';

const Loader = () => (
	<Triangle
		visible={true}
		height='40'
		width='40'
		color='#f4c550'
		ariaLabel='triangle-loading'
		wrapperStyle={{}}
		wrapperClass='loader'
	/>
);

export default Loader;
