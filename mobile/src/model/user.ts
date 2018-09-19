export class Aluno{
    private _nome: string;
    private _telefone: number;
    private _endereco: string;
    private _cidade: string;
    private _email: string;
    private _senha: string;
    private _cpf:number;

    get nome(): string{
        return this._nome;
    }
    set nome(nome: string){
        this._nome = nome
    }

    get telefone(): number{
        return this._telefone;

    }
    set telefone(telefone: number){
        this._telefone = telefone;
    }

    get endereco(): string{
        return this._endereco;
    }
    set endereco(endereco: string){
        this._endereco = endereco;
    }

    get cidade():string{
        return this._cidade;
    }
    set cidade(cidade: string){
        this._cidade = cidade;
    }

    get email(): string{
        return this._email;
    }
    set email(email: string){
        this._email = email;
    }

    get senha(): string{
        return this._senha;
    }
    set senha (senha: string){
        this._senha = senha;
    }

    get cpf(): number{
        return this._cpf
    }
    set cpf(cpf: number){
        this._cpf = cpf;
    }
}