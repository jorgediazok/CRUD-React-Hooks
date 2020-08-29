import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    props.addUser(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, message: 'Name is Required' },
        })}
      />
      <div style={{ color: 'red' }}>{errors?.name?.message}</div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: { value: true, message: 'Username is Required' },
        })}
      />
      <div style={{ color: 'red' }}>{errors?.username?.message}</div>
      <button>Add New User</button>
    </form>
  );
};

export default AddUserForm;
