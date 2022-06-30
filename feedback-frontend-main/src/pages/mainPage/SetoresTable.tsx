import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getSetores } from '../../services/http';

export class Setor
{
    public id:number = 0;
    public nome:string = "nao";
    public descricao:string = "";
}

export default function SetoresTable() {
  
  var nome:string

  const [data, dataSet] = useState<Setor[]>([]);

  useEffect(() => {
    var setores:Setor[] = [];
    (async () => {
      const result = await getSetores();
      if(result)
      {
        Object.assign(setores, result.data);
        dataSet(setores);
      }
    })();
  }, []);

  
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((setor) => (
            <TableRow
              key={setor.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {setor.id}
              </TableCell>
              <TableCell align="right">{setor.nome}</TableCell>
              <TableCell align="right">{setor.descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}