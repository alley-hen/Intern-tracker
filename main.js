// class contructor for intern objects
class Intern {
    constructor(Name, AvailableDate, FrontendExp, BackendExp, OtherExp, Email) {
        this.Name = Name,
            this.AvailableDate = AvailableDate,
            this.FrontendExp = FrontendExp,
            this.BackendExp = BackendExp,
            this.OtherExp = OtherExp,
            this.Email = Email
    }
}

// dummy intern instances
let intern1 = {
    "Name": "Allison Henning",
    "AvailableDate": "01/12/2021",
    "FrontendExp": "OK",
    "BackendExp": "Terrible",
    "OtherExp": "Great",
    "Email": "allison.gird@gmail.com"
}
let intern2 = {
    "Name": "John Doe",
    "AvailableDate": "01/12/2021",
    "FrontendExp": "OK",
    "BackendExp": "Great",
    "OtherExp": "Great",
    "Email": "johndoe@gmail.com"
}
let intern3 = {
    "Name": "Bob Dylan",
    "AvailableDate": "01/01/2022",
    "FrontendExp": "OK",
    "BackendExp": "Terrible",
    "OtherExp": "Great",
    "Email": "bobdylan@gmail.com"
}

//popukate with dummy instances
let interns = [intern1, intern2, intern3]

// Bulma navbar component
Vue.component('ah-nav', {
    template:
        `<nav class="navbar is-black" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="index.html">
                    <i class="fas fa-baby"> Intern Tracker</i>
                </a>
            </div>
        </nav>`
});

// Bulma card component
Vue.component('intern-card', {
    template:
        `<div class="columns is-multiline ">
        <div v-for="intern in interns" class="column is-one-third">
        <div class="card">
        <header class="card-header">
        <p class="card-header-title">{{ intern.Name }}
        </p>
        </header>
        <div class="card-content">
        <div class="content">
            <p> Available start date: {{ intern.AvailableDate }}</p>
            <p> Front-end skills: {{ intern.FrontendExp }}   <span v-bind:class="intern.FrontendExp"><i class="fas fa-baby"></i></span></p>
            <p> Back-end skills: {{ intern.BackendExp }}   <span v-bind:class="intern.BackendExp"><i class="fas fa-baby"></i></span></p>
            <p> Other work experience: {{ intern.OtherExp }}   <span v-bind:class="intern.OtherExp"><i class="fas fa-baby"></i></span></p>
            <p> Email: {{ intern.Email }}</p>
        </div>
        </div>
        <footer class="card-footer">
        <button class="button is-primary"><a v-bind:href="sendMail">Contact</a></button>
        <button @click="deleteInt" class="button is-primary is-light">Remove {{intern.Name}}</button>
        </footer>
        </div>
        </div>
        </div>`,
    methods: {
        // method to delete entries
        deleteInt(e) {
            let name1 = (e.target.innerHTML).slice(7);
            let index = interns.indexOf(x => x['Name'] !== name1)
            interns.splice((index - 1), 1)
        }
    },
    data: function () {
        return {
            // fetch interns array from general scope to component scope
            interns: interns,
            // I could not for the life of me get this to work with email address!!
            sendMail: 'mailto:'
        }
    }
});

new Vue({
    el: '#root',
    data: {
        isVisible: false,
        name: '',
        availability: '',
        selectedF: '',
        selectedB: '',
        selectedW: '',
        Email: ''
    },
    methods: {
        showModal() {
            this.isVisible = true;
        },
        addIntern() {
            //new intern using constructor class
            let addedIntern = new Intern(
                this.name,
                this.availability,
                this.selectedF,
                this.selectedB,
                this.selectedW,
                this.email
            )
            // check all essential fields completed
            if (this.name === "" || this.selectedF === "" || this.selectedB === "" || this.selectedW === "") {
                alert('Please correctly complete all fields to add')
            }
            else {
                // push new intern to array of interns
                interns.push(addedIntern);
                this.isVisible = false;
            }         
        }
    }

});
