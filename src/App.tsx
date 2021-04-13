import React, { Suspense, useState } from 'react';
import { hot } from 'react-hot-loader';

const ComputedOne = React.lazy(() => import('./components/ComputedOne/ComputedOne'));
const ComputedTwo = React.lazy(() => import('./components/ComputedTwo/ComputedTwo'));

export default function App(props: { name?: string }) {
  const [showTwo, setShowTwo] = useState<boolean>(false);

  return (
    <div className='app'>
      <Suspense fallback={<div>Loading...</div>}>
        <ComputedOne a={1} b={2} />
        {showTwo && <ComputedTwo a={3} b={4} />}
        <button type='button' onClick={() => setShowTwo(true)}>
          显示 2
        </button>
      </Suspense>
    </div>
  );
}
