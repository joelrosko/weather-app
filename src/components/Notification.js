import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Notification = ({ msg, onClose }) => {
    return (
        <Alert variant="filled" severity="warning" style={{marginTop: 5}}
        action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                onClose(false);
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
            <AlertTitle>{msg}</AlertTitle>
        </Alert>
    )
}

export default Notification
