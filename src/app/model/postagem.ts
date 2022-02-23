import { tema } from "./tema"
import { Usuario } from "./usuario"


export class postagem {
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public usuario: Usuario
    public tema: tema
}