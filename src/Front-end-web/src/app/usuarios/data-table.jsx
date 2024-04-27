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
import { ChevronDown, Pen } from 'lucide-react';
import Link from 'next/link';

export function DataTable({ data }) {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead TableHead>Turma</TableHead>  
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((data) => (
          <TableRow key={data._id}>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.email}</TableCell>
            {data?.class_number 
              ? <TableCell>{data.class_number}</TableCell> 
              : <TableCell>
                  {data?.classes?.map((classItem, index) => (
                    <p key={index}>{classItem}</p>
                  ))}
                </TableCell> 
            }
            <TableCell> 
              <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center">
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href={`/detalhes/${data._id}`} className='flex justify-between items-center w-full text-yellow-500'>
                      Editar <Pen className="w-4 h-4 "/>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
