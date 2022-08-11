import React, { useState, useEffect } from 'react';
import { Container } from '../../components';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { SERVER_URL } from 'config/ipConfig';
import axios from 'axios';
import { Detail } from 'pages';

const Home = () => {
  const [hackathons, setHackathons] = useState([]);
  const [hackId, setHackId] = useState(null);
  const classes = useStyles();

  const getData = async () => {
    try {
      let res = await axios({
        url: SERVER_URL + '/api/v1/hackathons/',
        method: 'get',
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json',
        }
      })

      if (res.status === 200) {
        setHackathons(res.data)
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData()
  }, [])

  const hackDetail = (id) => {
    setHackId(id)
  }

  return (
    <Container justifyContent='center'>
    {hackId ? <Detail id={hackId} />
    :
    <Container className={classes.mainContainer}>
      <Typography className={classes.title} color='primary'>
        Hackathons
      </Typography>
      {hackathons ?
        <Container>
          {hackathons.map((hack) => (
            <Container key={hack.id} className={classes.listContainer}>
              <Typography onClick={() => hackDetail(hack.id)} className={classes.testList}>
                {'Title: ' + hack.title + ' Date: ' + hack.date}
              </Typography>
            </Container>
          ))}
        </Container>
      : null}
    </Container>
    }
    </Container>
  );
};

export default Home;
