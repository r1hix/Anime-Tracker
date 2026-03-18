import { useParams } from 'react-router-dom';

export default function AnimeDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Anime Details</h1>
      <p>Currently fetching data for ID: <strong>{id}</strong></p>
      
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#727171', borderRadius: '8px' }}>
        <p>Details here</p>
      </div>
    </div>
  );
}