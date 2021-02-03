const app = {
    data() {
        return {
            // msg: 'Hello ,Vue3',
            // show: true,
            // url: 'http://www.sit.kmutt.ac.th/'

            firstname: 'Pornpipat',
            lastname:'Thumpan',
            career:'Gamer,Programmer',
            image:'./images/profile.jpg',
            url: 'https://www.facebook.com/pornpipat.thumpan.3/',
            url1: 'https://github.com/pornpipatpt'

        }
    },
}

var mountedApp = Vue.createApp(app).mount('#app')