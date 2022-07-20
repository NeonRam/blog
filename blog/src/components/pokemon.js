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
  { title: 'Home', url: './blog' },
  { title: 'Tales of Berseria', url: '#' },
  { title: 'Mario + Rabbids', url: '#' },
  { title: 'Fire Emblem', url: '#' },
  { title: 'Shin Megami Tensei', url: '#' },
  { title: 'Octopath Traveler', url: '#' },
  { title: 'Kirby', url: '#' },
  { title: 'Plants vs. Zombies', url: '#' },
  { title: 'Horizon Zero Dawn', url: '#' },
  { title: 'Ever Oasis', url: '#' },
];

const mainFeaturedPost = {
  title: 'Why I like Pokemon',
  description:
    "You get to collect a wide variety of Pokemon ranging from cool to cute and get to do fun things with them like battling or simply playing. Plus turn based combat is always a plus.",
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/375px-Pokebola-pokeball-png-0.png',
  imageText: '',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'My Favorite Pokemon',
    date: 'Nov 12',
    description:
      'Honestly my favorites are Hydreigon and Alcremie just cause one is really cool and the other is really cute.',
    image: 'https://s1.zerochan.net/Pok%C3%A9mon.600.3054189.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'My Favorite Type',
    date: 'Nov 11',
    description:
      'Water, its just an element I really like.',
    image: 'https://ih1.redbubble.net/image.402379416.5464/st,small,507x507-pad,600x600,f8f8f8.u7.jpg',
    imageLabel: 'Image Text',
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
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/'}
  ],
};

const theme = createTheme();

export default function Pokemon() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Pokemon" sections={sections} />
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