import React from 'react';
import HeaderLightFive from './header-light-five';
import HeaderLightFour from './header-light-four';
import HeaderLightOne from './header-light-one';
import HeaderLightThree from './header-light-three';
import HeaderLightTwo from './header-light-two';


const LightHeaders = () => {
  return (
    <>
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Light Headers</div>
        </div>

        {/* <!-- ^^^^^^^^^^^^^^ Light Header One start ^^^^^^^^^^^^^^^^^ --> */}
        <HeaderLightOne />
        {/* <!-- ^^^^^^^^^^^^^^ Light Header One end ^^^^^^^^^^^^^^^^^^ --> */}

        {/* <!-- ^^^^^^^^^^^^^^ Light Header two start ^^^^^^^^^^^^^^^^^ --> */}
        <HeaderLightTwo />
        {/* <!-- ^^^^^^^^^^^^^^ Light Header two end ^^^^^^^^^^^^^^^^^^ --> */}

        {/* <!-- ^^^^^^^^^^^^^^ Light Header Three start ^^^^^^^^^^^^^^^^^ --> */}
        <HeaderLightThree />
        {/* <!-- ^^^^^^^^^^^^^^ Light Header Three end ^^^^^^^^^^^^^^^^^^ --> */}

        {/* <!-- ^^^^^^^^^^^^^^ Light Header Four start ^^^^^^^^^^^^^^^^^ --> */}
        <HeaderLightFour />
        {/* <!-- ^^^^^^^^^^^^^^ Light Header Four end ^^^^^^^^^^^^^^^^^^ --> */}

        {/* <!-- ^^^^^^^^^^^^^^ Light Header Five start ^^^^^^^^^^^^^^^^^ --> */}
        <HeaderLightFive />
        {/* <!-- ^^^^^^^^^^^^^^ Light Header Five end ^^^^^^^^^^^^^^^^^^ --> */}

      </div>
    </>
  );
};

export default LightHeaders;