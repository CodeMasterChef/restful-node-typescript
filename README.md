# restful-node-typescript
The simplest Restful API with Node and Typescript

# How to run

```
npm install 

npm run watch
```

## How to development:

First, you can create a controller file, example `src/controllers/status.controller.ts`:
```
import { Request, Response } from 'express'

export let hi = (req: Request, res: Response) => {
    res.send("Hi you")
}

export let awesome = (req: Request, res: Response) => {
    res.send("EVERYTHING IS AWESOME")
}
```

And import it into app.ts file:

```
app.get('/hi', hi);
app.get('/awesome' , awesome);

```