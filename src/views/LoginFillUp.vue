<style lang="scss">
    .view_login {
        // height: 100vh;
        // width: 100%;
        // position: relative;
        // box-shadow: 0px 0px 4px #f1f1f1;
        // background: linear-gradient(90deg, rgba(188,49,145,1) 0%, rgba(157,23,65,1) 79%);

        .login_form {
            background: #ffffff;
            position: absolute;
            width: 25%;
            height: 70vh;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 3px;

            .form {
                &.header {
                    height: 35%;
                    background: url('../assets/img/banner.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    position: relative;
                    border-radius: 3px 3px 0 0;

                    .avatar {
                        position: absolute;
                        width: 120px;
                        height: 120px;
                        background: #ffffff;
                        border-radius: 50%;
                        text-align: center;
                        // border: 4px solid;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);

                        img {
                            width: 100%;
                        }
                    }
                }

                &.body {
                    padding: 33px;

                    .field {
                        &.button {
                            button {
                                width: 100%;
                                margin: 15px 0;

                                &.register_btn {
                                    background: transparent;
                                    border: none;
                                    outline: none;
                                    cursor: pointer;
                                }
                            }

                            hr {
                                width: 60%;
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and ( max-width:768px ) {
        .view_login {
            .login_form {
                width: 100%;
                height: 100vh;
            }
        }
    }
</style>

<template>
    <div class="view_login">
        <div class="login_form">
            <div class="form header">
                <div class="avatar">
                    <img :src="require('@/assets/img/avatar-default2.png')" alt="">
                </div>
            </div>

            <div class="form body">
                <div class="field username">
                    <md-field>
                        <label>E-MAIL</label>
                        <md-input required v-model="username" md-autogrow></md-input>
                        <span class="md-helper-text">{{errorList.username}}</span>
                    </md-field>
                </div>

                <div class="field password">
                    <md-field>
                        <label>PASSWORD</label>
                        <md-input type='password' required v-model="password" md-autogrow></md-input>
                        <span class="md-helper-text">{{errorList.password}}</span>
                    </md-field>
                </div>

                <div class="field button">
                    <md-button class="md-raised md-primary login_btn" @click="checkLogin()">LOGIN</md-button>
                    <md-divider class="md-inset"></md-divider>
                    <button type="button" class="register_btn" @click="$router.push(path='/register')">Create Account</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginFillUp',
    components: {

    },
    data () {
        return {
            errorList: {
                username: '',
                password: ''
            },
            username: '',
            password: ''
        }
    },
    mounted() {
        
    },
    methods: {
        checkLogin () {
            var formData = new FormData();

            formData.append('username', this.username)
            formData.append('password', this.password)
            
            this.axios.post( 'https://api.baseplate.appetiserdev.tech/api/v1/auth/login', formData )
                .then ( ( ) => {
                    this.$router.push({name:'LoginSuccess'})
                } )
                .catch ( ( error ) => {
                    this.errorList.username = ''
                    this.errorList.password = ''
                    console.log(error.response.data)
                    if ( error.response.data.errors && error.response.data.errors.username ) {
                        this.errorList.username = error.response.data.errors.username[0]
                    }

                    if ( ! error.response.data.errors ) {
                        this.errorList.password = error.response.data.message
                    }
                } )
        }
    }
}
</script>