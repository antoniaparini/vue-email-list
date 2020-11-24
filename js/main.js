
/**
 * Generare 10 email e stamparle a schermo utilizzando Vue, Axios e il seguente API endpoint boolean:
https://flynn.boolean.careers/exercises/api/random/mail
 */

var app = new Vue ({

    el:'#app',

    data: {

        mail_listbox: [],
},
/**Utilizzabile anche la sintassi counted */
mounted() {

    const self = this

        for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail') .then(function (reply) {

            self.mail = reply.data.response;

            self.mail_listbox.push(self.mail);
        });

    }

}

});
