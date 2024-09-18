import { type PropsWithChildren, useState } from 'react';

import Styles from './counter.module.css';

type Props = {
  initialCount?: number;
};

export const CounterComponent = ({
  initialCount,
  children,
}: PropsWithChildren<Props>) => {
  const [count, setCount] = useState<number>(initialCount ?? 0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className={Styles.counter}>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className={Styles.message}>{children}</div>
    </>
  );
};
