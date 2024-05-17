import { getMedicos } from "@/actions/getMedicos";
import { Medicos } from "@/interfaces/medicos";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const MedicosTabla = async () => {
    const medicos: Medicos[] = await getMedicos();

    return (
        <>
            <Table className="max-w-7xl mx-auto">
                <TableCaption>Lista de médicos</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Apellido Paterno</TableHead>
                        <TableHead>Apellido Materno</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {medicos.map((medico: Medicos) => (
                        <TableRow key={medico.id_medico}>
                            <TableCell>{medico.id_medico}</TableCell>
                            <TableCell className="font-medium">{medico.nombre}</TableCell>
                            <TableCell>{medico.apellido_paterno}</TableCell>
                            <TableCell>{medico.apellido_materno}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>

        </>
    )
}