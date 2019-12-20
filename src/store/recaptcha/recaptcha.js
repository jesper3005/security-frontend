import captchaValidation from '../../services/recaptcha-service'

const action = {
    validate({token}) {
        captchaValidation.validate(token)
            .then(data => {
                console.log(data);
                router.push('/');
                this.$router.go(0);
            },
                error => {
                    console.log('Captcha action failed: ' + error.message)
                }
            );
    }
}

export const recaptcha = {
    namespaced: true,
    action,
}