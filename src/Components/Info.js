import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';


const contactDetails = [
  {
    value: '508 E Main St, Round Rock, TX 78664',
    icon: "material-symbols:location-on",
  },
  { value: '+1 234 567 8900', icon: "material-symbols:phone-callback-rounded"},
  { value: 'focus.interior@support.com', icon: "material-symbols:mail-rounded" },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))


const Info = () => (
  <section className="info">
    
    <h2 className="info-h2">Contact information</h2>
   
    <div className="info-details-container">{renderContactDetails()}</div>

    <div className='info_icons'>
    <div className="info-icons-container">{<Icon icon="ic:baseline-facebook" />}</div>
    <div className="info-icons-container">{<Icon icon="ph:instagram-logo-fill" />}</div>
    </div>
  </section>
)

export default Info