import axios from "axios";

const url="http://localhost:8080/contact";
const regi="http://localhost:8080/registration";
class ContactService{
    getallContact(){
        let data= axios.get(url);
        console.log(data);
    }
    createContact(Contact){
        return axios.post(url,Contact)
    }
    createRegistration(registration){
        return axios.post(regi,registration)
    }

}
export default new ContactService();