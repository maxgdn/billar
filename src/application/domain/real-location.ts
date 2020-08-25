
class RealLocation {
    public address: string;
    public city: string;
    public code: string;

    constructor(address: string, city: string, code: string){
        this.address = address;
        this.city = city;
        this.code = code;
    }
}

export default RealLocation;