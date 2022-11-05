import { router, publicProcedure } from '@server/trpc';
import { registerUserController } from '@modules/authentication/use-cases/registerUser';
import { z } from 'zod';

export const authenticationRouter = router({
  ping: publicProcedure.query(() => 'Authentication router'),
  login: publicProcedure.query(() => 'login'),
  // registerUser: publicProcedure.mutation(
  //   async ({ ctx }) => await registerUserController.execute(ctx.req, ctx.res)
  // ),
});
