import { Container, Stack } from "@mui/material";
import Post from "./components/Post";
import { useEffect } from "react";
import { getPosts } from "./utils/api";

const App = () => {
  useEffect(() => {
    console.log("ok");
    getPosts().then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <Container sx={{ width: "100%" }}>
      <Stack spacing={5} direction="column" alignItems="center">
        <Post
          img="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          title="Lizard"
          _id="2"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica"
          date={new Date()}
          author="LB"
          likes={3}
        />
      </Stack>
    </Container>
  );
};

export default App;
