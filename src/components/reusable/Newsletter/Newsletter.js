import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import  CustomForm  from './CustomForm';

/*function CustomForm() {
  const url ="https://reactgirls.us4.list-manage.com/subscribe/post?u=1f71f307d41e4d8a6a3a8a437&amp;id=65b94e5d99"
  return(
    <MailchimpSubscribe
    url = {url}
    render={({ subscribe, status, message }) => (
      <div>
        <h1>MailChimp subscribe form</h1>
        <MyForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
  )
}*/

function Newsletter() {
    const url = ""
      return (
        <>         
          <MailchimpSubscribe
            url={process.env.REACT_APP_MAILCHIMP_URL}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </>
      );
    }

  export default Newsletter;