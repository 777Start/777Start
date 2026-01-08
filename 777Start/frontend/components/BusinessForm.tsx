import { useState } from "react";

export default function BusinessForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [style, setStyle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, product, audience, style });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Название бизнеса" className="border p-2" />
      <input value={product} onChange={e => setProduct(e.target.value)} placeholder="Продукт / услуга" className="border p-2" />
      <input value={audience} onChange={e => setAudience(e.target.value)} placeholder="Целевая аудитория" className="border p-2" />
      <input value={style} onChange={e => setStyle(e.target.value)} placeholder="Стиль / тон" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Сгенерировать</button>
    </form>
  );
}
