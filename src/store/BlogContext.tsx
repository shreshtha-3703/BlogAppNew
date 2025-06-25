import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { StyledCard } from './Card';

interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
}

export default function CreatePost() {
  const [post, setPost] = useState<Post[]>([]);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      setPost(JSON.parse(savedPosts));
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      content: '',
    },
    onSubmit: (values: any) => {
      const newPost: Post = {
        id: Date.now().toString(),
        ...values,
      };

      const updatedPosts = [newPost, ...post];
      setPost(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setSuccess(true);

      setTimeout(() => {
        router.push('/');
      }, 1000);
    },
  });

  return (
    <div className="container py-4">
      <Navbar />
      <h3 className="mb-4">Create New Post</h3>

      <StyledCard style={{
    width: '100px',
    height: '600px',
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    borderRadius: '8px',
  }} >
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-3">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            onChange={formik.handleChange}
            value={formik.values.title}
            required
          />

          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            onChange={formik.handleChange}
            value={formik.values.description}
            required
          />

          <textarea
            name="content"
            rows={5}
            className="form-control"
            placeholder="Content"
            onChange={formik.handleChange}
            value={formik.values.content}
            required
          ></textarea>

          <button type="submit" className="btn btn-outline-primary btn-sm">
            Save Post
          </button>
        </form>
      </StyledCard>
    </div>
  );
}
