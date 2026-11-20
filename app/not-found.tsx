import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Recipe not found 🍽️</h1>
      <p className="status">We couldn't find that page.</p>
      <Link href="/" className="back">← Back to home</Link>
    </main>
  );
}
