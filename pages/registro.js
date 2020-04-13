import {
  Page,
  FormLayout,
  TextField,
  Button,
  Layout,
  Form,
  Stack,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";

const Registro = () => {
  const [nameStore, setNameStore] = useState("");
  const [legal, setLegal] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [creditcard, setCreditCard] = useState();

  const handleChange = useCallback((value) => setNameStore(value), []);
  const handleSubmit = () => {
    console.log('datos guardados', nameStore,legal,phone,email, creditcard);
    
  };
  
  return (
    <Page fullWidth title={"Registro"}>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <Layout>
            <Layout.Section oneHalf>
              <TextField
                label="Nombre de la tienda"
                value={nameStore}
                onChange={(value) => setNameStore(value)}
              />
              <TextField
                label="Nombre del representante legal"
                value={legal}
                onChange={(value) => setLegal(value)}
              />
              <TextField
                label="Telefóno"
                value={phone}
                onChange={(value) => setPhone(value)}
              />
            </Layout.Section>
            <Layout.Section oneHalf>
              <TextField
                type="email"
                label="Email"
                value={email}
                onChange={(value) => setEmail(value)}
              />
              <TextField
                label="Tarjeta de crédito"
                value={creditcard}
                onChange={(value) => setCreditCard(value)}
              />

              <Stack distribution="trailing">
                <Button submit >Guardar</Button>
              </Stack>
            </Layout.Section>
          </Layout>
        </FormLayout>
      </Form>
    </Page>
  );
};
export default Registro;
