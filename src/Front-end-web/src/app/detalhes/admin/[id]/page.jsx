"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { PenLine, Trash2 } from "lucide-react";
import validator from "validator";
import { SubmitButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { getAdminProfile, deleteAdmin, updateAdmin } from "@/services/admin-services";

const Page = ({params}) => {
    const route = useRouter();
    const { adminProfileData } = getAdminProfile(params.id);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleDeleteAdmin = () => {
        const adminId = params.id
        
        deleteAdmin(adminId);
        route.push("/usuarios")
      }
      const onSubmit = async (data) => {
        const admin = {
          ...data,
          _id: params.id,
        }

        updateAdmin(admin);
        route.push("/usuarios")
      };

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
          <div className="flex flex-col items-center justify-center w-[500px]">
            <div className="flex flex-col w-full">
              <label className="pt-3 pb-2 text-black font-[500]"> Nome </label>
              <Input
                className={
                  errors.nome &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="text"
                placeholder={`${adminProfileData?.name}`}
                {...register("nome", {
                  required: true,
                  minLength: 5,
                })}
              />
              {errors.nome?.type === "required" && (
                <p className="pt-2 text-red-500 text-sm">
                  É obrigatório informar o nome completo
                </p>
              )}
              {errors.nome?.type === "minLength" && (
                <p className="pt-2 text-red-500 text-sm"> O nome é inválido </p>
              )}
            </div>
    
            <div className="flex flex-col w-full">
              <label className="pt-3 pb-2 text-black font-[500]"> Email </label>
              <Input
                className={
                  errors.email &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="text"
                placeholder={`${adminProfileData?.email}`}
                {...register("email", {
                  required: true,
                  validate: (value) => {
                    return validator.isEmail(value);
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <p className="pt-2 text-red-500 text-sm">
    
                  É obrigatório informar o email
                </p>
              )}
              {errors.email?.type === "validate" && (
                <p className="pt-2 text-red-500 text-sm"> O email é inválido </p>
              )}
            </div>
    
            <div className="flex flex-col w-full">
              <label className="pt-3 pb-2 text-black font-[500]"> Senha </label>
              <Input
                className={
                  errors.senha &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="password"
                placeholder="Digite sua senha"
                {...register("senha", {
                  required: true,
                })}
              />
              {errors.senha?.type === "required" && (
                <p className="pt-2 p text-red-500 text-sm">
    
                  É obrigatório informar a senha
                </p>
              )}
            </div>
    
            <SubmitButton label="Alterar" icon={<PenLine />} submitFunction={handleSubmit(onSubmit)}/>

            <AlertDialog>
                  <AlertDialogTrigger asChild>
                      <Button className="w-full mt-5 gap-2 shadow-lg" variant="destructive" > <Trash2 /> Excluir </Button> 
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                      <AlertDialogHeader>
                          <AlertDialogTitle>Você tem certeza?! </AlertDialogTitle>
                          <AlertDialogDescription>
                              Esta ação não pode ser desfeita. <br/>
                              Irá deletar permanentemente todos os dados do usuário selecionado!
                          </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-700 hover:bg-red-500" onClick={handleDeleteAdmin}> Continue </AlertDialogAction>
                      </AlertDialogFooter>
                   </AlertDialogContent>
              </AlertDialog>
          </div>
        </div>
      );
}

export default Page;