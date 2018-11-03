import { Request, Response } from 'express'

export let hi = (req: Request, res: Response) => {
    res.send("Hi you")
}

export let awesome = (req: Request, res: Response) => {
    res.send("EVERYTHING IS AWESOME")
}