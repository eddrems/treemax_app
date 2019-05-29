<template>




    <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body">
            <section class="flexbox-container">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <div class="col-md-4 col-10 box-shadow-2 p-0">
                        <div class="card border-grey border-lighten-3 px-1 py-1 m-0">
                            <div class="card-header border-0">
                                <div class="card-title text-center">
                                    <h3>TreeMax</h3>
                                </div>
                            </div>
                            <div class="card-content">
                                <p class="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1"><span>Ingresa tus credenciales</span> </p>
                                <div class="card-body">
                                    <form class="form-horizontal"  action="#" @submit.prevent="iniciarSesion" @keydown="form_login.errors.clear($event.target.name)">
                                        <fieldset class="form-group position-relative has-icon-left">
                                            <input type="text" :class="form_login.errors.has('usuario') ? 'form-control form-control-danger border-danger' : 'form-control'" placeholder="usuario" v-model="form_login.usuario">
                                            <div class="form-control-position">
                                                <i class="ft-user"></i>
                                            </div>
                                            <p class="text-right" v-if="form_login.errors.has('usuario')"><small class="danger text-muted" v-text="form_login.errors.get('usuario')"></small></p>
                                        </fieldset>
                                        <fieldset class="form-group position-relative has-icon-left">
                                            <input type="password" :class="form_login.errors.has('password') ? 'form-control form-control-danger border-danger' : 'form-control'"  placeholder="password" v-model="form_login.password">
                                            <div class="form-control-position">
                                                <i class="fa fa-key"></i>
                                            </div>
                                            <p class="text-right" v-if="form_login.errors.has('password')"><small class="danger text-muted" v-text="form_login.errors.get('password')"></small></p>
                                        </fieldset>
                                        <div class="form-group row">
                                            <div class="col-md-6 col-12 text-center text-sm-left">
                                                <fieldset>
                                                    <input type="checkbox" id="remember-me" class="chk-remember" v-model="form_login.recordar">
                                                    <label for="remember-me"> Recordarme</label>
                                                </fieldset>
                                            </div>
                                            <div class="col-md-6 col-12 float-sm-left text-center text-sm-right">
                                                <a href="recover-password.html" class="card-link">Recuperar Clave Olvidada</a>
                                            </div>
                                        </div>
                                        <button role="button" class="btn btn-outline-info btn-block" @click="iniciarSesion()" >
                                            <span v-if="form_login.loading"><i class="icon-refresh spinner"></i> iniciando sesión...</span>
                                            <span v-else><i class="ft-unlock"></i> Iniciar Sesión</span>                                            
                                        </button>
                                    </form>
                                </div>
                                <p class="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1"><span>Aún no tienes cuenta ?</span></p>
                                <div class="card-body">
                                    <a href="register-with-bg-image.html" class="btn btn-outline-danger btn-block"><i class="ft-user"></i> Registrarse</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>


</template>

<script>


    import Form from'../../../form.js';

    export default {
        name: 'login',

        data(){
            return{
                
                loading: false,

                form_login: new Form({

                    usuario: '',
                    password: '',
                    recordar: false,

                }),



            }
        },

        created () {
            
            

        },

        mounted() {

            

        },

        methods: {


            iniciarSesion() {
							
                this.form_login.submit('/autenticacion/login')
                    .then(data => {

                        if(data.success){

                            console.log('bienvenido');
                            window.location.href = "/dashboard";
                            
                                            
                        }

                    })

                    .catch(errors => {
                        this.loading_nuevo_custom = false;
                    });					
                   
                

			},









        }
    }
</script>


<style scoped>

</style>