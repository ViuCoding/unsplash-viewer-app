import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(URL, pageNum) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios({
      method: "GET",
      url: URL,
      params: {
        page: pageNum,
        client_id: "MoQqxaBNV_Be1-RPGe1sRBS_DW54KOoRWG93STTRlk8",
      },
    })
      .then(res => {
        if (pageNum < 2) {
          setData(prevData => (prevData = res.data));
        } else {
          setData(prevData => {
            return prevData.concat(res.data);
          });
        }
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [URL, pageNum]);

  return { loading, data, error };
}
