
 class Errors {

    constructor(){
        this.errors = {};
    }

    get(field){

        if(this.errors[field]){

            return this.errors[field][0];

        }

    }


    any(){

        return Object.keys(this.errors).length > 0;

    }


    has(field){
        return this.errors.hasOwnProperty(field);
    }

    record(errors){

        this.errors = errors;

    }

    clear(field) {

        if(field) {
            delete this.errors[field];
        }
        else{
            this.errors = {};
        }


    }

}


export default class Form {

    constructor(data){

        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }


        this.errors = new Errors();

        this.loading = false;

    }



    reset() {

        for(let field in originalData){

            this[field] = '';

        }

    }


    data() {

        let data = {};
        for (let property in this.originalData){
            data[property] = this[property];
        }

        return data;

    }



    submit(url) {

        return new Promise((resolve, reject) => {

            this.loading = true;

            axios.post(url, this.data())

                .then(response => {
                    this.loading = false;


                    // new PNotify({
                    //     title: 'Éxito',
                    //     text: response.data.message,
                    //     addclass: 'bg-success',
                    //     animate_speed: 'fast',
                    //     delay: 2000
                    // });
                        
                    this.onSuccess(response.data);

                    resolve(response.data);

                })

                .catch( error => {

                    this.loading = false;


                    // new PNotify({
                    //     title: 'Advertencia',
                    //     text: 'Existen algunos datos sin completar',
                    //     addclass: 'bg-warning',
                    //     animate_speed: 'fast',
                    //     delay: 3000
                    // });
                        
                    this.onFail(error.response.data.errors);

                    reject(error.response.data.errors);

                })


        });



    }


    onSuccess(data){


        this.errors.clear();
    }

    onFail(errors) {
        this.loading = false;

        this.errors.record(errors);
    }




}