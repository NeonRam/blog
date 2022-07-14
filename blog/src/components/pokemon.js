import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './miscellaneous/Header';
import MainFeaturedPost from './miscellaneous/MainFeaturedPost';
import FeaturedPost from './miscellaneous/FeaturedPost';
import Main from './miscellaneous/Main';
import Sidebar from './miscellaneous/Sidebar';
import Footer from './miscellaneous/Footer';
import post1 from './miscellaneous/blog-post.1.md';
import post2 from './miscellaneous/blog-post.2.md';
import post3 from './miscellaneous/blog-post.3.md';

const sections = [
  { title: 'Home', url: '#' },
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
    "",
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/375px-Pokebola-pokeball-png-0.png',
};

const featuredPosts = [
  {
    title: 'My Favorite Type',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'My Favorite Pokemon',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
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
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
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