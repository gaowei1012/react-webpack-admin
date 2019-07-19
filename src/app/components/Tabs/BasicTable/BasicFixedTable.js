import React from 'react';
import { Row, Card, Table } from 'antd';

const data = [];
for (let i = 1; i< 23; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: i,
    address: `London, Park Lane no. ${i}`
  })
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  }
]

class BasicFixedTable extends React.Component {
  render() {
    return (
      <Row>
        <Card title='固定表头'>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={{pageSize: 50}}
            scroll={{y: 250}}
          />
        </Card>
      </Row>
    )
  }
}


export default BasicFixedTable;
