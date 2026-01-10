"use client";

import { useState } from "react";

export default function PromptForm() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit() {
    const res = await fetch("/api/ai/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setResponse(data.text);
  }

  return (
    <div className="space-y-4">
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Generate
      </button>

      {response && (
        <div className="border p-4 rounded bg-gray-50">
          {response}
        </div>
      )}
    </div>
  );
}
