import { router, publicProcedure } from '@server/trpc';
import { authenticationRouter } from '@modules/authentication/routes';

export const appRouter = router({
  ping: publicProcedure.query(async () => `we're up and running!`),
  auth: authenticationRouter,
});

export type AppRouter = typeof appRouter;
