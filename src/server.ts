import { app } from "./app";
import { databaseURL, port } from "./config";
import authNService  from "./lib/pangea/pangea";

// console.log(authNService);

const listen = () => {
    return new Promise<void>((resolve, reject) =>
    // @ts-ignore
      app.listen(port, (error) => {
        if (error) {
          return reject(error);
        }
        return resolve();
      })
    );
  };
  
  listen().then(() =>
    // tslint:disable-next-line:no-console
    console.info(
      `Listening on http://localhost:${port}.`,
      `Press CTRL-C to stop\n`
    )
  );