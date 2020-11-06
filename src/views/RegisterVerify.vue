<style lang="scss" scoped>
    .view_register_verify {
        height: 100vh;
        width: 100%;
        position: relative;
        background: linear-gradient(90deg, rgba(91,62,152,1) 0%, rgba(37,75,147,1) 50%);

        .register_verify_container {
            display: inline-flex;
            width: 37%;
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 3px;
            box-shadow: 0px 0px 4px #d4cdcd;
            
            .accent_bar {
                width: 20%;
                background: url('../assets/img/trianglify-accent.png');

                img {
                    width: 100%;
                    border-radius: 3px 0px 0px 3px;
                }
            }

            .form_body {
                width: 100%;
                padding: 50px 50px 50px 40px;

                .container_head {
                    margin-bottom: 10px;
                    .title {
                        font-weight: 600;
                        font-size: 20px;
                    }
                }

                .form_footer {
                    text-align: right;
                    margin-top: 55px;

                    .reg_btn {
                        margin: 0;
                    }
                }

                .to_register {
                    position: absolute;
                    top: 93%;
                    left: 54%;
                    transform: translate(-50%, -50%);
                    
                    .register_btn {
                        background: transparent;
                        border: none;
                        outline: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    @media only screen and ( max-width:768px ) {
        .view_register_verify {
            .register_verify_container {
                    width: 100%;
                    height: 100vh;
            }
        }
    }
</style>

<template>
    <div class="view_register_verify">
        <div class="register_verify_container">
            <div class="accent_bar">
                <!-- <img :src="require('@/assets/img/trianglify-accent.png')" alt=""> -->
            </div>

            <div class="form_body">
                <div class="container_head">
                    <span class="title">LET'S VERIFY YOUR ACCOUNT.</span>
                    <br/>
                    <span class="sub_title">We've sent a verification code to your email.</span>
                </div>

                <div class="register_fields">
                    <div class="field email">
                        <md-field>
                            <label>TOKEN</label>
                            <md-input type='number' required v-model="token" md-autogrow></md-input>
                            <span class="md-helper-text">{{errorList.tokenCode}}</span>
                        </md-field>
                    </div>
                </div>

                <div class="form_footer">
                    <md-button class="md-raised md-primary verify_btn" @click="resendVerifyCode()">RESEND CODE</md-button>
                    <md-button class="md-raised md-primary verify_btn" @click="verifyCode()">VERIFY</md-button>
                </div>

                <div class="to_register">
                    <button type="button" class="register_btn" @click="$router.push(name='Fillup')">Create Account</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterVerify',
    data () {
        return {
            token: '',
            authenToken: '',
            authenTokenType: '',
            errorList: {
                tokenCode: ''
            }
        }
    },
    mounted() {

        if ( JSON.parse(localStorage.getItem('info')) ) {
            this.authenToken = JSON.parse(localStorage.getItem('info')).data.access_token
            this.authenTokenType = JSON.parse(localStorage.getItem('info')).data.token_type
            this.authenTokenType = this.authenTokenType.charAt(0).toUpperCase() + this.authenTokenType.slice(1)
        } else {
            this.$router.push({name:'Fillup'})
        }
    },
    methods: {
        resendVerifyCode () {
            this.errorList.tokenCode = ''
            
            this.axios ({
                method:'post',
                url:'https://api.baseplate.appetiserdev.tech/api/v1/auth/verification/resend',
                headers: {'Authorization': this.authenTokenType + ' ' + this.authenToken},
                data: {
                    via: 'email'
                },
            })
        },
        verifyCode () {
            this.authenToken = JSON.parse(localStorage.getItem('info')).data.access_token
            this.authenTokenType = JSON.parse(localStorage.getItem('info')).data.token_type
            this.authenTokenType = this.authenTokenType.charAt(0).toUpperCase() + this.authenTokenType.slice(1)

            this.axios ({
                method:'post',
                url:'https://api.baseplate.appetiserdev.tech/api/v1/auth/verification/verify',
                headers: {'Authorization': this.authenTokenType + ' ' + this.authenToken},
                data: {
                    token: this.token,
                    via: 'email'
                },
            })
            .then ( ( ) => {
                localStorage.removeItem('info')
                this.$router.push({name:'LoginFillup'})
            } )
            .catch ( ( error ) => {
                this.errorList.tokenCode = ''

                console.log(error.response.data.errors)
                if ( error.response.data.errors && error.response.data.errors.token) {
                    this.errorList.tokenCode = error.response.data.errors && error.response.data.errors.token[0]
                }

            } )
        }
    }
}
</script>