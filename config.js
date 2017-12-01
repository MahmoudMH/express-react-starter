require('env2')('./config.env');

const dbConfig = env => {
  if (env === 'development') {
    return {
      database: process.env.DEVELOPMENT_DATABASE,
      bucketName: process.env.BUCKET_NAME,
      bucketKey: process.env.BUCKET_KEY,
      awsAccessId: process.env.AWS_ACCESS_KEY_ID,
      awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY
    };
  } else if (env === 'test') {
    return {
      database: process.env.TEST_DATABASE,
      bucketName: process.env.BUCKET_NAME,
      bucketKey: process.env.BUCKET_KEY
    };
  } else {
    throw new Error('specify enviroment, only "test" and "development" is available now');
  }
};
module.exports = {
  DB_CONFIG: dbConfig(process.env.NODE_ENV)
};
