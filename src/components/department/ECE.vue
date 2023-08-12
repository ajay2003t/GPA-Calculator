<template>
    <div>
        <h1 class="text-center">Electronics And Communication Engineering</h1>
        <base-card>
            <div class="form-group">
                <h4>Electromagnetic Fields: EC3452</h4>
                <input type="radio" value='10' class="option" v-model="ef">O
                <input type="radio" value="9" class="option" v-model="ef">A+
                <input type="radio" value="8" class="option" v-model="ef">A
                <input type="radio" value="7" class="option" v-model="ef">B+
                <input type="radio" value="6" class="option" v-model="ef">B
                <input type="radio" value="5" class="option" v-model="ef">C
                <input type="radio" value="0" class="option" v-model="ef">RA
            </div>
            <div class="form-group">
                <h4>Networks And Security: EC3401</h4>
                <input type="radio" value='10' class="option" v-model="ns">O
                <input type="radio" value="9" class="option" v-model="ns">A+
                <input type="radio" value="8" class="option" v-model="ns">A
                <input type="radio" value="7" class="option" v-model="ns">B+
                <input type="radio" value="6" class="option" v-model="ns">B
                <input type="radio" value="5" class="option" v-model="ns">C
                <input type="radio" value="0" class="option" v-model="ns">RA
            </div>
            <div class="form-group">
                <h4>Linear Intergrated Circuits: EC3451</h4>
                <input type="radio" value='10' class="option" v-model="lic">O
                <input type="radio" value="9" class="option" v-model="lic">A+
                <input type="radio" value="8" class="option" v-model="lic">A
                <input type="radio" value="7" class="option" v-model="lic">B+
                <input type="radio" value="6" class="option" v-model="lic">B
                <input type="radio" value="5" class="option" v-model="lic">C
                <input type="radio" value="0" class="option" v-model="lic">RA
            </div>
            <div class="form-group">
                <h4>Digital Signal Processing: EC3492</h4>
                <input type="radio" value='10' class="option" v-model="dsp">O
                <input type="radio" value="9" class="option" v-model="dsp">A+
                <input type="radio" value="8" class="option" v-model="dsp">A
                <input type="radio" value="7" class="option" v-model="dsp">B+
                <input type="radio" value="6" class="option" v-model="dsp">B
                <input type="radio" value="5" class="option" v-model="dsp">C
                <input type="radio" value="0" class="option" v-model="dsp">RA
            </div>
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
                <h4>Linear Integrated Circuits Laboratory: EC3462</h4>
                <input type="radio" value='10' class="option" v-model="liclab">O
                <input type="radio" value="9" class="option" v-model="liclab">A+
                <input type="radio" value="8" class="option" v-model="liclab">A
                <input type="radio" value="7" class="option" v-model="liclab">B+
                <input type="radio" value="6" class="option" v-model="liclab">B
                <input type="radio" value="5" class="option" v-model="liclab">C
                <input type="radio" value="0" class="option" v-model="liclab">RA
            </div>
            <base-card style="font-weight: bold;">Your GPA ------> <span class="text-danger" v-show="info">Some Field Is
                    Missing</span><span class="text-success">{{ gpa
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
            ef: '',
            ns: '',
            lic: '',
            dsp: '',
            cs: '',
            ess: '',
            cslab: '',
            liclab: '',
            info: false,
            gpa: ''
        }
    },
    methods: {
        calc() {
            if (this.ef == '' || this.ns == '' || this.lic == '' || this.dsp == '' || this.cs == '' || this.ess == '' || this.cslab == '' || this.liclab == '') {
                this.info = true
            }
            else {
                this.info = false
                const res = (3 * this.ef + 4 * this.ns + 3 * this.lic + 4 * this.dsp + 3 * this.cs + 2 * this.ess + 1.5 * this.cslab + 1.5 * this.liclab) / 22
                this.gpa = res
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

button:hover {
    background: gray;
    border: transparent;
}
</style>