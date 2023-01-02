import React from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormOne from '../../layout/phonepassword/formone';

function ForgetPasswordPhone() {
  return (
    <section className='signin'>
        <div className="vactor">
            <img src={Vactor} alt="vactor" />
        </div>
        <div className="signin__data">
            <div className="signin__header">
                <div className="img">
                <img src={Logo} alt="" />
                </div>
                <h5>Forget password?</h5>
                <span>Enter your Phone Number</span>
            </div>
            <FormOne/>
        </div>
    </section>
  )
}

export default ForgetPasswordPhone;