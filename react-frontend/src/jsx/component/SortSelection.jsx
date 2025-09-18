import React from 'react';
import ListGrid from 'jsx/control/grid/list/ListGrid';
import CatListTitle from 'jsx/control/text/CatListTitle';
import GeneralDropbox from 'jsx/control/dropbox/GeneralDropbox';

class SortSelection extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sortManner: '',
      sortMannerOptions: this.props.sortMannerOptions
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.props.onChange(value));
  }

  render() {
    return (
      <ListGrid>
        <CatListTitle>
          商品列表
        </CatListTitle>
        
                <GeneralDropbox
                  id="sortManner"
                  label={'排序方式'}
                  value={this.state.sortManner}
                  options={this.state.sortMannerOptions}
                  onChange={this.handleChange}
                />
      </ListGrid>
    );
  }
}

export default SortSelection;
