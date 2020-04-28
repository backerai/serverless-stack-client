export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "backer-serverless-stack"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://53ss2ilm9h.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_vwCWFR0lZ",
      APP_CLIENT_ID: "4jli8sq1n09pg57bqdionabf62",
      IDENTITY_POOL_ID: "us-east-1:ba66f949-48f4-445f-b48b-7aa4ec523c00"
    }
  };