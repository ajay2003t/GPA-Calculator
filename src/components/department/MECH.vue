<template>
    <div>
        <h1 class="text-center">Mechanical Engineering</h1>
        <base-card>
            <div class="form-group">
                <h4>Theory Of Machines: ME3491</h4>
                <input type="radio" value='10' class="option" v-model="tm">O
                <input type="radio" value="9" class="option" v-model="tm">A+
                <input type="radio" value="8" class="option" v-model="tm">A
                <input type="radio" value="7" class="option" v-model="tm">B+
                <input type="radio" value="6" class="option" v-model="tm">B
                <input type="radio" value="5" class="option" v-model="tm">C
                <input type="radio" value="0" class="option" v-model="tm">RA
            </div>
            <div class="form-group">
                <h4>Thermal Engineering: ME3451</h4>
                <input type="radio" value='10' class="option" v-model="te">O
                <input type="radio" value="9" class="option" v-model="te">A+
                <input type="radio" value="8" class="option" v-model="te">A
                <input type="radio" value="7" class="option" v-model="te">B+
                <input type="radio" value="6" class="option" v-model="te">B
                <input type="radio" value="5" class="option" v-model="te">C
                <input type="radio" value="0" class="option" v-model="te">RA
            </div>
            <div class="form-group">
                <h4>Hydraulics And Pneumatics: ME3492</h4>
                <input type="radio" value='10' class="option" v-model="hp">O
                <input type="radio" value="9" class="option" v-model="hp">A+
                <input type="radio" value="8" class="option" v-model="hp">A
                <input type="radio" value="7" class="option" v-model="hp">B+
                <input type="radio" value="6" class="option" v-model="hp">B
                <input type="radio" value="5" class="option" v-model="hp">C
                <input type="radio" value="0" class="option" v-model="hp">RA
            </div>
            <div class="form-group">
                <h4>Manufacturing Technology: ME3493</h4>
                <input type="radio" value='10' class="option" v-model="mt">O
                <input type="radio" value="9" class="option" v-model="mt">A+
                <input type="radio" value="8" class="option" v-model="mt">A
                <input type="radio" value="7" class="option" v-model="mt">B+
                <input type="radio" value="6" class="option" v-model="mt">B
                <input type="radio" value="5" class="option" v-model="mt">C
                <input type="radio" value="0" class="option" v-model="mt">RA
            </div>
            <div class="form-group">
                <h4>Strength Of Materials: CE3491</h4>
                <input type="radio" value='10' class="option" v-model="sm">O
                <input type="radio" value="9" class="option" v-model="sm">A+
                <input type="radio" value="8" class="option" v-model="sm">A
                <input type="radio" value="7" class="option" v-model="sm">B+
                <input type="radio" value="6" class="option" v-model="sm">B
                <input type="radio" value="5" class="option" v-model="sm">C
                <input type="radio" value="0" class="option" v-model="sm">RA
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
                <h4>Strength Of Materials And Fluid Machinery Laboratory: CE3481</h4>
                <input type="radio" value='10' class="option" v-model="smlab">O
                <input type="radio" value="9" class="option" v-model="smlab">A+
                <input type="radio" value="8" class="option" v-model="smlab">A
                <input type="radio" value="7" class="option" v-model="smlab">B+
                <input type="radio" value="6" class="option" v-model="smlab">B
                <input type="radio" value="5" class="option" v-model="smlab">C
                <input type="radio" value="0" class="option" v-model="smlab">RA
            </div>
            <div class="form-group">
                <h4>Thermal Engineering Laboratory: ME3461</h4>
                <input type="radio" value='10' class="option" v-model="telab">O
                <input type="radio" value="9" class="option" v-model="telab">A+
                <input type="radio" value="8" class="option" v-model="telab">A
                <input type="radio" value="7" class="option" v-model="telab">B+
                <input type="radio" value="6" class="option" v-model="telab">B
                <input type="radio" value="5" class="option" v-model="telab">C
                <input type="radio" value="0" class="option" v-model="telab">RA
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
            tm: '',
            te: '',
            hp: '',
            mt: '',
            sm: '',
            ess: '',
            smlab: '',
            telab: '',
            info: false,
            gpa: ''
        }
    },
    methods: {
        calc() {
            if (this.tm == '' || this.te == '' || this.hp == '' || this.mt == '' || this.sm == '' || this.ess == '' || this.smlab == '' || this.telab == '') {
                this.info = true
            }
            else {
                this.info = false
                const res = (3 * this.tm + 4 * this.te + 3 * this.hp + 3 * this.mt + 3 * this.sm + 2 * this.ess + 2 * this.smlab + 2 * this.telab) / 22
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