import { Colors } from '@blueprintjs/core';

const Screen = ({ children }) => (
	<div className="screen">
		{children}

		<style jsx>
			{`
				.screen {
					background: ${Colors.LIGHT_GRAY5};
					padding: 1rem 2em;
					min-height: 100vh;
					min-width: 100vw;
				}
			`}
		</style>
	</div>
);

export default Screen;
