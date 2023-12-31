This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# THE ADMIN SITE IS HOSTED ON: https://lmsadmin.vercel.app/
# THE USER SITE IS HOSTED ON: https://lmsuser.vercel.app/

# PLEASE READ MORE

This site has also has an USER PANEL for viewing, renting books: https://github.com/Abhishekkumar-1/lmsuser

# You can see the video of website in above mp4 file- 20230617234132.mp4

https://github.com/Abhishekkumar-1/lmsadmin/assets/105112878/0717524b-c129-435a-8e06-aceea98586c8


## Getting Started

Steps:

Download the file Code.

Run the command 
    -npm install ,if this doesn't work
    -npm install --force
    
Create an .env file and create the following variables in it:
MONGODB_URI
GITHUB_ID,
GITHUB_SECRET,
GOOGLE_ID,
GOOGLE_SECRET,

Then, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
# ABOUT THE ADMIN PANEL:

The Admin can login through Google or Github

The Admin has a dashboard

The Admin has access to add new books, edit books or delete them

The Admin can create new genre for boooks making easy for sorting books

The Admin canview all Orders placed by users

The Admin can add new Admin that will have acces to admin panel

## NOTE: The code has been changed to allow any one to access database but only for project purpose. 


# ABOUT THE USER PANEL:

The User can view all books

The User has a Rent store

The User has access to view new books, rent books and add to cart

The Admin rent the books

## NOTE: A payment gateway has also been implemented using Stripe


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
