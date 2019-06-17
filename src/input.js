import React from 'react';
import { render, Box } from 'ink';
import TextInput from 'ink-text-input';

class SearchQuery extends React.Component {
	constructor() {
    super();
		this.state = {
			query: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
  }
  
	handleChange(query) {
		this.setState({query});
  }

  handleSubmit(){
    console.log("reder")
    process.exit(0);
  }

  render() {
		return (
			<Box>
				<Box marginRight={1}>
					Enter your query:
				</Box>
        <TextInput
          mask="*"
          highlightPastedText={true}
          showCursor={true}
          placeholder={'what are you doing?'}
					value={this.state.query}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
				/>
			</Box>
		);
  }
  
}

render(<SearchQuery/>);