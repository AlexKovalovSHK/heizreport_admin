export interface UserRegister {
    userMail: string;
    userPassword: string;
}

export interface User {
    userId: number;
    userVorname: string;
    userName: string;
    userMail: string;
    userAccess: string;
    userFirma: string;
    userStrasse: string;
    userHNr: string;
    userPLZ: string;
    userOrt: string;
    userTelefon: string;
    userLexofficeId: string;
    userStatus: number;
    userArt: number;
    userRechnungEmpfaenger: string;
    userRedate: Date;
    userLastlogin: number;
    userLat: number;
    userLng: number;
}

export interface UserEdit {
    userId: number;
    userVorname: string;
    userName: string;
    userFirma: string;
    userStrasse: string;
    userHNr: string;
    userPLZ: string;
    userOrt: string;
    userTelefon: string;
}

export interface RegistrationError {
    message?: string
    errors?: {
        [key: string]: string;
    }
}

export interface UserState {
    user?: User;
    usersList?: User[];
    userID?: string;
    errorMessage?: string;
    role?: string;
    status?: 'idle' | 'loading' | 'success' | 'error';
    paginationUsers: UsersPage
}

export interface EmailDto {
    usersId: string,
    userMail: string
}

export interface UserLogin {
    userMail: string,
    userPassword: string,
}

export interface UsersPage {
    current_pag: number;
    data: User[];
    total_elements: number;
    total_pages: number;
}

export interface ChangePwd {
    userId: string;
    password2: string;
}
