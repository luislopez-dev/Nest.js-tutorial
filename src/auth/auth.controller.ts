import { Body, Controller, HttpCode, HttpStatus, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {

    constructor(private authService: AuthService){}
    
    @Post("signup")
    // @UsePipes(ValidationPipe)
    signup(
       @Body() dto: AuthDto
    ) {
        console.log({
           dto
        })
        return this.authService.signup(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post("signin")
    signin(
        @Body() dto: AuthDto
    ){
        return this.authService.signin(dto);
    }
}