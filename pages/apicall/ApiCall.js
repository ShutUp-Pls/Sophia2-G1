import { useState } from 'react'
import { Formik, Form, Field } from 'formik'


const ApiCall = () => {
  const [fetchName, setFetchName] = useState({})
  const [name, setName] = useState()
  console.log(fetchName)
  let verification = Object.values(fetchName)
  console.log(fetchName[0])
  console.log(name)


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
                // update with your user-agent
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
          <Field name='search' />
        </Form>
      </Formik>
      {verification["length"] === 0 ? <h2>{name} no existe en la api</h2> : <h2>{name} existe en la api</h2>}
    </div>
  );
}

export default ApiCall