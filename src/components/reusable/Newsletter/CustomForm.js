import React from 'react';

import { Button, InputContainer, CustomInput, ButtonInputCont } from '../styled';




const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <>
      {status === "sending" && <div style={{ color: "blue" }}>posílá se...</div>}
      {status === "error" && (
          <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
          />
      )}
      {status === "success" && (
          <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
          />
      )}

      <ButtonInputCont>
        <InputContainer>
          <CustomInput
            ref={node => (email = node)}
            type="email"
            placeholder="Tvůj email"
          />
        </InputContainer>
        <Button onClick={submit}>
          ODEBÍRAT NEWSLETTER
        </Button>
      </ButtonInputCont>
    </>
  );
};

export default CustomForm
