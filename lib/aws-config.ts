// Simple AWS Configuration for BlogTube College Project

// Region configuration
export const awsRegion = "us-east-1" // Change to your region

// S3 Configuration
export const s3Config = {
  bucketName: "blogtube-college-project",
  folders: {
    images: "images/",
    blogs: "blogs/",
    profiles: "profiles/",
  },
}

// Cognito Configuration
export const cognitoConfig = {
  userPoolId: "YOUR_USER_POOL_ID", // Replace with your User Pool ID
  clientId: "YOUR_CLIENT_ID", // Replace with your App Client ID
}

// DynamoDB Configuration
export const dynamoDBConfig = {
  tables: {
    users: "BlogTubeUsers",
    blogs: "BlogTubeBlogs",
  },
}

