import React from 'react';
import { DatePicker, Row, Col, Card } from 'antd';
import moment from 'moment';
import BreadcrumbCustom from '../BreadcrumbCustom';

const { RangePicker, MonthPicker, WeekPicker } = DatePicker;

class BasicDatePircker extends React.Component {
  onChanged = (dates, dateStrings) => {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  };

  render() {
    return (
      <div>
        <BreadcrumbCustom first='日历' second='datePicker' />
        <Row style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card title="基础用法">
              <DatePicker onChange={this.onChanged} />
              <br />
              <MonthPicker onChange={this.onChanged} placeholder="Select month" />
              <br />
              <RangePicker onChange={this.onChanged} />
              <br />
              <WeekPicker onChange={this.onChanged} placeholder="Select week" />
            </Card>
          </Col>
          <Col span={12}>
            <Card title='常用用法' style={{marginLeft: '10px'}}>
              <RangePicker
                ranges={{
                  Today: [moment(), moment()],
                  'This Month': [moment().startOf('month'), moment().endOf('month')]
                }}
                onChange={this.onChanged}
              />
              <br />
              <RangePicker
                ranges={{
                  Today: [moment(), moment()],
                  'This Month': [moment().startOf('month'), moment().endOf('month')]
                }}
                showTime
                format="YYYY/MM/DD HH:mm:ss"
                onChange={this.onChanged}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BasicDatePircker;
