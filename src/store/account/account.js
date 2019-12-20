import { router } from '../../router'
import { userService } from '../../services/user-service'

const data = JSON.parse(localStorage.getItem('data'));
const state = data ? { status: { loggedIn: true }, data } : { status: {}, data: null }

const actions = {
    login({ commit, dispatch }, { email, password }) {
        commit('loginRequest', { email })

        userService.login(email, password, '127.0.0.1')
            .then(data => {
                commit('loginSucces', data);
                console.log("You have logged in")
                router.push('/');
                this.$router.go(0);

            },
                error => {
                    console.log('Login action failed')
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true })
                }
            );
    },

    passwordValidation(password) {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (password === strongRegex) {
            return password
        } else {
            return "Insufficent password, must contain 1 uppercase, 1 number and 1 special character"
        }
    }

    logout({ commit }) {
        userService.logout();
        commit('logout')
    },

    async getUserInformation(email, token) {
        try {
            const res = await userService.getUserInformation(email, token);
            if ( res.status === 200 ) {
                const data = await res.json();
                return data;
            } else {
                console.log("There was no data")
            }
        } catch (e) {
            console.log('Something went wrong ' + e.message)
        }
    }
};

const mutations = {
    loginRequest(state, data) {
        state.status = { loggingIn: true };
        state.data = data;
    },
    loginSuccess(state, data) {
        state.status = { loggedIn: true };
        state.data = data;
    },
    loginFailure(state) {
        state.status = {};
        state.data = null;
    },
    logout(state) {
        state.status = {};
        state.data = null;
    }
}

export const account = {
    namespaced: true,
    state,
    actions,
    mutations,
}