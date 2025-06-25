import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary p-3 shadow">
      <div className="container-fluid">
        <span className="navbar-brand bold">Shreshtha's Blog</span>
        <div className="d-flex gap-3">
          <Link href="/" className="nav-link text-white">
            Home
          </Link>
          <Link href="/create" className="nav-link text-white">
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
}
