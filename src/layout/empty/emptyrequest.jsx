import React, { useContext } from 'react'
import { Authcontext } from '../../store/context';

function EmptyRequest() {
  
  return (
    <section className='empty-contener'>
      <div className="crsail">
        
      </div>
      <h5>You don’t have any request</h5>
    </section>
  )
}

export default EmptyRequest;