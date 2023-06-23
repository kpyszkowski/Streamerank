export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGODB_USER: string;
      MONGODB_PASSWORD: string;
      MONGODB_HOST: string;
      MONGODB_PORT: number;
    }
  }
}
