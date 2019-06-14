import React from 'react';
import { DatePicker, Row, Col, Card } from 'antd';

const { RangePicker, MonthPicker, WeekPicker } = DatePicker;

class BasicDatePircker extends React.Component {


  onChange = (dates, dateStrings) => {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  render() {
    return (
      <div>
        <Row style={{marginTop: '20px'}}>
          <Col span={10}>
            <Card title='基础用法'>
            <DatePicker onChange={onChange} />
            <br />
            <MonthPicker onChange={onChange} placeholder="Select month" />
            <br />
            <RangePicker onChange={onChange} />
            <br />
            <WeekPicker onChange={onChange} placeholder="Select week" />
            </Card>
          </Col>
          <Col span={10} style={{marginLeft: '30px'}}>
          <RangePicker
            ranges={{
              Today: [moment(), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
            }}
            onChange={onChange}
          />
          <br />
          <RangePicker
            ranges={{
              Today: [moment(), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
            }}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
            onChange={onChange}
          /> 
          </Col>
        </Row>
      </div>
    )
  }
}

export default BasicDatePircker;
