export class Server {
    public serverName : string;
    public serverContent: string;
    public type: string;

    constructor(name: string , content: string , type: string) {
       
        this.serverContent = content;
        this.serverName = name;
        this.type = type;
    }
}
