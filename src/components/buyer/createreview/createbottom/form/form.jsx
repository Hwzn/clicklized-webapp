import React, { useState } from 'react';
import { Formik } from "formik";
import { Inputaddress, Inputday, Fileslist, Inputinsurance, InputItems, Inputnotes, Inputquotations, Inputtransportation, Supplierslist } from './inputs';
import { Createrequestdata } from '../../../../../api/buyer/actionrequest';
import { Authcontext } from '../../../../../store/context';
import { useContext } from 'react';

function Form(props) {
    const { Arraydataone, Arraydatatwo, SuppliersItems, imagesfiles, imageslogo, setParamsname, clickedLatLng } = props;
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const authcontext = useContext(Authcontext);
    const setNumberrequest = authcontext.setNumberrequest,
        setItemsrequest = authcontext.setItemsrequest,
        setAddressrequest= authcontext.setAddressrequest,
        setInputinsurancerequest = authcontext.setInputinsurancerequest,
        setTransportationrequest = authcontext.setTransportationrequest,
        setNotesrequest = authcontext.setNotesrequest,
        setIndustryrequest = authcontext.setIndustryrequest,
        setDayrequest = authcontext.setDayrequest,
        setImagesfilesrequest = authcontext.setImagesfilesrequest,
        setImageslogorequest = authcontext.setImageslogorequest,
        setCheckboxtogglerequest = authcontext.setCheckboxtogglerequest,
        setCompanynamerequest = authcontext.setCompanynamerequest,
        setCompanyemailrequest = authcontext.setCompanyemailrequest,
        setContactnumebrrequest = authcontext.setContactnumebrrequest,
        setSupplierslistrequest = authcontext.setSupplierslistrequest;
    const Suppliers = [];

    const Itemsresults = Arraydataone.items.filter(obj => {
        return obj.quantity !== "";
    });

    for (let index = 0; index < SuppliersItems.length; index++) {
        Suppliers.push(SuppliersItems[index].id);
    }
    const daydata = `${Arraydataone.day.getFullYear()}/${Arraydataone.day.getMonth() + 1}/${Arraydataone.day.getDate()}`;
    const arrayimagesfiles = [...imagesfiles];

    const onSubmit = (values) => {
        setLoading(true);
        setNumberrequest("");
        setItemsrequest([
            {
                item_id: "",
                quantity: ""
            },
        ]);

        setAddressrequest("");
        setInputinsurancerequest("yes");
        setTransportationrequest("included");
        setNotesrequest("");
        setIndustryrequest("");
        setDayrequest("");
        setImagesfilesrequest([]);
        setImageslogorequest(null);
        setSupplierslistrequest([]);
        setCompanynamerequest("");
        setCompanyemailrequest("");
        setContactnumebrrequest("");
        setCheckboxtogglerequest(false);

        Createrequestdata(setLoading, Arraydataone, clickedLatLng, Itemsresults, daydata, SuppliersItems, imageslogo
            , arrayimagesfiles, Arraydatatwo, setMessage);

    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <Inputquotations Data={Arraydataone} />
            <InputItems Itemsresults={Itemsresults} />
            <Inputaddress Data={Arraydataone} />
            <Inputday Data={daydata} />
            <Inputinsurance Data={Arraydataone} />
            <Inputtransportation Data={Arraydataone} />
            <Inputnotes Data={Arraydataone} />
            <Fileslist Imagesfiles={arrayimagesfiles} />
            <Supplierslist SupplierslistItems={SuppliersItems} Arraydataone={Arraydatatwo} />
            {message === "" ? "" : <span className='errorfiled'>{message}</span>}
            <div className='end'>
                <div>
                    {loading === false ?
                        <button className='btn btn-cancel' onClick={() => { setParamsname("createissue"); }}>Back</button>
                        : <button className="btn btn-cancel button-disabled" type="button">Back</button>}


                    {/*<button className='btn btn-download'>Download as pdf</button>*/}
                </div>
                {loading === false ?
                    <button className='btn btn-next' type="submit">Next</button>
                    :
                    <button className="btn btn-next button-disabled">
                        Loading
                        <span className="spinner"></span>
                    </button>}
            </div>

        </form>
    }


    return (
        <div className="form">
            <Formik
                onSubmit={onSubmit}
                render={form}
                enableReinitialize={true}
                initialValues={Arraydataone}
            />
        </div>
    )
}

export default Form;
