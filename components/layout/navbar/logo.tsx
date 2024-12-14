import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Image
        src="/images/logo/EVO-LOGO.webp"
        alt="EVO"
        width={100}
        height={100}
        className="brightness-0 invert"
      />
    </div>
  );
};

export default Logo;