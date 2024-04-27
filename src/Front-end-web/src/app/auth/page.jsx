'use client';
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import {LogIn} from 'lucide-react'
import validator from "validator";
import Logo from "@/components/logo";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitButton } from "@/components/submit-button";

const Login = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const session = useSession();

 const route = useRouter();

 if(session.status == "authenticated") {
  route.push('/')
 }

 const handleLogin = async (data) =>  {
  await signIn('credentials', {
    ...data,
    callbackUrl: '/',
  })
};

 return (
  <div className="w-screen h-screen flex justify-center items-center flex-col">
    <Logo />
    <h1 className="text-3xl text-black pt-3"> Login </h1>
    <form className="flex flex-col items-center justify-center w-[500px]" onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col w-full">
        <label className="pt-3 pb-2 text-black font-[500]"> Email </label>
        <Input
          className={
            errors.email &&
            "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
          }
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          {...register("email", { 
            required: true,
            validate: (value) => {return validator.isEmail(value)},
          })}
        />
        {errors.email?.type === 'required' && <p className="pt-2 text-red-500 text-sm"> É obrigatório informar o email </p>}
        {errors.email?.type === 'validate' && <p className="pt-2 text-red-500 text-sm"> O email é inválido </p>}
      </div>

      <div className="flex flex-col w-full">
        <label className="pt-3 pb-2 text-black font-[500]"> Senha </label>
        <Input
          className={
            errors.password &&
            "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
          }
          type="password"
          name="password"
          placeholder="Digite sua senha"
          {...register("password", { 
            required: true, 
            // minLength: 8,
          })}
        />
        {errors.password?.type === 'required' && <p className="pt-2 p text-red-500 text-sm"> É obrigatório informar a senha </p>}
        {/* {errors.password?.type === 'minLength' && <p className="pt-2 p text-red-500 text-sm"> A senha deve ser maior que 8 digitos </p>} */}
      </div>

      <SubmitButton label="Login" icon={<LogIn />} submitFunction={handleSubmit(handleLogin)}/>

      <p className="text-black pt-3"> Não possui uma conta? <Link href="/auth/cadastro" className="text-slate-600 hover:text-red-500"> Cadastre-se </Link> </p>
    </form>
  </div>
 );
};

export default Login;
