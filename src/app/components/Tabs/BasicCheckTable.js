import React from 'react';
import { Table, Row, Card } from 'antd';

const columns = [
  {
    title: 'Nmae',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
];

const dataSocure = []
for(let i = 1; i < 46; i++) {
  dataSocure.push({
    key: i,
    name: `John Brown ${i}`,
    age: i,
    address: `New York No. ${i} Lake Park`
  })
}


class BasicCheckTable extends React.Component {

  state = {
    basictitle: '可选择表格',
    selectedRowKeys: [], // Check here to configure the default column
};
onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
};
render() {
    const { selectedRowKeys, basictitle } = this.state;
    const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
        selections: [{
            key: 'odd',
            text: '选择奇数列',
            onSelect: (changableRowKeys) => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                    if (index % 2 !== 0) {
                        return false;
                    }
                    return true;
                });
                this.setState({ selectedRowKeys: newSelectedRowKeys });
            },
        }, {
            key: 'even',
            text: '选择偶数列',
            onSelect: (changableRowKeys) => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                    if (index % 2 !== 0) {
                        return true;
                    }
                    return false;
                });
                this.setState({ selectedRowKeys: newSelectedRowKeys });
            },
        }],
        onSelection: this.onSelection,
    };

    return (
      <div>
        <Row>
          <Card title={basictitle}>
            <Table
              columns={columns}
              dataSource={dataSocure}
              rowSelection={rowSelection}
              bordered
            />
          </Card>
        </Row>
      </div>
    )
  }
}

export default BasicCheckTable;
