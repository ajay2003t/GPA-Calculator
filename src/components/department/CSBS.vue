<template>
    <div>
        <h1 class="text-center">Computer Science And Business System</h1>
        <base-card>
            <div class="form-group">
                <h4> Probability And Statistics: MA3391</h4>
                <input type="radio" value='10' class="option" v-model="ps">O
                <input type="radio" value="9" class="option" v-model="ps">A+
                <input type="radio" value="8" class="option" v-model="ps">A
                <input type="radio" value="7" class="option" v-model="ps">B+
                <input type="radio" value="6" class="option" v-model="ps">B
                <input type="radio" value="5" class="option" v-model="ps">C
                <input type="radio" value="0" class="option" v-model="ps">RA
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
                <h4>Introduction To Business Systems: CW3401</h4>
                <input type="radio" value='10' class="option" v-model="ibs">O
                <input type="radio" value="9" class="option" v-model="ibs">A+
                <input type="radio" value="8" class="option" v-model="ibs">A
                <input type="radio" value="7" class="option" v-model="ibs">B+
                <input type="radio" value="6" class="option" v-model="ibs">B
                <input type="radio" value="5" class="option" v-model="ibs">C
                <input type="radio" value="0" class="option" v-model="ibs">RA
            </div>
            <div class="form-group">
                <h4>Machine Learning: AL3451</h4>
                <input type="radio" value='10' class="option" v-model="ml">O
                <input type="radio" value="9" class="option" v-model="ml">A+
                <input type="radio" value="8" class="option" v-model="ml">A
                <input type="radio" value="7" class="option" v-model="ml">B+
                <input type="radio" value="6" class="option" v-model="ml">B
                <input type="radio" value="5" class="option" v-model="ml">C
                <input type="radio" value="0" class="option" v-model="ml">RA
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
                <h4>Machine Learning Laboratory: AL3461</h4>
                <input type="radio" value='10' class="option" v-model="mllab">O
                <input type="radio" value="9" class="option" v-model="mllab">A+
                <input type="radio" value="8" class="option" v-model="mllab">A
                <input type="radio" value="7" class="option" v-model="mllab">B+
                <input type="radio" value="6" class="option" v-model="mllab">B
                <input type="radio" value="5" class="option" v-model="mllab">C
                <input type="radio" value="0" class="option" v-model="mllab">RA
            </div>
            <div class="form-group">
                <h4>Business Communication Laboratory: CW3411</h4>
                <input type="radio" value='10' class="option" v-model="bc">O
                <input type="radio" value="9" class="option" v-model="bc">A+
                <input type="radio" value="8" class="option" v-model="bc">A
                <input type="radio" value="7" class="option" v-model="bc">B+
                <input type="radio" value="6" class="option" v-model="bc">B
                <input type="radio" value="5" class="option" v-model="bc">C
                <input type="radio" value="0" class="option" v-model="bc">RA
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
            ps: '',
            dbms: '',
            os: '',
            ibs: '',
            ml: '',
            ess: '',
            dblab: '',
            bc: '',
            mllab: '',
            info: false,
            gpa: ''
        }
    },
    methods: {
        calc() {
            if (this.ps == '' || this.dbms == '' || this.os == '' || this.ibs == '' || this.ml == '' || this.ess == '' || this.dblab == '' || this.bc == '' || this.mllab == '') {
                this.info = true
            }
            else {
                this.info = false
                const res = (4 * this.ps + 3 * this.dbms + 4 * this.os + 3 * this.ibs + 3 * this.ml + 2 * this.ess + 1.5 * this.dblab + 2 * this.bc + 1.5 * this.mllab) / 24
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