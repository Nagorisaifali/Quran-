

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Surah() {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quran/surah/${id}`)
      .then(res => setSurah(res.data));
  }, [id]);

  if (!surah) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center mb-6">{surah.name}</h1>
      {surah.ayahs.map(ayah => (
        <p
          key={ayah.number}
          className="text-right text-2xl mb-4 leading-loose bg-slate-800 p-4 rounded"
        >
          {ayah.text} ۝
        </p>
      ))}
    </div>
  );
}
