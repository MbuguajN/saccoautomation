import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Adminlayout from './adminlayout';
import Adminstat from './adminstat';

function Admindash() {
  return (
    <Adminlayout>
      <Adminstat/>
        
    </Adminlayout>

  );
}

export default Admindash;
