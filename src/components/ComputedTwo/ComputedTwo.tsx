import React from 'react';
import add from 'Src/utils/math';
import './ComputedTwo.less';

interface IProps {
  a: number;
  b: number;
}

function ComputedTwo(props: IProps) {
  const { a, b } = props;
  const sum = add(a, b);

  return <p className='computed-one'>{`Hi, I'm computed two, my sum is ${sum}.`}</p>;
}

export default ComputedTwo;
