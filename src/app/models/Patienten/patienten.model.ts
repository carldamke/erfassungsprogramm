export class Patienten {
    private nid: string;
    public cvname: string;
    public cnname: string;
    public cdate: string;
    public ctime: string;

    constructor(pnid:string, pcvname: string, pcnname: string, pcdate: string, pctime: string) {
        this.nid = pnid;
        this.cvname = pcvname;
        this.cnname = pcnname;
        this.cdate = pcdate;
        this.ctime = pctime;
    }
}
