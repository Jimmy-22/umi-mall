import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

const menu = [
  { title: '首页', link: '/', icon: 'shouye' },
  { title: '订单列表', link: '/order-list', icon: 'shouye3' },
  { title: '购物车', link: '/cart', icon: 'shouye2' },
  { title: '我的', link: '/user', icon: 'shouye1' },
];

export default class BottomNav extends Component {
  render() {
    return (
      <TabBar>
        {menu.map(({ title, link, icon }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<span className={'iconfont icon-' + icon}></span>}
          />
        ))}
      </TabBar>
    );
  }
}
