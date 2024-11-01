import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useAuthContext } from '../../context/Auth.context';

export const GoogleAuth = () => {
const clientId = "544974330769-cehsokq4c49qrcrmae1jo4o17jjt4gls.apps.googleusercontent.com";
    const {loginGoogle} = useAuthContext()
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    if (credentialResponse && credentialResponse.credential && credentialResponse.clientId)
                    loginGoogle(credentialResponse.credential, credentialResponse.clientId)
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </GoogleOAuthProvider>
    );
};
