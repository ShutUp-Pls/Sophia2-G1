import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
const Div = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
  background-color: rgba(4,96,219,0.8);
  width: 500px;
  & li{
    color:#F0FFFF;
    list-style-type: none;
    font-size: 30px;
    font-style: italic;
  }
`

const InputContainer = styled.div`
  display: flex;
  border: 1px solid #999;
  border-radius: 2px;
  max-width: 366px;
  & input{
    height: 50px;
    width: 300px;
    font-size: 20px;
    border: none;
  }
`
const StyledLink = styled.div`
  display: inline-block;
  padding: 6px 6px ;
  margin-top: 15px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color:rgba(4,96,219,0.5);
  cursor: pointer;
  & a{
    text-decoration: none;
    font-size: 20px;
    font-weight: 800;
    color: #d5d5d5;
  }
`

const Button = styled.button`
 
 border: none;
 height: 54px;
 cursor: pointer;
 border-left: 1px solid #999;
 & img{
   max-width: 50px;
   max-height: 50px;
 }
`

const ApiCall = () => {
  const [fetchName, setFetchName] = useState({})
  const [name, setName] = useState()
  let verification = Object.values(fetchName)

  return (
    <div>

      <Formik
        initialValues={{ search: '' }}
        onSubmit={async values => {
          let name = values.search
          setName(name)
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
          setFetchName(data.items)
        }}
      >
        <Form>
          <InputContainer>
            <Field name='search' placeholder="Buscar..." />
            <Button type='submit'><img src='../images/lens.png' /></Button>
          </InputContainer>
        </Form>
      </Formik>
      {verification["length"] === 0 ? <h2>{name} no existe en la api</h2> :
        <div>
          <h2> Existe en la api</h2>
          <Div>
            <ul>
              <li>Nombre: {verification[0].name}</li>
              <li>Pais: {verification[0].country}</li>
              <li>Profesion: {verification[0].profession}</li>
              <li>Numero de menciones: {verification[0].mentions}</li>
              <li>Sexo: {verification[0].gender}</li>
              <li>Año: {verification[0].year}</li>
            </ul>

          </Div>
        </div>}
      <StyledLink>
        <Link href="../">Volver</Link>
      </StyledLink>
    </div>
  );
}

export default ApiCall