import React from 'react';
import TextImage from './TextImage';

export default function Layouts({ layouts, _rawLayouts }) {
  const Components = {
    textImage: TextImage,
  };

  return layouts.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block,
        raw: _rawLayouts[index],
      });
    }
  });
}
