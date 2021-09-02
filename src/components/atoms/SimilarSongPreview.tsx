import { Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { FC, useEffect, useRef, useState } from 'react';
import { SimilarSong } from '../../model/SongAnalyze';

interface Props {
  song: SimilarSong;
}

const useStyles = makeStyles((theme) => ({
  listItemAvatar: {
    marginRight: theme.spacing(1.5),
    minWidth: 58,
  },
  avatarWrapper: {
    'overflow': 'hidden',
    'position': 'relative',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'cursor': 'pointer',

    '&:hover $play': {
      display: 'block',
    },

    '&:hover $avatar': {
      opacity: 0.2,
    },
  },
  play: {
    position: 'absolute',
    zIndex: 2,
    display: 'none',
  },
  avatar: {
    width: 58,
    height: 58,
    transition: 'all 0.2s',
  },
  title: {
    marginBottom: 8,
    fontSize: 16,
    lineHeight: '18px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: '18px',
  },
}));

export const SimilarSongPreview: FC<Props> = ({ song }) => {
  const audio = useRef<HTMLAudioElement>();
  const [isPlaying, setIsPlayng] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    audio.current = new Audio(song.previewUrl);
  }, [song.previewUrl]);

  const play = () => {
    if (audio.current) {
      audio.current.play();
      setIsPlayng(true);
    }
  };

  const pause = () => {
    if (audio.current) {
      audio.current.pause();
      setIsPlayng(false);
    }
  };

  return (
    <ListItem key={song.uri} disableGutters>
      <ListItemAvatar className={classes.listItemAvatar}>
        <div className={classes.avatarWrapper}>
          {isPlaying ? (
            <PauseCircleOutlineIcon className={classes.play} color="primary" fontSize="large" onClick={pause} />
          ) : (
            <PlayCircleOutlineIcon className={classes.play} color="primary" fontSize="large" onClick={play} />
          )}
          <Avatar className={classes.avatar} src={song.albumArt} variant="rounded" />
        </div>
      </ListItemAvatar>
      <ListItemText
        classes={{
          primary: classes.title,
          secondary: classes.subtitle,
        }}
        primary={song.title}
        secondary={song.artist}
      />
    </ListItem>
  );
};
