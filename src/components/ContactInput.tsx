import React from 'react';
import PhoneInput  from 'react-phone-input-2';
import { useState } from 'react';

function ContactInput() {
     const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"eg"}
      enableSearch={true}
      value={phone}
      onChange={(phone) => setPhone(phone)}
    />
  );
}

export default ContactInput;