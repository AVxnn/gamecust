import React, { useContext } from 'react'
import { Context } from '../../pages/_app';
import AuthService from '../../utils/auth/AuthService';

const registrationEmail = async (item : any) => {
  console.log(item)
  const response = await AuthService.registrationGoogle(item.username, item.email, item.picture, item.sub, item.email_verified);
  await console.log(response)
  // await localStorage.setItem('token', response.data.accessToken);
  return response
}

export default registrationEmail