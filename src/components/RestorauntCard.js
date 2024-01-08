import React,{ useContext, useEffect } from 'react';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';

const RestorauntCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info;
  const { logedInUser } = useContext(UserContext);
  return (
    <div>
      <div className=''>
        <img
          className="size-full rounded-lg"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
      </div>
      <div className='p-4'>
        <h3>{name}</h3>
        <p>{cuisines?.join(', ')}</p>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString} minutes</h4>
        <h5>User Name : {logedInUser}</h5>
      </div>
    </div>
  )
}
//Higher order component
//input - RestorauntCard => RestorauntCardPrompted

export const withPromotedLabel = (RestorauntCard) => {
  return (props) => {
    return(
      <>
        <label className='absolute p-2 bg-black text-white'>Promoted</label>
        <RestorauntCard {...props} />
      </>
    )
  }
}


export default RestorauntCard