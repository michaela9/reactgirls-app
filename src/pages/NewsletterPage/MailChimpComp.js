import React from 'react';
import Mailchimp from 'react-mailchimp-form'

import React from 'react'

function MailChimpComp() {
    return (
        <Mailchimp
        action="https://reactgirls.us4.list-manage.com/subscribe/post?u=1f71f307d41e4d8a6a3a8a437&amp;id=65b94e5d99" 
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form" 
        class="validate" 
        target="_blank" 
        novalidate
        />
    )
}

export default MailChimpComp
