import { Outlet, Link } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      {/* This nav will show up on EVERY page */}
      <nav style={{ padding: '1rem', borderBottom: '2px solid #000', marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/search">Search</Link>
      </nav>

      <main style={{ padding: '0 2rem' }}>
        <Outlet>
            {/* Current Page Here */}
        </Outlet>
      </main>
    </div>
  );
}