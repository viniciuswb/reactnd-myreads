import React from 'react';
import './Backdrop.css';
import If from "../../../hoc/If"
import Loader from "../Loader"

const Backdrop = ({show}) => (
  <If test={show}>
    <div className="Backdrop">
      <Loader loaderClass="loader" size={60} top={66} left={0}/>
    </div>
  </If>
);

export default Backdrop;