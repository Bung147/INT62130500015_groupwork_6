const constraints = {
        firstname:{
            presence: true
    },
        lastname:{
            presence: true
        },
        title:
        {
            presence: true
        } 
}
    const app = {
        data() {
            return {
                firstname:'jirpat',
                lastname :'karawaek',
                title :'Student',
                article: '34',
                followers:'940',
                ratings:'8.9',
                profile:'/INT203_62130500015/62130500015_groupwork_2/images/profile.jpg',
                fname:'',
                lname:'',
                job:'',
                show:false
            }
        },
        methods: {
            checkForm(e){
                this.errors = validate({firstname: this.fname,
                                        lastname: this.lname,
                                    title: this.job},
                                        constraints)
                console.log(this.errors)
                if(!this.errors){
                    this.errors = []
                    setTimeout(() => {
                         alert("Save Changes successfully.");
                        this.setvalue()
                      }, 500)
                    
                }
            },
            setvalue(){
                this.firstname = this.fname;
                this.lastname = this.lname;
                this.title = this.job;
                this.clear();
            },
            clear()
            {
                this.show= false;
            },
            edit()
            {
                this.show= !this.show;
            }
        }
    }
    mountedapp = Vue.createApp(app).mount('#app')