"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { PenLine, Trash2  } from "lucide-react";
import validator from "validator";
import { SubmitButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button"
import { deleteStudent } from "@/services/alunos-services"
import { useRouter } from "next/navigation";
import { getStudentProfile, updateStudent } from "@/services/alunos-services"
import { getClassList } from "@/services/turmas-services";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Detalhes = ({params}) => {
    const {studentData} = getStudentProfile(params.id)
    const {classData} = getClassList()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const route = useRouter();
      
      const handleDeleteStudent = () => {
        const studentId = params.id
        
        deleteStudent(studentId);
        route.push("/alunos")
      }
    
      const onSubmit = async (data) => {
        const student = {
          ...data,
          _id: params.id,
        }

        updateStudent(student);
        route.push("/alunos")
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
                placeholder={`${studentData?.name}`}
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
                placeholder={`${studentData?.email}`}
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
              <label className="pt-3 pb-2 text-black font-[500]"> Número da Turma </label>
    
              <div>
                <select 
                  name="Turma"
                  placeholder="Selecione a turma"
                  {...register("class_number", {required: true})}
                  className={
                    errors.class_number 
                    ? "bg-red-300 border-red-500 text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500border block w-full p-2.5"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  }
                >
                  <option value="" selected disabled> Selecione a Turma </option> 
                  {classData?.map(turma => (
                      <option value={turma.number}>{turma.number}</option>
                    ))}
                  {errors.class_number?.type === "required" && (
                    <p className="pt-2 text-red-500 text-sm">
                      É obrigatório informar o número da turma
                    </p>
                  )}
                </select>
              </div>
    
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
                  <AlertDialogAction className="bg-red-700 hover:bg-red-500" onClick={handleDeleteStudent}> Continue </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      );
}

export default Detalhes;