import * as React from 'react';

import Logout from '../auth/Logout';

export interface INavProps {
}

export default function Nav(props: INavProps) {
	return (
		<div>
			<Logout />
		</div>
	);
}
