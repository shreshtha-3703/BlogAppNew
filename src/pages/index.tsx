import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('posts');
    if (saved) {
      const savedPost = JSON.parse(saved);
      setPosts(savedPost);
      setFilteredPosts(savedPost);
    }
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(lower)
    );
    setFilteredPosts(results);
  }, [search, posts]);

  return (
    <div className="container py-4">
      <Navbar />
      <h1 className="bold text-primary mt-2">Blog Posts</h1>

      <div className="mb-4 mt-2 col-6 position-relative">
        <input
          type="text"
          className="form-control ps-5"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-muted">No posts found.</p>
      ) : (
        <div className="row gy-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{post.title}</h5>
                  <p className="card-text text-muted">{post.description}</p>
                  <Link href={`/post/${post.id}`} className="mt-auto text-primary text-decoration-none">
                    Read More 
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
