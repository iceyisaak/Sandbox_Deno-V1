// Package is imported directly from the URL
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

// Serve on port 8000
const s = serve({ port: 8000 });

// Log the port number
console.log("http://localhost:8000/");

// Await request
for await (const req of s) {
  // Response content
  req.respond({ body: "Hello World\n" });
}
