// app/page.tsx
export default function Home() {
  return (
    <main style={{ padding: 16, maxWidth: 480, margin: '0 auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial' }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>LiveWell</h1>
      <p style={{ marginBottom: 20 }}>
        Welcome! This is a tiny starter page. We’ll add Habits, Mood, and Chat next.
      </p>

      <nav style={{ display: 'grid', gap: 8 }}>
        <button style={{ padding: 12, borderRadius: 10, border: '1px solid #ddd' }}>Today</button>
        <button style={{ padding: 12, borderRadius: 10, border: '1px solid #ddd' }}>Habits</button>
        <button style={{ padding: 12, borderRadius: 10, border: '1px solid #ddd' }}>Mood</button>
        <button style={{ padding: 12, borderRadius: 10, border: '1px solid #ddd' }}>Chat</button>
      </nav>
    </main>
  );
}
