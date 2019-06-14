import React from 'react';
import { Table, Input, Button, Popconfirm, Form, Row, Card } from 'antd';
import './index.less';

// create edit for react
const EditTableContext = React.createContext();

const EditTableRow = ({ form, index, ...props }) => (
  <EditTableContext.Provider value={form}>
    <tr {...props} />
  </EditTableContext.Provider>
)

const EditTableFormRow = Form.create()(EditTableRow);

// class editableCell fun
class EditableCell extends React.Component {
  state = {
    editing: false
  }

  // edit function
  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({editing}, () => {
      if (editing) {
        this.input.focus()// 失去焦点
      }
    })
  } 

  // save function
  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((err, value) => {
      if (err && err[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit(); // 调用编辑方法
      handleSave({...record, ...value})// 传回给父组件
    })
  }

  renderCell = form => {
    this.form = form;
    const { title, dataIndex, children, record } = this.props;
    const { editing } = this.state;

    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    )
  }

  render() {
    const { title, children, dataIndex, record, handleSave, index, editable, ...restProos } = this.props;
    return (
      <td {...restProos}>
        {
          editable ? (<EditTableContext.Consumer>{this.renderCell}</EditTableContext.Consumer>) : (children)
        }
      </td>
    )
  }

}



class AdvancedEditTable extends React.Component {

  constructor(props) {
    super(props)

    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a href="javascript:;">Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];

    this.state = {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
      ],
      count: 2,
    }
  }

  // handleAdd function
  handleAdd = () => {
    const { count, dataSource } = this.state;
    // 添加一个td的数据源
    const newSocure = {
      key: count,
      name: `Add Edit Name ${count}`,
      age: count,
      address: `Add Edit Address no.${count}`
    }
    // 将添加的数据源更新渲染
    this.setState({
      dataSource: [...dataSource, newSocure],
      count: count + 1
    })
  }

  handleSave = row => {
    const newSocure = [...this.state.dataSource];
    const index = newSocure.findIndex((item => row.key === item.key)) // 过滤出每一项
    const item = newSocure[index] // 每一项的数组
    newSocure.splice(index, 1, {
      ...item,
      ...row
    })
    // 删除完后的td表格数
    this.setState({dataSource: newSocure})
  }

  // 删除一个tr行(一个表格行)
  handleDelete = key => {
   // 拿到dataScoucre中的内容展开项
   const dataSource = [...this.state.dataSource];
   // 删除选中项
   this.setState({
     dataSource: dataSource.filter(item => item.key !== key)
   })
  }


  render() {
    const { dataSource } = this.state;

    const components = {
      body: {
        row: EditTableFormRow,
        cell: EditableCell
      }
    }

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      }
    })

    return (
      <div>
        <Row>
          <Card title='可编辑表格'>
            <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
              Add a row
            </Button> 
            <Table
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns}
            />
          </Card>
        </Row>
      </div>
    )
  }
}


export default AdvancedEditTable;
