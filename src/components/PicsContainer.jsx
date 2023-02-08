import useFetch from "../hooks/useFetch";
import PicsGrid from "./PicsGrid";

export default function PicsContainer() {
  const {
    loading,
    data: pictures,
    error,
  } = useFetch(
    "https://api.unsplash.com/photos?page=1&client_id=MoQqxaBNV_Be1-RPGe1sRBS_DW54KOoRWG93STTRlk8"
  );
  return (
    <div id='pics-container'>
      {pictures && <PicsGrid pictures={pictures} />}
    </div>
  );
}
