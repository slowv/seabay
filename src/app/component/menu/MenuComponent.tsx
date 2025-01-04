import './menu.scss';

interface MenuProps {
  name: string;
  path: string;
  image: string;
}

export const MenuComponent = (props: MenuProps) => {
  return (
    <div className={'menu-component'}>
      <img src={props.image} alt="" className={'thumbnail'}/>
      <div className={'info'}>
        <div className={'name text-uppercase text-bold'}>
          {props.name}
        </div>
        <div className={'show-detail'}>
          <a href={props.path}>
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
  )
}