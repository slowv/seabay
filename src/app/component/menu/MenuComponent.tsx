import './menu.css';

interface MenuProps {
  name: string;
  url: string;
  image: string;
}

export const MenuComponent = (props: MenuProps) => {
  return (
    <div>
      {props.name}
      {props.url}
      <img src={props.image} alt="" className={'thumbnail'}/>
    </div>
  )
}