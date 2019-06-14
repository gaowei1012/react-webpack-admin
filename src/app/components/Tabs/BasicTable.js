import React from 'react';
import { Table, Tag, Divider } from 'antd';

class BasicTable extends React.Component {

  render() {

    const columns = [
      {
        title: 'Nmae',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: 'Age',
        dataIndex: 'gae',
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
      <div style={{margin: '10px 10px 10px 10px'}}>
        <Table showHeader size='middle' dataSource={dataSoucre} columns={columns} />
      </div>
    )
  }
}

export default BasicTable;
