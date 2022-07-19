import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './miscellaneous/Header';
import MainFeaturedPost from './miscellaneous/MainFeaturedPost';
import FeaturedPost from './miscellaneous/FeaturedPost';
import Sidebar from './miscellaneous/Sidebar';
import Footer from './miscellaneous/Footer';

const sections = [
  {title: 'Pokemon', url: './pokemon'},
  { title: 'Tales of Berseria', url: '#' },
  { title: 'Mario + Rabbids', url: '#' },
  { title: 'Fire Emblem', url: '#' },
  { title: 'Shin Megami Tensei', url: '#' },
  { title: 'Octopath Traveler', url: '#' },
  { title: 'Kirby', url: '#' },
  { title: 'Plant vs. Zombies', url: '#' },
  { title: 'Horizon Zero Dawn', url: '#' },
  { title: 'Ever Oasis', url: '#' },
];

const mainFeaturedPost = {
  title: 'Why do I like Video Games?',
  description:
    "Cause they're fun and can bring out all kinds of emotion from the player. With so many different games and stlyes of gameplay anyone can be happy to play.",
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Video_game_controller_icon_designed_by_Maico_Amorim.svg/150px-Video_game_controller_icon_designed_by_Maico_Amorim.svg.png',
  imageText: 'text',
  linkText: 'a',
};

const featuredPosts = [
  {
    title: 'What is my favorite type of video game?',
    date: '7/14/22',
    description:
      "I prefer turn-based games from turn-based rpgs to turn-based strategy games. These were some of the first major games I played as a kid so there is some bias but with turn-based games a larger emphasis is put on strategy and utilising you and your opponent's turns.",
    image: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/01/Turn-based-RPGs-of-the-decade.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5',
    imageLabel: '',
  },
  {
    title: 'Trying to make a game',
    date: '7/10/22',
    description:
      'Game design is no easy task as you must be good in art, animation, music, programming, and more in order to create a fun and successful game. That is why game studios have whole teams for things like art or level design. However the process of game design has become slightly easier with the addtion of game engines which make it easier for normal people to learn game design.',
    image: 'https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png',
    imageLabel: '',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],  
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/' }
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="My Favorite Video Games/Game Series" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}