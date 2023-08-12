<template>
    <div>
        <h1 class="text-center">Computer Science And Engineering</h1>
        <base-card>
            <div class="form-group">
                <h4>Theory Of Computation: CS3452</h4>
                <input type="radio" value='10' class="option" v-model="toc">O
                <input type="radio" value="9" class="option" v-model="toc">A+
                <input type="radio" value="8" class="option" v-model="toc">A
                <input type="radio" value="7" class="option" v-model="toc">B+
                <input type="radio" value="6" class="option" v-model="toc">B
                <input type="radio" value="5" class="option" v-model="toc">C
                <input type="radio" value="0" class="option" v-model="toc">RA
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
                <h4>Database Management Systems: CS3492</h4>
                <input type="radio" value='10' class="option" v-model="db">O
                <input type="radio" value="9" class="option" v-model="db">A+
                <input type="radio" value="8" class="option" v-model="db">A
                <input type="radio" value="7" class="option" v-model="db">B+
                <input type="radio" value="6" class="option" v-model="db">B
                <input type="radio" value="5" class="option" v-model="db">C
                <input type="radio" value="0" class="option" v-model="db">RA
            </div>
            <div class="form-group">
                <h4>Algorithms: CS3401</h4>
                <input type="radio" value='10' class="option" v-model="a">O
                <input type="radio" value="9" class="option" v-model="a">A+
                <input type="radio" value="8" class="option" v-model="a">A
                <input type="radio" value="7" class="option" v-model="a">B+
                <input type="radio" value="6" class="option" v-model="a">B
                <input type="radio" value="5" class="option" v-model="a">C
                <input type="radio" value="0" class="option" v-model="a">RA
            </div>
            <div class="form-group">
                <h4>Introduction To Operating Systems: CS3451</h4>
                <input type="radio" value='10' class="option" v-model="ios">O
                <input type="radio" value="9" class="option" v-model="ios">A+
                <input type="radio" value="8" class="option" v-model="ios">A
                <input type="radio" value="7" class="option" v-model="ios">B+
                <input type="radio" value="6" class="option" v-model="ios">B
                <input type="radio" value="5" class="option" v-model="ios">C
                <input type="radio" value="0" class="option" v-model="ios">RA
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
                <h4>Operating Systems Laboratory: CS3461</h4>
                <input type="radio" value='10' class="option" v-model="oslab">O
                <input type="radio" value="9" class="option" v-model="oslab">A+
                <input type="radio" value="8" class="option" v-model="oslab">A
                <input type="radio" value="7" class="option" v-model="oslab">B+
                <input type="radio" value="6" class="option" v-model="oslab">B
                <input type="radio" value="5" class="option" v-model="oslab">C
                <input type="radio" value="0" class="option" v-model="oslab">RA
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
            toc: '',
            aiml: '',
            db: '',
            a: '',
            ios: '',
            ess: '',
            oslab: '',
            dblab: '',
            info: false,
            gpa: ''
        }
    },
    methods: {
        calc() {
            if (this.toc == '' || this.aiml == '' || this.db == '' || this.a == '' || this.ios == '' || this.ess == '' || this.oslab == '' || this.dblab == '') {
                this.info = true
            }
            else {
                this.info = false
                const res = (4 * this.toc + 3 * this.aiml + 3 * this.db + 3 * this.a + 3 * this.ios + 3 * this.ess + 1.5 * this.oslab + 1.5 * this.dblab) / 22
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