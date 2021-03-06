import React from 'react';
import { Table, Tag, Divider, Card, Row } from 'antd';
import BasicCheckboxTable from './BasicCheckTable';
import BasicZhanTable from './BasicZhanTable';
import BasicFixedTable from './BasicFixedTable';
import BreadcrumbCustom from './../../BreadcrumbCustom';

class BasicTable extends React.Component {

  state = {
    basicTitle: '基础表格',
    showHeader: true,
    basicSize: 'middle'
  }

  render() {

    const { basicTitle, showHeader, basicSize } = this.state;

    const columns = [
      {
        title: 'Nmae',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              )
            })}
          </span>
        )
      },
      {
        title: 'Action', 
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        )
      }
    ];

    const dataSoucre = [
      {
        key: '1',
        name: '小张',
        age: 22,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: '小李',
        age: 12,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '3',
        name: '小华',
        age: 18,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
    ];

    return(
      <div>
        <BreadcrumbCustom first='表格' second='基础表格' />
        {/* basic table */}
        <Row>
          <Card title={basicTitle}>
            <Table
              showHeader={showHeader}
              size={basicSize}
              dataSource={dataSoucre}
              columns={columns}
            />
          </Card>
        </Row>
        <div style={{marginTop: '20px'}}>
         <BasicCheckboxTable />
        </div>
        <div style={{marginTop: '20px'}}>
          <BasicZhanTable />
        </div>
        <div style={{marginTop: '20px'}}>
          <BasicFixedTable />
        </div>
      </div>
    )
  }
}

export default BasicTable;
