import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getPessoas } from '../../services/http';
import { Setor } from './SetoresTable';

export class Pessoa
{
    public id:number = 0;
    public nome:string = "nao";
    public email:string = "";
    public setor:Setor = new Setor;
}

export default function PessoasTable() {
  
  var nome:string

  const [data, dataSet] = useState<Pessoa[]>([]);

  useEffect(() => {
    var pessoas:Pessoa[] = [];
    (async () => {
      const result = await getPessoas();
      if(result)
      {
        Object.assign(pessoas, result.data);
        dataSet(pessoas);
        console.log(pessoas[0].setor);
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
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Setor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((pessoa) => (
            <TableRow
              key={pessoa.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pessoa.id}
              </TableCell>
              <TableCell align="right">{pessoa.nome}</TableCell>
              <TableCell align="right">{pessoa.email}</TableCell>
              <TableCell align="right">{pessoa.setor != null? pessoa.setor.nome : 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}