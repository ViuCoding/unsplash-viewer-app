import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function PicsContainer() {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    loading,
    data: pictures,
    error,
  } = useFetch("https://api.unsplash.com/photos", pageNumber);

  const handleClick = () => {
    setTimeout(() => {
      setPageNumber(prevPageNum => prevPageNum + 1);
    }, 1500);
  };

  return (
    <div className='pics-container'>
      <button className='btn' onClick={handleClick}>
        LOAD MORE PICTURES
      </button>
      {pictures && (
        <div className='pics-grid'>
          {pictures.map((pic, index) => (
            <div key={pic.id} className='picture-card'>
              <img
                src={pic.urls.regular}
                alt={`Picture ${index}`}
                className='picture-card_img'
              />
            </div>
          ))}
        </div>
      )}

      <button className='btn' onClick={handleClick} disabled={loading}>
        LOAD MORE PICTURES
      </button>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
}
