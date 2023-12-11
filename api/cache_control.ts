import type { VercelResponse } from '@vercel/node';
 
export const config = {
  runtime: 'edge',
};
 
export default function handler(response: VercelResponse) {
  response.setHeader('Cache-Control', 'public, s-maxage=1');
}