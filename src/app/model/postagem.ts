import { tema } from "./tema"
import { usuario } from "./Usuario"

export class postagem {
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public usuario: usuario
    public tema: tema
}