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

    logout({ commit }) {
        userService.logout();
        commit('logout')
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