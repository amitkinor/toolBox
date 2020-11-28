// TODO wrap this project properly 

type RouteHandler<T = void> = (req: Request, res: Response, next: NextFunction) => T;

type AsyncRouteHandler = RouteHandler<Promise<any>>;

function wrapAsyncAndSend(fn: AsyncRouteHandler): RouteHandler {
  const handler: RouteHandler = (req, res, next) => {
    fn(req, res, next)
      .then(result => res.send(result))
      .catch(next);
  };
  return handler;
}
router.get('/', wrapAsyncAndSend(() => getUsersAsync()));