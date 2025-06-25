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
    <div className="container py-5">
  <Navbar />

  <div className="d-flex justify-content-between align-items-center mb-4">
    <h1 className="bold text-primary mb-0">Blog Posts</h1>
    <Link href="/create" className="btn btn-primary">
      + New Post
    </Link>
  </div>

  <div className="mb-4 position-relative" style={{ maxWidth: '400px' }}>
    <input
      type="text"
      className="form-control ps-4 shadow-sm"
      placeholder="Search by title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {filteredPosts.length === 0 ? (
    <div className="text-center mt-5">
      <p className="text-muted fs-5">No posts found.</p>
    </div>
  ) : (
    <div className="row gy-4">
      {filteredPosts.map((post) => (
        <div key={post.id} className="col-12 col-sm-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm position-relative post-card">
            <div className="card-body d-flex flex-column">
              <span className="badge bg-light text-primary mb-2 align-self-start">
                #{post.title.slice(0, 10).replace(/\s+/g, '_')}
              </span>

              <h5 className="card-title fw-bold text-dark">{post.title}</h5>
              <p className="card-text text-secondary small flex-grow-1">
                {post.description.length > 100
                  ? post.description.slice(0, 100) + '...'
                  : post.description}
              </p>

              <Link
                href={`/post/${post.id}`}
                className="btn btn-outline-primary btn-sm mt-3 align-self-start"
              >
                Read More →
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
