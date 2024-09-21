import { Request, Response } from "express";

export default function mainHandler(request: Request, response: Response): void {
    response.json({
        message: "Aplicação em Execução"
    })
}