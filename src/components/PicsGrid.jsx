export default function PicsGrid({ pictures }) {
  return (
    <div id='pics-grid'>
      {pictures.map(pic => (
        <div key={pic.id} className='picture-card'>
          <img src={pic.urls.full} alt='' className='picture-card_img' />
        </div>
      ))}
    </div>
  );
}
