"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log to console (or your own logger)
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ padding: 24 }}>
          <h2>Something went wrong</h2>
          <p>
            {process.env.NODE_ENV !== "production"
              ? error.message
              : "Please try again."}
          </p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
