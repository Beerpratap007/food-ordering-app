import { CDN_URL } from '../utils/constants';

const RestorauntCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className='res-card'>
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p>{cuisines?.join(', ')}</p>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} minutes</h4>
    </div>
  )
}

export default RestorauntCard