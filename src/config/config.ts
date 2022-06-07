const dotenv = require('dotenv');
dotenv.config();


export const config = {
  "postgres": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
  },

  "aws": {
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
  },

  "jwt": {
    "secret": ""
  },
  // "prod": {
  //   "username": "postgres",
  //   "password": "Password",
  //   "database": "",
  //   "host": "udagram1.czv2tc4fufuy.us-east-1.rds.amazonaws.com",
  //   "dialect": "postgres"
  // }
}
