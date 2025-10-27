'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>Something went wrong!</h2>
      <p>An error occurred while rendering this page.</p>
      <button onClick={() => reset()} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Try again
      </button>
    </div>
  );
}
