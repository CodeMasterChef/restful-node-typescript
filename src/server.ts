import app from './app'

const server = app.listen( app.get("port"), app.get("address"), () => {
    console.log(
                "App is running on http://%s:%d in %s mode",
                app.get("address"),
                app.get("port"),
                app.get("env")
            )
  });


export default server;