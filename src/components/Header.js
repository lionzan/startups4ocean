import React from 'react';

import config from '../../config';

export default function Header() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>{config.subHeading}<br/><i>– brought to you by <a href="https://startupwharf.com">Startup Wharf</a> –</i></p>
    </header>
  );
}
