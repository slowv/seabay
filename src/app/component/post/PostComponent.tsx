import './post.css';

export interface PostProps {
  name: string;
  title: string;
  image: string;
}

export const PostComponent = (props: PostProps) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.title}</div>
      <img src={props.image} alt="" className={'thumbnail'}/>
    </div>
  )
}