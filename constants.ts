
import { Article, Category } from './types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Future of AI in Modern Education',
    excerpt: 'How artificial intelligence is reshaping classrooms and personalized learning experiences for the next generation.',
    content: 'Artificial Intelligence is no longer a futuristic concept but a present reality in modern classrooms...',
    category: Category.EDUCATION,
    author: 'Sarah Chen',
    date: 'Oct 24, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Top 10 Tech Gadgets of 2024',
    excerpt: 'A comprehensive review of the most innovative gadgets that are set to define the tech landscape this year.',
    content: 'From foldable displays to wearable AI, 2024 is shaping up to be an incredible year for hardware enthusiasts...',
    category: Category.TECHNOLOGY,
    author: 'James Wilson',
    date: 'Nov 12, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Maintaining Mental Wellness in a Digital Age',
    excerpt: 'Practical tips and strategies for balancing screen time with mindfulness and physical health.',
    content: 'Digital burnout is real. In this article, we explore how to maintain boundaries with your devices...',
    category: Category.HEALTH,
    author: 'Dr. Emily Reed',
    date: 'Dec 05, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    title: 'Breaking: Global Renewable Energy Milestones',
    excerpt: 'Renewable energy sources have hit a record high in global consumption according to latest reports.',
    content: 'The shift toward sustainable energy has accelerated faster than expected in the last quarter...',
    category: Category.NEWS,
    author: 'Robert Gale',
    date: 'Jan 15, 2024',
    imageUrl: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: '5',
    title: 'Getting Started with React and Tailwind',
    excerpt: 'A step-by-step tutorial for beginners to build beautiful web interfaces efficiently.',
    content: 'Tailwind CSS has revolutionized how we think about styling in the React ecosystem...',
    category: Category.TUTORIALS,
    author: 'Alex Dev',
    date: 'Feb 01, 2024',
    imageUrl: 'https://picsum.photos/800/600?random=5'
  }
];

export const BLOGGER_THEME_XML = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsversion='3' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <meta content='width=device-width, initial-scale=1' name='viewport'/>
    <title><data:blog.pageTitle/></title>
    <b:skin><![CDATA[
      /* MODERN BLOGGER THEME STYLES - PINSPIRATION EDITION */
      :root {
        --primary: #db2777;
        --text-main: #1e293b;
        --text-light: #64748b;
        --bg: #fff1f2;
      }
      body {
        font-family: 'Inter', sans-serif;
        background: var(--bg);
        margin: 0;
        color: var(--text-main);
      }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
      header { background: #fff; border-bottom: 1px solid #fce7f3; padding: 20px 0; position: sticky; top: 0; z-index: 100; }
      .nav { display: flex; gap: 20px; list-style: none; padding: 0; }
      .nav a { text-decoration: none; color: var(--text-main); font-weight: 500; }
      .nav a:hover { color: var(--primary); }
      .main-content { display: grid; grid-template-columns: 1fr 300px; gap: 40px; padding: 40px 0; }
      @media (max-width: 768px) { .main-content { grid-template-columns: 1fr; } }
      article { background: #fff; padding: 20px; border-radius: 8px; margin-bottom: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
      .post-title { font-size: 2rem; margin: 10px 0; color: #831843; }
      .post-meta { color: var(--text-light); font-size: 0.9rem; margin-bottom: 20px; }
      .sidebar { background: #fff; padding: 20px; border-radius: 8px; align-self: start; }
      footer { background: #500724; color: #fff; padding: 40px 0; margin-top: 60px; }
    ]]></b:skin>
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&amp;display=swap' rel='stylesheet'/>
  </head>
  <body>
    <header>
      <div class='container'>
        <b:section id='header' maxwidgets='1' showaddelement='no'>
          <b:widget id='Header1' locked='true' title='Pinspiration (Header)' type='Header'/>
        </b:section>
        <nav>
          <ul class='nav'>
            <li><a href='/'>Home</a></li>
            <li><a href='/search/label/Technology'>Technology</a></li>
            <li><a href='/search/label/Education'>Education</a></li>
            <li><a href='/search/label/Health'>Health</a></li>
            <li><a href='/p/about.html'>About</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class='container main-content'>
      <div class='posts-area'>
        <b:section id='main' showaddelement='yes'>
          <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'/>
        </b:section>
      </div>
      
      <aside class='sidebar'>
        <b:section id='sidebar' showaddelement='yes'>
          <b:widget id='Label1' locked='false' title='Categories' type='Label'/>
          <b:widget id='PopularPosts1' locked='false' title='Popular Articles' type='PopularPosts'/>
        </b:section>
      </aside>
    </main>

    <footer>
      <div class='container'>
        <p>&copy; <data:blog.title/> - Built with Pinspiration Theme</p>
      </div>
    </footer>
  </body>
</html>`;
