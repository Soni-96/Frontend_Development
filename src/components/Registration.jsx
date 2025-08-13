
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
  function onSubmit(data) {
      console.log(data);

      navigate('/');
  }
  return (
    <div>
     
      <form onSubmit={handleSubmit(onSubmit)} className='register'>
          <label>User Name:</label>
          <input {...register('username',{required:true , pattern: /^[A-Za-z]+$/i })}></input>
          {errors?.username?.type === "pattern" && (
           <p>Alphabetical characters only</p>
          )}
          <br/>
          <br/>
          <label>Password:</label>
          <input {...register('password',{required:true})}></input>
          <br/>
          <br/>
          <input type='submit' className='back-btn'></input>
      </form>
    </div>
  )
}

export default Registration