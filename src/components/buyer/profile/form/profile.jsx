import React, { useContext, useEffect, useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import UploadImage from "../../../../images/icon/upload.png";
import {GetDataIndustries, UpdateCompanycr, UpdateCompanyvat, UpdateProfile} from "../../../../api/buyer/actionsprofile.js";
import { Authcontext } from '../../../../store/context';

function Formprofile(props) {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const {Data}=props;
    const [dataindustries, setDataIndustries] = useState([]);
    const [message, setMessage] = useState("");
    const [messagecrfiles, setMessagecrfiles] = useState("");
    const [messagevatfiles, setMessagevatfiles] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingcrfiles, setLoadingcrfiles] = useState(false);
    const [loadingvatfiles, setLoadingvatfiles] = useState(false);
    const state = {
        name: Data.name,
        email: Data.email,
        phone: Data.phone,
        industry: Data.industry.id,
    };

    
    useEffect(() => {
        GetDataIndustries(setLoading, setDataIndustries);
    }, [loading]);

    const SendData = () => {
        swal({
            text: "Good !",
            icon: "success",
            buttons: false,
            timer: 3000
        })
       window.location.reload();
    }
    const onSubmit = (values) => {
        UpdateProfile(Data,values,setMessage)
    }


    const form = (props) => {
        return <>
        {loading === false ? "" : 
            <form onSubmit={props.handleSubmit}>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">
                        {language === "Ar" ?"الأسم":"User name"}
                        </label>
                            <Field type={"text"}
                                className={props.errors.name ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ?"الأسم":"User name"}
                                 name="name" />
                            <ErrorMessage name="name" component="span" className='errorfiled' />
                        </div>

                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">
                        {language === "Ar" ?"الأيميل":"Business Email"}
                        </label>
                            <Field type={"email"}
                                className={props.errors.email ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ?"الأيميل":"Business Email"}
                                 name="email" />
                            <ErrorMessage name="email" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">
                        {language === "Ar" ?"رقم الهاتف":"Contact Number"}
                        </label>
                            <Field type={"number"}
                                className={props.errors.phone ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ?"رقم الهاتف":"Contact Number"}
                                 name="phone" />
                            <ErrorMessage name="phone" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">
                            {language === "Ar" ? "قطاع الشركة" : "Company Industry"}
                            </label>

                            <Field name="industry" component="select"
                                className={props.errors.industry ? "form-select is-invalid" : "form-select"}  >
                                    <option></option>
                                    {dataindustries.map(item =>
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                    )}
                            </Field>

                            <ErrorMessage name="industry" component="span" className='errorfiled' />
                        </div>

                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">
                            {language === "Ar" ? "السجل التجاري" : "Company CR"}
                            </label>
                            

                            
                            {loadingcrfiles === false ?
                                      <button type='button'
                                      className={props.errors.cr_files ? "btn btn-upload is-invalid" : "btn btn-upload"}>
                                      <Field type={"file"} multiple className="input-file" name="cr_files" 
                                      accept="image/*" 
                                      onChange={e => {
                                              UpdateCompanycr(Data, e.target.files, setMessagecrfiles , setLoadingcrfiles)
                                          }} />
                                          {language === "Ar" ?
                                              <>تحميل الملفات<img src={UploadImage} alt="" /></>
                                              :<><img src={UploadImage} alt="" />Upload files</>
                                          }
                                  </button>
                                        :
                                        <button type='button' className='btn btn-upload button-disabled'>
                                           {language === "Ar" ?
                                            <>جاري التحميل<span className="spinner"></span></>
                                            :<><span className="spinner"></span>Loading</>
                                        }
                                        </button>}
                            {messagecrfiles === "" ? "" : <span className='errorfiled'>{messagecrfiles}</span>}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">
                            {language === "Ar" ? "ملف ضريبة القيمة المضافة" : "Company VAT"}
                            </label>
                            
                            
                            {loadingvatfiles === false ?
                                      <button type='button'
                                      className={props.errors.vat_files ? "btn btn-upload is-invalid" : "btn btn-upload"}>
                                      <Field type={"file"} className="input-file" name="vat_files" 
                                        onChange={e => {
                                            UpdateCompanyvat(Data, e.target.files, setMessagevatfiles,setLoadingvatfiles)
                                        }}
                                      multiple accept="image/*"  />
                                       {language === "Ar" ?
                                        <>تحميل الملفات<img src={UploadImage} alt="" /></>
                                        :<><img src={UploadImage} alt="" />Upload files</>
                                    }
                                  </button>
                                        :
                                        <button type='button' className='btn btn-upload button-disabled'>
                                            <span className="spinner"></span>
                                            {language === "Ar" ?
                                            <>جاري التحميل<span className="spinner"></span></>
                                            :<><span className="spinner"></span>Loading</>
                                        }
                                        </button>}

                            
                            {messagevatfiles === "" ? "" : <span className='errorfiled'>{messagevatfiles}</span>}
                        </div>
                    </div>
                    {message === "" ? "" : <span className='errorfiled'>{message}</span>}
                    <div className='end'>
                        <button className={'btn btn-send button-active'}
                            type="submit" >Save</button>
                        <button type="button" className="btn btn-cancel"
                            data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>

            </form>
             }
        </>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            name: Yup.string().required('User name Required'),
            email: Yup.string().required('Bussiness Email Required'),
            phone: Yup.string()
                .min(9, 'The Contact Number must be at least 9 Digits !')
                .max(14, 'Contact Number Must Be No More Than 14 !')
                .required("Contact Number Is Required"),
            industry: Yup.string().required('Company Industry Required'),
        });

        return schema;
    }
    return (
        <>
            <Formik
                initialValues={state}
                onSubmit={onSubmit}
                render={form}
                validationSchema={schema()}
                validateOnChange={false}
                validateOnBlur={false}
            />
        </>
    )
}

export default Formprofile;


