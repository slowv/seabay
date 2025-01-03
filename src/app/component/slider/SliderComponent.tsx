import {Carousel} from "antd";
import './slider.scss'

export const SliderComponent = () => {
  return (
    <div className={'slider-component'}>
      <Carousel autoplay arrows>
        <div className={'item'}>
          <img src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt=""/>
        </div>
        <div className={'item'}>
          <img src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt=""/>
        </div>
        <div className={'item'}>
          <img src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt=""/>
        </div>
        <div className={'item'}>
          <img src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt=""/>
        </div>
      </Carousel>
    </div>
  )
}