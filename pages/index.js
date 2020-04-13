import {
    TextStyle,
    Page,
    Layout,
    EmptyState,
    FooterHelp,
    Link,
    Card,
    Button,
    Stack
  } from "@shopify/polaris";
  import { TitleBar, ResourcePicker } from "@shopify/app-bridge-react";
  import { useState,useEffect } from "react";
  import Router from 'next/router';
  import axios from 'axios'


  
  
  
  const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
  
  const Index = () => {
    const [open, setOpen] = useState(false);
  
    const handleSelection = resources => {
      setOpen(false);
      console.log(resources);
    };
  
    const handleRegister = () => {
      console.log("registro");
    };

    useEffect(() => {
     // axios.get('/prueba')
      axios.get('/api/shopify')
       .then(response =>{
         console.log('exito',response);
         
       }, error=>{
         console.log(`Error,${error}`);
         
       })
      // .catch(err => alert(`${err}no encontrado`))
       
      
    },[]);
  
    return (
      <Page fullWidth={true}>
        <TitleBar
          primaryAction={{
            content: "Hola soy un primary actions"
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={open}
          onSelection={handleSelection}
          onCancel={() => setOpen(false)}
        />
  
        <Layout>
          <Layout.Section>
            <Card title="Order details" sectioned>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                impedit obcaecati eius quasi consequatur enim molestiae
                architecto? Rem vero quasi commodi tempora earum laboriosam quas
                sint eum, atque qui ipsum delectus iure perferendis reiciendis
                unde provident perspiciatis dolorum exercitationem ut voluptatem,
                animi labore cupiditate. Quas culpa voluptatum nobis mollitia
                sunt!
              </p>
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <Card title="Tags" sectioned>
              
              
              
                  <Button fullWidth={true} url={'/registro'
                  }>Registro</Button>
              
                
                  <Button fullWidth={true} onClick={()=>setOpen(true)}>Add product</Button>
                
            </Card>
          </Layout.Section>
        </Layout>
  
        {/* <Layout>
                  <EmptyState
                      heading="Soy un titulo"
                      action={{
                          content: 'Click on me',
                          onAction: ()=> setOpen(true)
                      }}
                      image={img}
                  >
                      <p>Selecciona productos</p>
                  </EmptyState>
              </Layout> */}
  
        <FooterHelp>
          Soy Fernando{" "}
          <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
            Castillo
          </Link>
        </FooterHelp>
      </Page>
    );
  };
  
  export default Index;
  