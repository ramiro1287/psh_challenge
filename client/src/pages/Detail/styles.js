import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '40%',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '35px',
      fontWeight: '600',
      textDecoration: 'underline',
      color: theme.palette.secondary.main,
    },
}));

export default useStyles;
