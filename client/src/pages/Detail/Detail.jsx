import React, { useState, useEffect } from 'react';
import { Container } from '../../components';
import useStyles from './styles';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';
import { SERVER_URL } from 'config/ipConfig';
import axios from 'axios';

const Detail = ({ id }) => {
  const [hack, setHack] = useState(null);
  const classes = useStyles();

  const getData = async () => {
    try {
      let res = await axios({
        url: SERVER_URL + '/api/v1/hackathons/' + id + '/',
        method: 'get',
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json',
        }
      })

      if (res.status === 200) {
        setHack(res.data)
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container className={classes.mainContainer}>
      <Typography className={classes.title} color='primary'>
        Developers
      </Typography>
      {hack ?
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                <TableCell>Developer</TableCell>
                <TableCell align="right">Position</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {hack.developers.map((dev) => (
                <TableRow
                    key={dev.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {dev.first_name + ' ' + dev.last_name}
                    </TableCell>
                    <TableCell align="right">{dev.position}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
      : null
      }
    </Container>
  );
};

export default Detail;
