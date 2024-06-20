import {useEffect, useState} from 'react';
import {BlogPost} from '../../types';
import PostCard from '../../components/Post/PostCard';
import './Blog.css';

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    // {title: 'Test post', author: 'John Doe', id: '1'},
    // {title: 'Hello, world!', author: 'Jack Black', id: '2'},
    // {title: 'Another example', author: 'Main Editor', id: '3'}
  ]);
  const [showPostForm, setShowPostForm] = useState(true);
  const [counter, setCounter] = useState(0);
  const togglePostForm = () => setShowPostForm((prev) => !prev);
  const increaseCounter = () => setCounter((prev) => prev + 1);

  useEffect(() => {
    console.log('[Blog] mounted/Updated!');
  });

  useEffect(() => {
    console.log('[Blog] showPostForm value changed!');
  }, [showPostForm]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (response.ok) {
        const posts = await response.json() as BlogPost[];
        const newPosts = posts.map((post) => ({
          id: post.id,
          title: post.title,
          author: 'John doe',
        }));

        setPosts(newPosts);
      }
    };

    void fetchData();
  }, []);

  console.log('[Blog] render');

  let postForm = null;

  if (showPostForm) {
    postForm = (
      <section className="NewPost">
        <p>New post form will be here</p>
      </section>
    )
  }

  return (
    <>
      <section className="Posts">
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            author={post.author}
          />
        ))}
      </section>
      <hr/>
      <button onClick={increaseCounter}>Increase counter!</button>
      <p>Counter: {counter}</p>
      <hr/>
      <button onClick={togglePostForm}>New post</button>
      {postForm}
    </>
  );
};

export default Blog;