import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Https';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 72,
      justifyContent: 'center',
      width: '100%'
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
    lock: {
      marginRight: 8
    }
  }),
);


export interface CircularIntegrationProps {
  status: 'loading' | 'success' | any,
  onClick: () => any,
  title: string,
}
export default function CircularIntegration(props: CircularIntegrationProps) {
  const { status, onClick, title } = props
  const classes = useStyles()
  const success = status == 'success'
  const loading = status == 'loading'

  const style = clsx({
    [classes.buttonSuccess]: success,
  })

  const CircleSpinner = () => {
    console.log('circle spinner')
    return (
      <div className={classes.wrapper}>
        <Fab aria-label="Https" color="primary" className={style} onClick={onClick}>
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
      </div>
    )
  }

  const SubmitButton = () => {
    console.log('submit button')
    return (
      <div className={classes.wrapper}>
        <Button variant="contained" color="primary" className={style + ` `} disabled={loading} onClick={onClick}>
          <SaveIcon className={classes.lock} /> {title}
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    )
  }

  return (
    <div className={classes.root}>
      { loading ? <CircleSpinner /> : <SubmitButton />}
    </div>
  )
}
