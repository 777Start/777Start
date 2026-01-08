export default function ResultDisplay({ result, loading }) {
  if (loading) return <p>Генерация...</p>;
  if (!result) return null;
  return <div className="p-4 border rounded">{result}</div>;
}
