import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
 
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-room-design_owner:npg_Ga0OWMAUx2Nw@ep-winter-smoke-a5t0rxbz-pooler.us-east-2.aws.neon.tech/ai-room-design?sslmode=require',
  },
});
