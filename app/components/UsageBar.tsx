export default function UsageBar({
  used,
  total,
}: {
  used: number;
  total: number;
}) {
  const percent = (used / total) * 100;

  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="mb-2 flex justify-between text-sm text-gray-600">
        <span>{used} used</span>
        <span>{total} total</span>
      </div>

      <div className="h-3 rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-indigo-600"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
