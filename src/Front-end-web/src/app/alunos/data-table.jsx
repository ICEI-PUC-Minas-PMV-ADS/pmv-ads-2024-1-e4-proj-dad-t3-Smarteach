
import { getStudentsList } from '@/services/alunos.services'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
