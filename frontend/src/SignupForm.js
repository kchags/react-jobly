// import { useState, useContext, useEffect } from 'react';
// import UserContext from './UserContext';
// import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
// import { useHistory } from 'react-router-dom';

// const SignupForm = ({ addUser, error }) => {
//   const intialState = {
//     username: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//   };
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState(intialState);
//   const { user } = useContext(UserContext);
//   const history = useHistory();

//   useEffect(() => {
//     if (user) {
//       history.push('/');
//     }
//   }, [user, history]);

//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setFormData((fData) => ({
//       ...fData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       setIsLoading(true);
//       await addUser(formData);
//       setIsLoading(false);
//       if (user) {
//         setFormData(intialState);
//         history.push('/companies');
//       }
//     } catch (e) {
//       alert(e);
//       setIsLoading(false);
//     }
//   };
//   return (
//     <div className='col-md-4 m-auto'>
//       <h2 className='mt-3'>Sign Up</h2>
//       <Form className='search-form mt-2' onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor='username'>Username</Label>
//           <Input
//             id='username'
//             name='username'
//             required
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor='password'>Password</Label>
//           <Input
//             id='password'
//             name='password'
//             type='password'
//             required
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor='firstName'>First Name</Label>
//           <Input
//             id='firstName'
//             name='firstName'
//             required
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor='lastName'>Last Name</Label>
//           <Input
//             id='lastName'
//             name='lastName'
//             required
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor='email'>Email</Label>
//           <Input
//             id='email'
//             name='email'
//             type='email'
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </FormGroup>
//         {error && error.type === 'signup' ? (
//           <Alert className='mt-2' color='danger'>
//             {error.message}
//           </Alert>
//         ) : null}

//         <Button className='mt-2' disabled={isLoading} color='primary'>
//           Sign Up
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default SignupForm;
import React, { useState, useContext, useEffect } from 'react';
import UserContext from './UserContext';
import { Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const SignupForm = ({ addUser, error }) => {
  const initialState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  };
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setIsLoading(true);
      await addUser(formData);
      setIsLoading(false);
      setFormData(initialState);
      history.push('/companies');
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="col-md-4 m-auto">
      <h2 className="mt-3">Sign Up</h2>
      <Form className="search-form mt-2" onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        {/* {error && error.type === 'signup' && error.message ? (
          <Alert className="mt-2" color="danger">
            {error.message}
          </Alert>
        ) : null} */}

        <Button className="mt-2" disabled={isLoading} color="primary">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
