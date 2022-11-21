import React from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormOne from '../../layout/password/formone';
import FormResendCode from '../../layout/resendcode/form';

function ResendCode() {
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
                <h5>Activate The Account ?</h5>
                <span>Enter your email</span>
            </div>
            <FormResendCode/>
        </div>
    </section>
  )
}

export default ResendCode;
