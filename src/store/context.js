import React, {  useState } from 'react';

export const Authcontext = React.createContext();

export function Contextprovider(props) {
    const [email, setEmail] = useState("");
    const [numberrequest, setNumberrequest] = useState("");
    const [itemsrequest, setItemsrequest] = useState([
        {
            item_id:"",
            quantity:""
        },
    ]);
    const [addressrequest,setAddressrequest]=useState("");
    const [inputinsurancerequest,setInputinsurancerequest]=useState("yes");
    const [transportationrequest,setTransportationrequest]=useState("included");
    const [notesrequest,setNotesrequest]=useState("");
    const [industryrequest,setIndustryrequest]=useState("");
    const [companynamerequest,setCompanynamerequest]=useState("");
    const [companyemailrequest,setCompanyemailrequest]=useState("");
    const [contactnumebrrequest,setContactnumebrrequest]=useState("");
    const [dayrequest,setDayrequest]=useState("");
    const [imagesfilesrequest,setImagesfilesrequest]=useState([]);
    const [imageslogorequest,setImageslogorequest]=useState(null);
    const [checkboxtogglerequest,setCheckboxtogglerequest]=useState(false);
    const [supplierslistrequest, setSupplierslistrequest] = useState([]);

    
    
    const value = {
        email: email,
        setEmail: setEmail,
        numberrequest:numberrequest,
        setNumberrequest:setNumberrequest,
        itemsrequest:itemsrequest,
        setItemsrequest:setItemsrequest,
        addressrequest:addressrequest,
        setAddressrequest:setAddressrequest,
        industryrequest:industryrequest,
        setIndustryrequest:setIndustryrequest,
        inputinsurancerequest:inputinsurancerequest,
        setInputinsurancerequest:setInputinsurancerequest,
        transportationrequest:transportationrequest,
        setTransportationrequest:setTransportationrequest,
        notesrequest:notesrequest,
        setNotesrequest:setNotesrequest,
        dayrequest:dayrequest,
        setDayrequest:setDayrequest,
        imagesfilesrequest:imagesfilesrequest,
        setImagesfilesrequest:setImagesfilesrequest,
        imageslogorequest:imageslogorequest,
        setImageslogorequest:setImageslogorequest,
        checkboxtogglerequest:checkboxtogglerequest,
        setCheckboxtogglerequest:setCheckboxtogglerequest,
        supplierslistrequest:supplierslistrequest, 
        setSupplierslistrequest:setSupplierslistrequest,
        companynamerequest:companynamerequest,
        setCompanynamerequest:setCompanynamerequest,
        companyemailrequest:companyemailrequest,
        setCompanyemailrequest:setCompanyemailrequest,
        contactnumebrrequest:contactnumebrrequest,
        setContactnumebrrequest:setContactnumebrrequest
    }

    return (
        <Authcontext.Provider value={value}>
            {props.children}
        </Authcontext.Provider>
    )
}

