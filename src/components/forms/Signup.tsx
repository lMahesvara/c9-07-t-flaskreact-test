// Formik
import { Formik, Form } from 'formik';
// Schemas
import { registerSchema, initialValues } from '@/utils/schemas/registerSchema';
// Shared
import TextField from '@/components/shared/TextField';
import Submit from '@/components/shared/Submit';
// Types
import { Field } from '@/types/Field';

const registerFields: Field[] = [
  {
    label: 'Nombre',
    id: 'name',
    type: 'text'
  },
  {
    label: 'Correo electrónico',
    id: 'email',
    type: 'text'
  },
  {
    label: 'Contraseña',
    id: 'password',
    type: 'password'
  },
  {
    label: 'Repetir Contraseña',
    id: 'confPassword',
    type: 'password'
  },
];

const Signup = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={registerSchema}
    >
      <Form className='mt-8 flex flex-col'>
        {registerFields.map((field) => (
          <div className='flex flex-col mb-4' key={field.label}>
            <label
              htmlFor={field.id}
              className='text-[14px] leading-[17px] text-white mb-2'
            >
              {field.label}
            </label>
            <TextField id={field.id} name={field.id} type={field.type}/>
          </div>
        ))}
        <Submit label='Registrarse' />
      </Form>
    </Formik>
  );
};

export default Signup;
