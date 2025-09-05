import React from 'react';

const MockTypeAnimation = ({ sequence, wrapper = 'span', repeat = 0, ...props }: any) => {
  // Just render the first non-function item in the sequence for testing
  const text = sequence.find((item: any) => typeof item === 'string');
  return React.createElement(wrapper, props, text || '');
};

export { MockTypeAnimation as TypeAnimation };
