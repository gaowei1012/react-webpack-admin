/**
 * 高级表格
 */

import React from 'react';
import AdvancedFixedColTable from './AdvabceFixedColTable';
import AdvancedFixedTitleAndColTable from './AdvancedFixedTitleAndColTable';
import AdvancedEditTable from './AdvancedEditTable';

class AdvancedTable extends React.Component {
  render() {
    return(
      <div>
        <div style={{marginTop: '20px'}}>
          <AdvancedFixedColTable />
        </div>
        <div style={{marginTop: '20px'}}>
          <AdvancedFixedTitleAndColTable />
        </div>
        <div style={{marginTop: '20px'}}>
          <AdvancedEditTable />
        </div>
      </div>
    )
  }
}

export default AdvancedTable;
