import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import { StyledCard } from '@/store/Card';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState<any[]>([]);
  const [success, setSuccess] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const router = useRouter();

useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
    setLoaded(true); 
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts, loaded]);


const handleSubmit = () => {

  const newPost = {
    id: Date.now().toString(),
    title,
    description,
    content,
  };

    const updatedPosts = [...posts,newPost];
    setPosts(updatedPosts);
    setSuccess(true);

    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <div className="p-4">
      <Navbar /><div className='d-flex justify-content-between'>
      <h1 className="font-bold mb-4">Create New Post</h1>
      <button className='btn' onClick={() => history.back()}>Back</button>
      </div>
<StyledCard  style={{
            width: '500px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            borderRadius: '8px',
          }}>
  <form onSubmit={handleSubmit} className="d-flex form-container">
    <input
      type="text"
      placeholder="Title"
      className="form-input"
      value={title}
      onChange={(e: any) => setTitle(e.target.value)}
      required
    />

    <input
      type="text"
      placeholder="Description"
      className="form-input"
      value={description}
      onChange={(e: any) => setDescription(e.target.value)}
      required
    />

    <textarea
      placeholder="Content"
      className="form-input h-32 resize-none"
      value={content}
      onChange={(e: any) => setContent(e.target.value)}
      required
    ></textarea>

   <div className="d-flex justify-content-start">
  <button
    type="submit"
    className="btn btn-outline-primary btn-sm"
    style={{ width: 'auto' }}
  >
    Save
  </button>
</div>
  </form>
</StyledCard>
    </div>
  );
}
