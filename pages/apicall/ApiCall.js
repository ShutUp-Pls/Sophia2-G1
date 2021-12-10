import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import Diagrama from './diagrama/Diagrama'

const Container = styled.div`
    &.graphic{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    &.graphic svg{
        background-color: rgba(105,105,105,1);
    }
    &.header{
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    &.header input{
        width: 300px;
        background-color: rgba(255,255,255,0.8);
    }
    &.container{
        padding: 3%;
        border: 1px solid #555;
        margin: 3%;
        box-shadow: 5px 5px 8px rgba(0,0,0,0.35);
        background-color: rgba(50,50,50,0.8);
    }
`

const InputContainer = styled.div`
  display: flex;
  border: none;
  border-radius: 2px;
  max-width: 366px;
  & input{
    height: 50px;
    width: 300px;
    font-size: 20px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #eee;
  }
`

const Button = styled.button`
 border: none;
 height: 52px;
 cursor: pointer;
 border-left: 1px solid #999;
 border-top-right-radius: 5px;
 border-bottom-right-radius: 5px;
 & img{
   max-width: 50px;
   max-height: 50px;
 }
`

const ApiCall = () => {
  const [data, setData] = useState([{}])
  return (
    <div>
      <Container className="container">
        <Container className="header">
          <Formik
            initialValues={{ search: '' }}
            onSubmit={async values => {
              let name = values.search
              let names = name.split(" ")
              const res = await fetch(
                `http://45.79.169.216:86/persons_by_name/?name=${names[0]}%20${names[1]}&page=1&size=50`,
                {
                  method: "GET",
                  headers: {
                    Authentication: "password",
                    'X-Api-Key': 'password',
                    "User-Agent":
                      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
                    Accept: "application/json; charset=UTF-8",
                  },
                }
              )
              const data = await res.json()
              setData(data.items[0].values)
            }}
          >
            <Form>
              <InputContainer>
                <Field name='search' placeholder="Buscar..." />
                <Button type='submit'><img src='../images/lens.png' /></Button>
              </InputContainer>
            </Form>
          </Formik>
        </Container>
        <Container className="graphic">
          <Diagrama
            datos={data}
            datoEnX="date"
          />
        </Container>
      </Container>
    </div>
  );
}

export default ApiCall