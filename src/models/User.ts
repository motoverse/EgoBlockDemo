import { Token } from "./Token"

export interface User {
    uid: string
    tokens: Token[]
}