/**
 * 高级表格
 */

import React from 'react';
import AdvancedFixedColTable from './AdvabceFixedColTable';
import AdvancedFixedTitleAndColTable from './AdvancedFixedTitleAndColTable';
import AdvancedEditTable from './AdvancedEditTable';
import BreadcrumbCustom from '../../BreadcrumbCustom';

class AdvancedTable extends React.Component {
  render() {
    return(
      <div>
      <BreadcrumbCustom first='表格' second='高级表格' />
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
