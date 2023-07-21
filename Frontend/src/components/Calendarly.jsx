import { useState } from 'react';
import Calendar from 'react-calendar';

const Calendarly = () => {
	const [value, setValue] = useState(new Date());

	function onChange(nextValue) {
		setValue(nextValue);
	}

	return (
		<>
			<Calendar onChange={onChange} value={value} />
		</>
	);
};

export default Calendarly;
