// Formik
import { Formik, Form } from 'formik';
// Schemas
import { loginSchema, initialValues } from '@/utils/schemas/loginSchema';
// Shared
import TextField from '@/components/shared/TextField';
import Submit from '@/components/shared/Submit';
// Next
import Link from 'next/link';
// Types
import { Field } from '@/types/Field';

const loginFields: Field[] = [
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
];

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={loginSchema}
    >
      <Form className='mt-8 flex flex-col'>
        {loginFields.map((field) => (
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
        <Submit label='Iniciar sesión' />
        <p className='flex justify-center mt-5 text-white tracking-[-0.165px]'>
          ¿No tienes cuenta?&nbsp;
          <Link href='/register' className='underline'>
            Registrate
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default Login;
