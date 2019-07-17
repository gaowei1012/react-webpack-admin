import React from 'react';
import BreadcrumbCustom from '../../BreadcrumbCustom';

class AsynchronousTable extends React.Component {
  render() {
    return (
      <div>
      <BreadcrumbCustom first='表格' second='异步表格' />
        AsynchronousTable
      </div>
    )
  }
}

export default AsynchronousTable;
