"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h1>Something went wrong 😕</h1>
      <p className="status">An unexpected error happened.</p>
      <button className="retry" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}