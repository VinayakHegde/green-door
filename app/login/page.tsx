'use client'
import { LoginForm } from '@/components/login-form';
import { Main } from '@/components/main';

export default function Login() {
  return (
    <Main>
      <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
      <LoginForm />
    </Main>
  )
}