type Env = (key: string, defaultValue?: string) => string & { bool: (key: string, defaultValue?: boolean) => boolean };

export default ({ env }: { env: Env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
});
