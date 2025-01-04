import './header.scss'
import {Button, Dropdown, MenuProps, Space} from "antd";

import cart from '../../../../assets/img/cart.png';
import logo from '../../../../assets/img/logo.png';
import {DownOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";

export const HeaderComponent = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Đặt tiệc
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Khách đoàn
        </a>
      ),
    }
  ];

  return (
    <div className={'header-component'}>
      <div className={'item'}>
        <ul>
          <li>
            <img src={logo} alt="" className={'logo'}/>
          </li>
          <li>
            <a href="#" className={'active'}>Trang chủ</a>
          </li>
          <li>
            <a href="#">Thực đơn</a>
          </li>
          <li>
            <Dropdown menu={{items}}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Dịch vụ
                  <DownOutlined size={1}/>
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <a href="#">Về chúng tôi</a>
          </li>
          <li>
            <a href="#">Tin tức</a>
          </li>
          <li>
            <Button type='primary' className={'booking-now'}>Đặt tiệc ngay</Button>
          </li>
        </ul>
      </div>
      <div className={'item'}>
        <div className={'box-input'}>
          <input type="text" id={'search'} required />
          <label htmlFor="search">Tìm kiếm món ăn</label>
          <SearchOutlined />
        </div>
        <div className='box-account'>
        <span><UserOutlined /></span> Tài khoản
        </div>
        <div className='box-cart'>
          <div className={'label'}>3</div>
          <img src={cart} alt=""/>
        </div>
      </div>
    </div>
  )
}