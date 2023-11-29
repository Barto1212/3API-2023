import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import type { FC } from "react";
import type { Post as PostProps } from "../../../types";
import { patchPost } from "../utils/api";

const Post: FC<PostProps> = ({ img, title, description, likes, _id }) => {
  const plusOneLike = async() => {
    await patchPost(_id, {likes: likes +1})
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={plusOneLike} />
            {likes}
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
export default Post;
