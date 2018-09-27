import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from 'axios'

export const store = new Vuex.Store({
    strict: true,
    state: {
        coins: [],
        profile: [],
        allJobs: [],
        boards: [],
        blocks: [],
        modalOpen: false,
    },
    getters: {
        modalOpen: state => state.modalOpen
    },    
    actions: {
        allJobs ({ commit }) {
            let arrJobs = []
            axios.get('http://homologacao.envolvelabs.com.br/agemed/wp-json/wp/v2/posts')
            .then(r => r.data)
            .then(allJobs => {
                allJobs.forEach(function(val,index){
                   arrJobs.push(val)
                })
                commit('SET_JOBS', arrJobs) 
            })
        },
        loadBoards (context,val) {
            axios.get('http://homologacao.envolvelabs.com.br/agemed/wp-json/acf/v3/users/'+val)
            .then(r => r.data)
            .then(board => {
                context.commit('SET_BOARDS', board.acf.quadros)
            })
        },
        loadCards ({commit}) {
            commit('GET_CARDS',store.state.profile.acf.notices)
        },
        loadProfile ({ commit },val) {
            let arrProfile = []
            axios.get('http://homologacao.envolvelabs.com.br/agemed/wp-json/wp/v2/users/'+val)
            .then(r => r.data)
            .then(response => {
                commit('SET_PROFILE', response)
            })
        },
        loadCoins ({ commit }) {
            let arrCoin = []
            axios.get('http://homologacao.envolvelabs.com.br/agemed/wp-json/wp/v2/boards/')
            .then(r => r.data)
            .then(coins => {
                coins.forEach(function(val,index){
                   arrCoin.push(val.title.rendered)
                })
                arrCoin.push('default')
                console.log(arrCoin)
                commit('SET_COINS', arrCoin)
            })
        },
        loadPosts ({commit}) {
            let posts = []
            axios.get('http://homologacao.envolvelabs.com.br/agemed/wp-json/wp/v2/posts')
            .then(r => r.data)
            .then(response => {
                posts.push({'id':0, 'status': 'default','priority': 'add'})
                response.forEach(function(val,index){
                   posts.push({'id': index+1,'status': 'warning','priority': 'add'})
                })
                console.log(JSON.stringify(posts))
                commit('SET_BLOCKS', posts)
            })
        },
        postCoin (context,id) {
            $.ajax( {
                url: 'http://homologacao.envolvelabs.com.br/agemed/wp-json/wp/v2/boards/',
                method: 'POST',
                beforeSend: function ( xhr ) {
                    xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
                },
                data:{
                    'title' : 'Sera que vai?'
                }
            } ).done( function ( response ) {
                console.log( response );
            } );
            // $.ajax({
            //     url: 'http://homologacao.envolvelabs.com.br/agemed/wp-json/acf/v3/users/'+localStorage.getItem('user_id'),
            //     method: 'POST',
            // beforeSend: function ( xhr ) {
            //     xhr.setRequestHeader( 'Authorization', 'Basic a3lydmltOjMzNjQ2Nzk3' );
            // },                
            // data: {
            //     'acf': {
            //         'notices': id
            //     }
            // }})
            // .done( function ( response ) {
            //     console.log( response )
            // })    

            // let arrCoin = []
            // axios.get('http://homologacao.envolvelabs.com.br/agemed/wp-json/wp/v2/boards/')
            // .then(r => r.data)
            // .then(coins => {
            //     coins.forEach(function(val,index){
            //        arrCoin.push(val.title.rendered)
            //     })
            //     arrCoin.push('default')
            //     console.log(arrCoin)
            //     context.commit('SET_COINS', arrCoin)
            //     context.commit('toogleModal')
            // })
        }
    },
    mutations: {
        toogleModal (state) {
            state.modalOpen = !state.modalOpen
        },
        setProfile (state, profile) {
            state.profile = profile
        },
        getProfile (state) {
            store.dispatch('loadCoins')
        },        
        SET_PROFILE (state, profile) {
            state.profile = profile
        },
        SET_BOARDS (state, boards) {
            let board = []
            boards.forEach(function(val,index){
                board.push(val.post_title)
            })
            board.push('default')
            state.boards = board
        },
        GET_CARDS (state,params) {
            console.log(params)            
        },
        SET_COINS (state, coins) {
            state.coins = coins
            setTimeout(function() { 
                store.dispatch('loadPosts')
            }, 5000)
        },
        SET_JOBS (state, allJobs) {
            state.allJobs = allJobs
        },
        SET_BLOCKS (state, blocks) {
            console.log(blocks)
            state.blocks = blocks
        },
        newBoard: (state, board) => {
            var stageDefault = state.coins.indexOf('default');
            var explodeDefault = state.coins.splice(stageDefault, 1);

            $.ajax({
                url: 'http://homologacao.envolvelabs.com.br/agemed/wp-json/wp/v2/boards',
                method: 'POST',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic a3lydmltOjMzNjQ2Nzk3' );
            },
            data:{
                'title' : board,
                'status' : 'publish'
            }})
            .done( function ( response ) {
                console.log( response.id )
                store.dispatch('postCoin',response.id)
            })
        }
    }
});