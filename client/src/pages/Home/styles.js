import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
      flexDirection: 'column',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '35px',
      fontWeight: '600',
      textDecoration: 'underline',
      color: theme.palette.secondary.main,
    },
    listContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    testList: {
      textAlign: 'center',
      backgroundColor: '#DEDEDE',
      marginBottom: '15px',
      fontSize: '20px',
      fontWeight: '500',
      padding: '5px 10px 2px 10px',
      borderRadius: '10px',
      cursor: 'pointer',
    },
}));

export default useStyles;
