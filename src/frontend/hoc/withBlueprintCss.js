import Head from 'next/head';
import { nest } from 'recompose';

const withBlueprintCss = component =>
	nest(
		({ children }) => (
			<div>
				<Head>
					<link
						href="https://unpkg.com/normalize.css@^4.1.1"
						rel="stylesheet"
					/>
					<link
						href="https://unpkg.com/@blueprintjs/core@^1.33.0/dist/blueprint.css"
						rel="stylesheet"
					/>
				</Head>
				{children}
			</div>
		),
		component
	);

export default withBlueprintCss;
