import React from 'react';
import HomeRequestsCard from './card';

function HomeRequestsRow() {
  const Data = [
    { id: 1, name: "Request name", time: "20/02/2022",offer:1},
    { id: 2, name: "Request name", time: "20/02/2022",offer:1},
    { id: 3, name: "Request name", time: "20/02/2022",offer:1},
    { id: 4, name: "Request name", time: "20/02/2022",offer:1},
    { id: 5, name: "Request name", time: "20/02/2022",offer:1},
    { id: 6, name: "Request name", time: "20/02/2022",offer:0},
  ]
  return (
    <div className='homerequests__row'>
      <div className="row">
        {Data.map(item =>
          <HomeRequestsCard key={item.id} Item={item} />
        )}
      </div>
    </div>
  )
}

export default HomeRequestsRow;