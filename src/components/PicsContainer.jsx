import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function PicsContainer() {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    loading,
    data: pictures,
    error,
  } = useFetch("https://api.unsplash.com/photos", pageNumber);

  return (
    <div className='pics-container'>
      {pictures && (
        <div className='pics-grid'>
          {pictures.map(pic => (
            <div key={pic.id} className='picture-card'>
              <img src={pic.urls.full} alt='' className='picture-card_img' />
            </div>
          ))}
        </div>
      )}

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
}
