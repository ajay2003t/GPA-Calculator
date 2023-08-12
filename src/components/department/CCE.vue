<template>
    <div>
        <h1 class="text-center">Computer Communication And Engineering</h1>
        <base-card>
            <div class="form-group">
                <h4>Communication Systems: EC3491</h4>
                <input type="radio" value='10' class="option" v-model="cs">O
                <input type="radio" value="9" class="option" v-model="cs">A+
                <input type="radio" value="8" class="option" v-model="cs">A
                <input type="radio" value="7" class="option" v-model="cs">B+
                <input type="radio" value="6" class="option" v-model="cs">B
                <input type="radio" value="5" class="option" v-model="cs">C
                <input type="radio" value="0" class="option" v-model="cs">RA
            </div>
            <div class="form-group">
                <h4>Artificial intelligence And Machine Learning: CS3491</h4>
                <input type="radio" value='10' class="option" v-model="aiml">O
                <input type="radio" value="9" class="option" v-model="aiml">A+
                <input type="radio" value="8" class="option" v-model="aiml">A
                <input type="radio" value="7" class="option" v-model="aiml">B+
                <input type="radio" value="6" class="option" v-model="aiml">B
                <input type="radio" value="5" class="option" v-model="aiml">C
                <input type="radio" value="0" class="option" v-model="aiml">RA
            </div>
            <div class="form-group">
                <h4>Operating Systems: AL3452</h4>
                <input type="radio" value='10' class="option" v-model="os">O
                <input type="radio" value="9" class="option" v-model="os">A+
                <input type="radio" value="8" class="option" v-model="os">A
                <input type="radio" value="7" class="option" v-model="os">B+
                <input type="radio" value="6" class="option" v-model="os">B
                <input type="radio" value="5" class="option" v-model="os">C
                <input type="radio" value="0" class="option" v-model="os">RA
            </div>
            <div class="form-group">
                <h4>Database Management Systems: CS3492</h4>
                <input type="radio" value='10' class="option" v-model="dbms">O
                <input type="radio" value="9" class="option" v-model="dbms">A+
                <input type="radio" value="8" class="option" v-model="dbms">A
                <input type="radio" value="7" class="option" v-model="dbms">B+
                <input type="radio" value="6" class="option" v-model="dbms">B
                <input type="radio" value="5" class="option" v-model="dbms">C
                <input type="radio" value="0" class="option" v-model="dbms">RA
            </div>
            <div class="form-group">
                <h4>Object Oriented Programming: CS3391</h4>
                <input type="radio" value='10' class="option" v-model="oop">O
                <input type="radio" value="9" class="option" v-model="oop">A+
                <input type="radio" value="8" class="option" v-model="oop">A
                <input type="radio" value="7" class="option" v-model="oop">B+
                <input type="radio" value="6" class="option" v-model="oop">B
                <input type="radio" value="5" class="option" v-model="oop">C
                <input type="radio" value="0" class="option" v-model="oop">RA
            </div>
            <div class="form-group">
                <h4>Environment Sciences And Sustainability: GE3451</h4>
                <input type="radio" value='10' class="option" v-model="ess">O
                <input type="radio" value="9" class="option" v-model="ess">A+
                <input type="radio" value="8" class="option" v-model="ess">A
                <input type="radio" value="7" class="option" v-model="ess">B+
                <input type="radio" value="6" class="option" v-model="ess">B
                <input type="radio" value="5" class="option" v-model="ess">C
                <input type="radio" value="0" class="option" v-model="ess">RA
            </div>
            <div class="form-group">
                <h4>Communication Systems Laboratory: EC3461</h4>
                <input type="radio" value='10' class="option" v-model="cslab">O
                <input type="radio" value="9" class="option" v-model="cslab">A+
                <input type="radio" value="8" class="option" v-model="cslab">A
                <input type="radio" value="7" class="option" v-model="cslab">B+
                <input type="radio" value="6" class="option" v-model="cslab">B
                <input type="radio" value="5" class="option" v-model="cslab">C
                <input type="radio" value="0" class="option" v-model="cslab">RA
            </div>
            <div class="form-group">
                <h4>Database Management Systems Laboratory: CS3481</h4>
                <input type="radio" value='10' class="option" v-model="dblab">O
                <input type="radio" value="9" class="option" v-model="dblab">A+
                <input type="radio" value="8" class="option" v-model="dblab">A
                <input type="radio" value="7" class="option" v-model="dblab">B+
                <input type="radio" value="6" class="option" v-model="dblab">B
                <input type="radio" value="5" class="option" v-model="dblab">C
                <input type="radio" value="0" class="option" v-model="dblab">RA
            </div>
            <div class="form-group">
                <h4>Object Oriented Programming Laboratory: CS3381</h4>
                <input type="radio" value='10' class="option" v-model="ooplab">O
                <input type="radio" value="9" class="option" v-model="ooplab">A+
                <input type="radio" value="8" class="option" v-model="ooplab">A
                <input type="radio" value="7" class="option" v-model="ooplab">B+
                <input type="radio" value="6" class="option" v-model="ooplab">B
                <input type="radio" value="5" class="option" v-model="ooplab">C
                <input type="radio" value="0" class="option" v-model="ooplab">RA
            </div>
            <base-card style="font-weight: bold;">Your GPA ------> <span class="text-danger" v-show="info">Some Field Is Missing</span><span class="text-success">{{ gpa
            }}</span></base-card>
            <button @click="calc">Submit</button>
        </base-card>
        <the-footer></the-footer>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            cs: '',
            aiml: '',
            os: '',
            dbms: '',
            oop: '',
            ess: '',
            cslab: '',
            dblab: '',
            ooplab: '',
            info: false,
            gpa: ''
        }
    },
    methods: {
        calc() {
            if (this.cs == '' || this.aiml == '' || this.os == '' || this.dbms == '' || this.oop == '' || this.ess == '' || this.cslab == '' || this.dblab == '' || this.ooplab == '') {
                this.info = true
            }
            else {
                this.info = false
                const res = (3 * this.cs + 4 * this.aiml + 4 * this.os + 3 * this.dbms + 3 * this.oop + 2 * this.ess + 1.5 * this.cslab + 1.5 * this.dblab + 1.5 * this.ooplab) / 23.5
                this.gpa=res
            }
        }
    }
    }
</script>

<style scoped>
.form-group {
    margin-bottom: 18px;
}

.option {
    margin-left: 3%;
}

button {
    background: black;
    color: white;
    width: 21%;
    height: 41px;
    border-radius: 36px;
}
button:hover{
    background: gray;
    border: transparent;
}
</style>