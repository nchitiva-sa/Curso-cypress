import { LoginElements } from './Login.elements';

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.type(username)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }
    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }
    static login (username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
    
}