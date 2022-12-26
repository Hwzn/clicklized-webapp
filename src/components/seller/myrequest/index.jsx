import React, { useState } from 'react'
import { useContext } from 'react';
import EmptyRequest from '../../../layout/empty/emptyrequest.jsx';
import { Authcontext } from '../../../store/context.js';
import RequestCardSeller from './card/index.jsx';
import RequestFilterSeller from './filter/index.jsx'
import RequestHeadrSeller from './headr/index.jsx';
import RequestRowSeller from './row/index.jsx'

function RequestitemsSeller(props) {
  const { Data } = props;
  const [toggle, setToggole] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;


  return (
    <div className='requestitems'>
      {Data.length === 0 ?
        <EmptyRequest />
        :
        Data.length < 4 ?

          <div className="container">
            <RequestHeadrSeller Title=
          {language === "Ar" ? "طلباتي" : "My requests"}
              Toggle={toggle} setToggole={setToggole} />
            <RequestFilterSeller Toggle={toggle} />
            <div className='myrequestseller__row'>
              {Data.map(item =>
                <RequestCardSeller Dataoffer={item} key={item.id} />
              )}
            </div>
          </div>
          :
          <div className="container">
            <RequestHeadrSeller Title=
          {language === "Ar" ? "طلباتي" : "My requests"}
              Toggle={toggle} setToggole={setToggole} />
            <RequestFilterSeller Toggle={toggle} />

            <RequestRowSeller Data={Data} />
          </div>
      }
    </div>
  )
}

export default RequestitemsSeller;