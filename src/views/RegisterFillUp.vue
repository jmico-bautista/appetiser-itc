<style lang="scss">
    .view_register {
        height: 100vh;
        width: 100%;
        position: relative;
        background: linear-gradient(90deg, rgba(91,62,152,1) 0%, rgba(37,75,147,1) 50%);

        .page_blur {
            position: absolute;
            width: 62%;
            height: 85vh;
            background: #ffffff;
            // background: rgba(255, 255, 255, 0.8);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 3px;

            .segments {
                display: inline-flex;
                width: 100%;
                height: 100%;

                .segment {
                    width: 100%;
                    position: relative;

                    &.left {
                        .banner {
                            position: absolute;
                            width: 68%;

                            &.level_1 {
                                left: 10%;
                                top: 6%;
                                padding: 23px;
                                box-shadow: 0px 0px 5px #b8afaf;
                                border-radius: 3px;
                            }

                            &.level_2 {
                                top: 36%;
                                right: 0;
                            }
                            
                            .unq_cards {
                                border-radius: 3px;
                                // background: #ffffff;
                                position: relative;

                                .content {
                                    .unq_cards_title {
                                        font-weight: 800;
                                    }

                                    .unq_cards_content {
                                        button {
                                            margin: 0;
                                            margin-top: 5px;
                                            width: 100%;
                                            background-color: #3a3d8b;
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }

            .register_container {
                display: inline-flex;
                width: 50%;
                background: #ffffff;
                position: absolute;
                top: 9%;
                right: -56px;
                border-radius: 3px;
                box-shadow: 0px 0px 4px #d4cdcd;
                
                .accent_bar {
                    width: 25%;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 3px 0px 0px 3px;
                    }
                }

                .form_body {
                    width: 100%;
                    padding: 50px 50px 50px 40px;

                    .container_head {
                        .title {
                            font-weight: 600;
                            font-size: 20px;
                        }
                    }

                    .register_fields {

                        .field {
                            
                            &.is_reqired {
                                .md-input {
                                    color: red !important;
                                }
                            }

                            .md-helper-text {
                                color: #e87070;
                            }
                        }
                    }

                    .form_footer {
                        text-align: right;

                        .reg_btn {
                            margin: 0;
                            
                            .md-progress-spinner-circle {
                                stroke: #ffffff;
                            }
                        }
                    }

                    .to_login{
                        display: none;
                    }
                }
            }
        }
    }

    @media only screen and ( max-width:768px ) {
        .view_register {
            .page_blur {
                width: 100%;
                height: 100vh;

                .segments {
                    display: none;
                }

                .register_container {
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;

                    .form_body {
                        .to_login {
                            display: block;
                            position: absolute;
                            top: 93%;
                            left: 54%;
                            transform: translate(-50%, -50%);
                            
                            .login_btn {
                                background: transparent;
                                border: none;
                                outline: none;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="view_register">
        <div class="page_blur">
            <div class="segments">
                <div class="segment left">
                    <div class="banner level_1">
                        <div class="unq_cards">
                            <div class="content">
                                <div class="unq_cards_title">
                                    WELCOME! LET'S EXPLORE AND DISCOVER!
                                </div>
                                <div class="unq_cards_content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="banner level_2">
                        <div class="unq_cards">
                            <div class="content">
                                <div class="unq_cards_title">
                                    ALREADY HAVE AN ACCOUNT?
                                </div>
                                <div class="unq_cards_content">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                                    <br/>
                                    <md-button class="md-raised md-primary" @click="$route.push({name:'LoginFillup'})">LOGIN HERE!</md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="segment right">
                    
                </div>
            </div>

            <div class="register_container">
                <div class="accent_bar">
                    <img :src="require('@/assets/img/trianglify-accent.png')" alt="">
                </div>

                <div class="form_body">
                    <div class="container_head">
                        <span class="title">COME JOIN US!</span>
                        <br/>
                        <span class="sub_title">Just fill in these filds.</span>
                    </div>

                    <div class="register_fields">
                        <div class="field is_reqired email">
                            <md-field>
                                <label>E-MAIL</label>
                                <md-input required v-model="email" md-autogrow></md-input>
                                <span class="md-helper-text">{{errorList.email}}</span>
                            </md-field>
                        </div>

                        <div class="field name">
                            <md-field>
                                <label>FULL NAME</label>
                                <md-input required v-model="fname" md-autogrow></md-input>
                                <span class="md-helper-text">{{errorList.fname}}</span>
                            </md-field>
                        </div>

                        <div class="field password">
                            <md-field>
                                <label>PASSWORD</label>
                                <md-input type='password' required v-model="password" md-autogrow></md-input>
                                <span class="md-helper-text">{{errorList.password}}</span>
                            </md-field>
                        </div>

                        <div class="field confirm_password">
                            <md-field>
                                <label>CONFIRM PASSWORD</label>
                                <md-input type='password' required v-model="password_confirmation" md-autogrow></md-input>
                                <span class="md-helper-text">{{errorList.password_conf}}</span>
                            </md-field>
                        </div>
                    </div>

                    <div class="form_footer">
                        <md-button class="md-raised md-primary reg_btn" @click="formValidate()">
                            <span :disabled="isLoading">REGISTER</span>
                        </md-button>
                    </div>

                    <div class="to_login">
                        <button type="button" class="login_btn" @click="$router.push({name:'LoginFillup'})">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterFillUp',
    components: {

    },
    data () {
        return {
            isLoading: false,
            email: '',
            fname: '',
            password: '',
            password_confirmation: '',
            errorList : {
                email: '',
                fname: '',
                password: '',
                password_conf: ''
            }
        }
    },
    mounted() {
        
    },
    methods: {
        formValidate () {
            this.isLoading = true
            var formData = new FormData();

            formData.append('email', this.email)
            formData.append('fname', this.fname)
            formData.append('password', this.password)
            formData.append('password_confirmation', this.password_confirmation)
            this.axios.post( 'https://api.baseplate.appetiserdev.tech/api/v1/auth/register', formData )
                .then ( ( response ) => {
                    this.isLoading = false
                    localStorage.setItem("info", JSON.stringify(response.data));
                    this.$router.push({name:'Verify'})
                } )
                .catch ( ( error ) => {
                    this.errorList.email = ''
                    this.errorList.fname = ''
                    this.errorList.password = ''
                    this.errorList.password_conf = ''

                    if ( error.response.data.errors.email ) {
                        this.errorList.email = error.response.data.errors.email[0];
                    }

                    if ( this.fname.length == 0 ) {
                        this.errorList.fname = "Name is required.";
                    }

                    if ( error.response.data.errors.password && this.password.length <= 8 ) {
                        this.errorList.password = error.response.data.errors.password[0];
                    }

                    if ( error.response.data.errors.password && this.password.length >= 8 ) {
                        this.errorList.password_conf = error.response.data.errors.password[0];
                    }

                    setTimeout ( ( ) => {
                        this.isLoading = false
                    }, 1000)
                } )
        }
    }
}
</script>