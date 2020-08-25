import {RealLocation} from './index';

class Contact {
    public name?: string;
    public location?: RealLocation;
    public phone?: string;
    public email?: string;

    constructor(name?: string, location?: RealLocation, phone?: string, email?: string) {
        if(name !== undefined) this.name = name;
        if(location !== undefined) this.location = location;
        if(phone !== undefined) this.phone = phone;
        if(email !== undefined) this.email = email;
    }
}

export default Contact;