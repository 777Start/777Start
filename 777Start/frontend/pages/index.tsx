import { useState } from "react";
import BusinessForm from "../components/BusinessForm";
import ResultDisplay from "../components/ResultDisplay";
import axios from "axios";

export default function Home() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4000/api/generate", data);
      setResult(res.data.generatedText);
    } catch (err) {
      console.error(err);
      setResult("Ошибка при генерации");
    }
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Brand Builder</h1>
      <BusinessForm onSubmit={handleGenerate} />
      <ResultDisplay result={result} loading={loading} />
    </div>
  );
}
