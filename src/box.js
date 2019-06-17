import React from 'react';
import {render, Color} from 'ink';
import Box from 'ink-box';

render(
	<Box borderStyle="double" borderColor="cyan" float="center" padding={2}>
		I Love <Color magenta>You</Color>
	</Box>
);