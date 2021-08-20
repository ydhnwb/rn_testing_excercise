import LoginUserResponse from "./login_user_response";

// i know it should be a base response, but i keep it simple
export default interface LoginResponse {
    status: boolean,
    message: string,
    errors: string[],
    data: LoginUserResponse | {}
}