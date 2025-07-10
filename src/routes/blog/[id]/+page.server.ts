import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { id } = params;
  const filePath = path.join('src/blog/', id, '/blog.md');
  console.log(filePath)
  if (!fs.existsSync(filePath)) {
    throw error(404, `ERROR: Blog "${id}" not found`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);
  const html = marked(content);
	
  const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }); 


  return {
    title: data.title,
    date: formattedDate,
    content: html
  };
};
