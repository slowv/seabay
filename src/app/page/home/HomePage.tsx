import {SliderComponent} from "../../component/slider/SliderComponent.tsx";
import {BannerComponent} from "../../component/banner/BannerComponent.tsx";
import {MenuComponent} from "../../component/menu/MenuComponent.tsx";
import {PostComponent, PostProps} from "../../component/post/PostComponent.tsx";

export const HomePage = () => {

  const posts: PostProps[] = [
    {
      name: 'sự lựa chọn ẩm thực số 1',
      image: 'https://intern-project-chi.vercel.app/static/media/bg1.da6d3327978f205184d6.jpg',
      title: 'Thuộc Golden Gate Group - 15 năm kinh nghiệp, hơn 400 nhà hàng toàn quốc'
    },
    {
      name: 'sự lựa chọn ẩm thực số 1',
      image: 'https://intern-project-chi.vercel.app/static/media/bg1.da6d3327978f205184d6.jpg',
      title: 'Thuộc Golden Gate Group - 15 năm kinh nghiệp, hơn 400 nhà hàng toàn quốc'
    },
    {
      name: 'sự lựa chọn ẩm thực số 1',
      image: 'https://intern-project-chi.vercel.app/static/media/bg1.da6d3327978f205184d6.jpg',
      title: 'Thuộc Golden Gate Group - 15 năm kinh nghiệp, hơn 400 nhà hàng toàn quốc'
    }
  ]

  return (
    <div>
      <SliderComponent/>
      <BannerComponent/>

      {/*Box 5 bước đạt tiệc*/}

      {/*Box event*/}

      {/*Box menu*/}
      <div className={'box-menu'}>
        <div className={'menu'}>

        </div>
        <div className={'menu'}>
          <MenuComponent name={'set menu'} url={'/menu/:id'}
                         image={'https://intern-project-chi.vercel.app/static/media/set_menu.50c5439a3c5c641f3ce0.jpg'}/>
        </div>
        <div className={'menu'}>
          <MenuComponent name={'menu tự chọn'} url={'/menu/:id'}
                         image={'https://intern-project-chi.vercel.app/static/media/option_menu.e3ec617af9965b3f463c.jpg'}/>
        </div>
      </div>

      {/*Box post*/}
      <div className={'box-posts'}>
        <h3>Vì sao lựa chọn chúng tôi</h3>
        <div className={'posts'}>
          {
            posts.map((props: PostProps, index: number) => (
              <PostComponent key={index} {...props}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}