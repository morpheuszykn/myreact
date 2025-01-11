import React, { useState, useEffect } from 'react';
import { Typography, Container, Button, TextField, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  commentsSection: {
    marginTop: '30px',
  },
  commentCard: {
    marginBottom: '15px',
  },
  commentInput: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  submitButton: {
    marginTop: '10px',
    backgroundColor: '#707531',
    color: 'white',
    '&:hover': {
      backgroundColor: '#BFBD31',
    },
  },
}));

const ReviewPage = () => {
  const classes = useStyles();
  const [youtubeComments, setYoutubeComments] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch YouTube comments
    axios
      .get('/api/youtube-comments')
      .then((response) => {
        setYoutubeComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching YouTube comments:', error);
      });

    // Fetch user comments
    axios
      .get('/api/reviews/SqoozK8twsc') // Replace with actual video ID
      .then((response) => {
        setUserComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user comments:', error);
      });
  }, []);

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;

    axios
      .post('/api/reviews/SqoozK8twsc', { comment: newComment, user: 'Anonymous' }) // Replace with actual video ID
      .then((response) => {
        setUserComments([...userComments, response.data]);
        setNewComment('');
      })
      .catch((error) => {
        console.error('Error posting comment:', error);
      });
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Unique Cuisine Of Penang Reviews
      </Typography>

      {/* YouTube Comments */}
      <div>
        <Typography variant="h5">YouTube Comments</Typography>
        {youtubeComments.map((comment, index) => (
          <Card key={index} className={classes.commentCard}>
            <CardContent>
              <Typography variant="subtitle1">{comment.user}</Typography>
              <Typography variant="body2">{comment.comment}</Typography>
              <Typography variant="caption" color="textSecondary">
                {new Date(comment.createdAt).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* User Comments */}
      <div className={classes.commentsSection}>
        <Typography variant="h5">User Comments</Typography>
        {userComments.map((comment, index) => (
          <Card key={index} className={classes.commentCard}>
            <CardContent>
              <Typography variant="subtitle1">{comment.user}</Typography>
              <Typography variant="body2">{comment.comment}</Typography>
              <Typography variant="caption" color="textSecondary">
                {new Date(comment.createdAt).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Comment */}
      <div className={classes.commentInput}>
        <TextField
          variant="outlined"
          label="Add your comment"
          multiline
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button className={classes.submitButton} onClick={handleCommentSubmit}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default ReviewPage;

