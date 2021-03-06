import React, { PropTypes } from 'react';

import COLORS from '../constants/colors';

const SelectedCipher = ({ cipher }) => (
  <ul>
    {cipher.map((value, index) => (
      <li
        key={index}
        style={{
          backgroundColor: COLORS[value]
        }}
      />
    ))}
  </ul>
);

SelectedCipher.propTypes = {
  cipher: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

export default SelectedCipher;
