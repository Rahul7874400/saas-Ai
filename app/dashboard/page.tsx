import PromptForm from "../components/promptForm";

export default function DashboardPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">AI Dashboard</h1>
      <PromptForm />
    </div>
  );
}
