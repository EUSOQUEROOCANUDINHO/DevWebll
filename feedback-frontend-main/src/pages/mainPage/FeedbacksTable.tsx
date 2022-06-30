import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getFeedbacks, getPessoas } from '../../services/http';
import { Pessoa } from './PessoasTable';

class Feedback
{
    public id:number = 0;
    public titulo:string = "nao";
    public nivel:Number = 0;
    public texto:string = "";
    public avaliado:Pessoa = new Pessoa();
}

export default function FeedbacksTable() {
  
  var nome:string

  const [data, dataSet] = useState<Feedback[]>([]);

  useEffect(() => {
    var feedbacks:Feedback[] = [];
    (async () => {
      const result = await getFeedbacks();
      if(result)
      {
        Object.assign(feedbacks, result.data);
        dataSet(feedbacks);
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
            <TableCell align="right">Titulo</TableCell>
            <TableCell align="right">Nivel</TableCell>
            <TableCell align="right">Texto</TableCell>
            <TableCell align="right">Avaliado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((feedback) => (
            <TableRow
              key={feedback.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {feedback.id}
              </TableCell>
              <TableCell align="right">{feedback.titulo}</TableCell>
              <TableCell align="right">{feedback.nivel.toString()}</TableCell>
              <TableCell align="right">{feedback.texto}</TableCell>
              <TableCell align="right">{feedback.avaliado != null? feedback.avaliado.nome : 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}