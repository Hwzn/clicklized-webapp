import React, { useState, Fragment, useEffect } from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import LoctionIcon from '../../../../../images/icon/location-icon.svg';
import { Authcontext } from "../../../../../store/context";
import { useContext } from "react";
import axios from "axios";


function Loction(props) {
  const {clickedLatLng, setClickedLatLng, setAddress}=props;
  const authcontext = useContext(Authcontext);
  const setAddressrequest = authcontext.setAddressrequest,
  centerrequest = authcontext.centerrequest,
  setCenterrequest = authcontext.setCenterrequest;
  const [center, setCenter] = useState({ lat: centerrequest.lat , lng: centerrequest.lng });
  const APikeygoogle = "AIzaSyBn3NtsJ5lgHSIxUJ4AuqAMm2RXldDDjN8";
  const [toggolestyle, setToggolestyle] = useState("")
  const [numberzoom, setNumberzoom] = useState(3);
  


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBn3NtsJ5lgHSIxUJ4AuqAMm2RXldDDjN8"
  });

  const onClick=(e)=>{
    const value = e.latLng.toJSON();
    setClickedLatLng(value);
    setCenter({ lat: value.lat, lng: value.lng })
    setCenterrequest({ lat: value.lat, lng: value.lng })
   fetchLocationName(value.lat,value.lng);
   setNumberzoom(15)
   setToggolestyle("hide")
  }
  
  const fetchLocationName = async (lat,lng) => {
    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${APikeygoogle}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setAddressrequest(responseJson.results[0].formatted_address);
        setAddress(responseJson.results[0].formatted_address);
      });

    }

    
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  const showPosition = (position) => {
    setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
    setCenterrequest({ lat: position.coords.latitude, lng: position.coords.longitude })
   setClickedLatLng(center);
   fetchLocationName(position.coords.latitude,position.coords.longitude);
  }
  const Hidestyle = () => {
    setToggolestyle("hide")
    getLocation()
    setNumberzoom(13)
  }

  const renderMap = () => {
    return (
      <div
        className={"mab"}>
        <div className={'mab-overload ' + toggolestyle}>

          <button type='button' className='btn-editeloction' onClick={Hidestyle}>
            <img src={LoctionIcon} alt="" />
            Get a location
          </button>
        </div>
        <GoogleMap
          onClick={e => onClick(e)}
          center={center}
          zoom={numberzoom}
          mapContainerStyle={{
            height: "100%",
            width: "100%"
          }}
        />

        </div>
    );
  };

  return isLoaded ? renderMap() : null;
}

export default Loction;

/*
  const [ip, setIP] = useState('');
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
  }
  useEffect( () => {
    getData()
  }, [])

  
    const fetchLocation = async (l) => {
      await fetch(
        `https://geolocation-db.com/json/AIzaSyCxNmBqWMvjABSLzGtWOR5sUWDVlUnPHsw`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          //setAddressrequest(responseJson.results[0].formatted_address);
          //setAddress(responseJson.results[0].formatted_address);
        });
  
      }
*/