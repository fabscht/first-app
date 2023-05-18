import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'FirstApp',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
