import { useState } from 'react'

export const Test = () => {
  const [count, setCount] = useState(1)

  return (
    <div>
      This is a counter
      <p>
        count:
        {count}
      </p>
      <button onClick={() => setCount(count + 1)}>increment count</button>
    </div>
  )
}
