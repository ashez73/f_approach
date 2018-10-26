import React from 'react';
const MyHeader = () => {
  return (
    <header className="fixed-top border-bottom border-white bg-primary text-white"
      style={{ padding: "15px", }}>
      <p className="lead font-weight-bold">SKYGATE challenge</p>
      <p>CRUD form manager integrated with IndexedDB</p>
    </header>
  )
}
export default MyHeader;
