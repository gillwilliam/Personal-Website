import React from 'react';
import Chip from 'material-ui/Chip';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onTouchTap` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class SkillChips extends React.Component {

  constructor(props) {
    super(props);
    this.state = {chipData: this.props.chip};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}

        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
      </MuiThemeProvider>
    );
  }
}
