import { Page, FormLayout, TextField, Button } from "@shopify/polaris";
import React, { useState, useCallback } from "react";

const Registro = () => {
  const [nameStore, setNameStore] = useState("");
  const [legal, setLegal] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [creditcard, setCreditCard] = useState();

  const handleChange = useCallback(value => setNameStore(value), []);

  return (
    <Page fullWidth={false}>
      <FormLayout>
        <TextField
          label="Nombre de la tienda"
          value={nameStore}
          onChange={useCallback(value => setNameStore(value), [])}
        />
        <TextField
          label="Nombre del representante legal"
          value={legal}
          onChange={useCallback(value => setLegal(value), [])}
        />
        <TextField
          label="Telefóno"
          value={phone}
          onChange={useCallback(value => setPhone(value), [])}
        />
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={useCallback(value => setEmail(value), [])}
        />
        <TextField
          label="Tarjeta de crédito"
          value={creditcard}
          onChange={useCallback(value => setCreditCard(value), [])}
        />
         <Button onClick = {console.log(nameStore,legal,phone, email,creditcard)}>Guardar</Button>
      </FormLayout>
    </Page>
  );
};
export default Registro;
