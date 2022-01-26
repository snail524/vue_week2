const app = {
    data(){
        return{
            url: 'https://vue3-course-api.hexschool.io/v2',
            path: 'immigrant524',
            products: [],
            temp: '',
        }
    },
    methods:{
        getProducts(){

            axios.get(`${this.url}/api/${this.path}/admin/products`)
            .then(res=>{
                // console.log(res.data.products);
                this.products = [...res.data.products,];
                
            })
            .catch(rej=>{
                console.dir(rej)
            })
        },
        Authorization(){
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1")
            axios.defaults.headers.common['Authorization'] = token;
            axios.post(`${this.url}/api/user/check`)
            .then(res=>{
                // console.log(res);
            })
            .catch(err=>{
                window.location='login.html';
            })

        }

    },
    mounted(){
        this.Authorization();
        this.getProducts();
    }
    
}
Vue.createApp(app).mount('#app')
