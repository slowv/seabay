import './header.scss'
import {Button} from "antd";

import cart from '../../../../assets/img/cart.png';
import {SearchOutlined, UserOutlined} from "@ant-design/icons";

export const HeaderComponent = () => {
  return (
    <div className={'header-component'}>
      <div className={'item'}>
        <ul>
          <li>
            <a href="" className={'active'}>Trang chủ</a>
          </li>
          <li>
            <a href="">Thực đơn</a>
          </li>
          <li>
            <a href="">Về chúng tôi</a>
          </li>
          <li>
            <a href="">Tin tức</a>
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