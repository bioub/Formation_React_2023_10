import './select.css';
import { useState } from 'react';

function Select({ items = [], value = '' }) {
  const [open, setOpen] = useState(false);

  function handleValueClick() {
    setOpen(!open);
  }

  /*let menu;

  if (open) {
    menu = (
      <div className="menu">
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </div>
    );
  }*/

  /*
  const tabJsx = [];

  for (const item of items) {
    tabJsx.push(<div key={item}>{item}</div>)
  }
  */
  const tabJsx = items.map((item) => <div key={item}>{item}</div>);

  return (
    <div className="Select">
      <div className="value" onClick={handleValueClick}>
        {value}
      </div>
      {open && (
        <div className="menu">
          {tabJsx}
        </div>
      )}
    </div>
  );
}

export default Select;
