
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    axios.get("https://quran-nlje.onrender.com/api/quran/surahs")
      .then(res => setSurahs(res.data));
  }, []); 

  return (
    <div className="p-6 grid md:grid-cols-3 gap-4">
      {surahs.map(surah => (
        <Link
          key={surah.number}
          to={`/surah/${surah.number}`}
          className="bg-slate-800 p-4 rounded-xl hover:bg-emerald-700"
        >
          <h2 className="text-xl font-bold">
            {surah.number}. {surah.englishName}
          </h2>
          <p className="text-right text-2xl">{surah.name}</p>
        </Link>
      ))}

    </div>

    
  );
}
