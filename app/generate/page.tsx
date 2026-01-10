"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/ai/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setOutput(data.output || data.error);
    setLoading(false);
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl p-6">
        <h1 className="text-2xl font-bold mb-4">AI Generator</h1>

        <textarea
          className="w-full rounded-lg border p-3 mb-4"
          rows={4}
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="rounded-lg bg-black px-6 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {output && (
          <div className="mt-6 rounded-lg border bg-white p-4">
            <h3 className="font-semibold mb-2">Output</h3>
            <p className="whitespace-pre-line">{output}</p>
          </div>
        )}
      </main>
    </>
  );
}
