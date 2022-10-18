import React, { useState }  from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { EndForgetPassword } from '../../api/actions';
import Invisible from "../../images/icon/invisible.svg";
import Visible from "../../images/icon/eye-regular.svg";

function FormThree() {
    const state = { password: "" ,changepassword: ""};
    const [toggle, setToggle] = useState(false);
    const [togglechangepassword, setTogglechangepassword] = useState(false);

    const SendData = () => {
        swal({
            text: "Good !",
            icon: "success",
            buttons: false,
            timer: 3000
        })
      EndForgetPassword()

    }
    const onSubmit = (values) => {
        console.log(values);
       // SendData(values.code);
        SendData();
    }

    
    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div className="form">
                <div className='mb-3'>
                    <label className="form-label">Password</label>
                    <div className="filedpassword">
                        <Field type={toggle === false?"password":"text"}
                            className={props.errors.password ? "form-control is-invalid" : "form-control"}
                            placeholder="Enter password" name="password" />
                        <span className='toggoleimg' onClick={()=>setToggle(!toggle)}>
                            {toggle === false?
                            <img src={Invisible} alt="Invisible"
                            className={props.errors.password ? "hide invisible_img" : "invisible_img"}
                            />
                            :
                            <img src={Visible} alt="Visible"
                            className={props.errors.password ? "hide invisible_img" : "invisible_img"}
                            />
                        }
                        </span>


                    </div>
                    <ErrorMessage name="password" component="span" className='errorfiled' />
                </div>

                <div className='mb-3'>
                    <label className="form-label">Reenter your password</label>
                    <div className="filedpassword">
                        <Field type={togglechangepassword === false?"password":"text"}
                            className={props.errors.changepassword ? "form-control is-invalid" : "form-control"}
                            placeholder="Re-enter The New Password" name="changepassword" />
                        <span className='toggoleimg' onClick={()=>setTogglechangepassword(!togglechangepassword)}>
                            {togglechangepassword === false?
                            <img src={Invisible} alt="Invisible"
                            className={"invisible_img"}
                            />
                            :
                            <img src={Visible} alt="Visible"
                            className={ "invisible_img"}
                            />
                        }
                        </span>


                    </div>
                    <ErrorMessage name="changepassword" component="span" className='errorfiled' />
                </div>


                <div className='mb-3'>
                    <button className='btn btn-send' type="submit">Save</button>
                </div>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            password: Yup.string()
            .min(5, 'Too Short!')
            .max(9, 'Too Long!')
            .required('Required'), 
            changepassword: Yup.string().when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Both password need to be the same"
                )
              })
        });

        return schema;
    }
  return (
    <div className="signin__form">
        <Formik
            initialValues={state}
            onSubmit={onSubmit}
            render={form}
            validationSchema={schema()}
            validateOnChange={false}
            validateOnBlur={false}
        />
    </div>
  )
}

export default FormThree