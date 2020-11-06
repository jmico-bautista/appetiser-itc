<style lang="scss">
    .view_login_success {
        .login_success {
            background: #ffffff;
            position: absolute;
            width: 25%;
            height: 42vh;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 3px;

            .form {
                &.header {
                    height: 57%;
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

                    .title {
                        font-size: 20px;
                        font-weight: 800;
                    }
                }
            }
        }
    }

    @media only screen and ( max-width:768px ) {
        .view_login_success {
            .login_success {
                width: 100%;
                height: 100vh;

                .form {
                    &.header {
                        height: 40%;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="view_login_success">
        <div class="login_success">
            <div class="form header">
                <div class="avatar">
                    <img :src="require('@/assets/img/success-check.png')" alt="">
                </div>
            </div>

            <div class="form body">
                <span class="title">Welcome!</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginSuccess'
}
</script>