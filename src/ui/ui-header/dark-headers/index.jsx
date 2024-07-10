import React from 'react';
import HeaderLightFive from '../light-headers/header-light-five';
import HeaderLightOne from '../light-headers/header-light-one';
import HeaderLightThree from '../light-headers/header-light-three';
import HeaderLightTwo from '../light-headers/header-light-two';
import HeaderLightFour from '../light-headers/header-light-four';

const index = () => {
  return (
    <div className="element-section mb-150">
      <div className="container">
        <div className="element-tile-two">Dark Headers</div>
      </div>

      {/* <!-- ^^^^^^^^^^^^^^ Dark Header One start ^^^^^^^^^^^^^^^^^ --> */}
      <HeaderLightOne dark={true} />
      {/* <!-- ^^^^^^^^^^^^^^ Dark Header One end ^^^^^^^^^^^^^^^^^^ --> */}

      {/* <!-- ^^^^^^^^^^^^^^ Dark Header two start ^^^^^^^^^^^^^^^^^ --> */}
      <HeaderLightTwo dark={true} />
      {/* <!-- ^^^^^^^^^^^^^^ Dark Header two end ^^^^^^^^^^^^^^^^^^ --> */}

      {/* <!-- ^^^^^^^^^^^^^^ Dark Header Three start ^^^^^^^^^^^^^^^^^ --> */}
      <HeaderLightThree dark={true} />
      {/* <!-- ^^^^^^^^^^^^^^ Dark Header Three end ^^^^^^^^^^^^^^^^^^ --> */}

      {/* <!-- ^^^^^^^^^^^^^^ Dark Header Four start ^^^^^^^^^^^^^^^^^ --> */}
      <HeaderLightFour dark={true} />
      {/* <!-- ^^^^^^^^^^^^^^ Dark Header Four end ^^^^^^^^^^^^^^^^^^ --> */}

      {/* <!-- ^^^^^^^^^^^^^^ Dark Header Five start ^^^^^^^^^^^^^^^^^ --> */}
      <HeaderLightFive dark={true} />
      {/* <!-- ^^^^^^^^^^^^^^ Dark Header Five end ^^^^^^^^^^^^^^^^^^ --> */}

    </div>
  );
};

export default index;