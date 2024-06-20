import React, {useEffect} from 'react';
import './PostCard.css';

interface Props {
  title: string;
  author: string;
}

const PostCard: React.FC<Props> = React.memo(({title, author}) => {
  console.log('[PostCard] render');

  useEffect(() => {
    console.log('[PostCard] mounted/Updated!');
  });

  return (
    <article className="PostCard">
      <h1>{title}</h1>
      <div className="Info">
        <div className="Author">{author}</div>
      </div>
    </article>
  );
}, (prevProps, nextProps) => {
  return nextProps.title === prevProps.title && prevProps.author === nextProps.author;
});

export default PostCard;