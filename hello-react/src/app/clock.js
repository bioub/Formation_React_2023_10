import { useState } from "react";

function useNow() {
  const [now, setNow] = useState(new Date());

  setTimeout(() => {
    setNow(new Date());
  }, 1000);

  return now;
}

function Clock() {
  const now = useNow();

  return (
    <div className="Clock">
      {now.toLocaleTimeString()}
    </div>
  )
}

export default Clock;