import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full h-full">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1YLtQGkFHKdKfMWsJZHBnxMBEBGFxQSo&ehbc=2E312F"
        width="100%"
        height="100%"
        className="absolute inset-0 rounded-lg"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;