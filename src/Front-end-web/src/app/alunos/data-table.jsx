
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu";
import { ChevronDown, Pen, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { getStudentsList } from "@/hooks/alunos-hooks";

export function DataTable() {
  const {data} = getStudentsList();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Turma</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((data) => (
          <TableRow key={data._id}>
            <TableCell className="font-medium">{data._id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell >{data.class_number}</TableCell>
            <TableCell> 
            <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center gap-3">
                    <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem> <Link href="/" className='flex justify-between items-center w-full text-yellow-500'> Editar <Pen className="w-4 h-4 "/> </Link></DropdownMenuItem>
                  <DropdownMenuItem> <Link href="/" className='flex justify-between w-full items-center text-red-500'> Excluir <Trash2 className="w-4 h-4"/></Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
