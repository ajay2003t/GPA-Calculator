<template>
    <div>
        <h1 class="text-center">Artificial Intelligence And Data Science</h1>
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
                <h4>Fundamentals Of Data Science And Analytics: AD3491</h4>
                <input type="radio" value='10' class="option" v-model="fdsa">O
                <input type="radio" value="9" class="option" v-model="fdsa">A+
                <input type="radio" value="8" class="option" v-model="fdsa">A
                <input type="radio" value="7" class="option" v-model="fdsa">B+
                <input type="radio" value="6" class="option" v-model="fdsa">B
                <input type="radio" value="5" class="option" v-model="fdsa">C
                <input type="radio" value="0" class="option" v-model="fdsa">RA
            </div>
            <div class="form-group">
                <h4>Computer Networks: CS3591</h4>
                <input type="radio" value='10' class="option" v-model="cn">O
                <input type="radio" value="9" class="option" v-model="cn">A+
                <input type="radio" value="8" class="option" v-model="cn">A
                <input type="radio" value="7" class="option" v-model="cn">B+
                <input type="radio" value="6" class="option" v-model="cn">B
                <input type="radio" value="5" class="option" v-model="cn">C
                <input type="radio" value="0" class="option" v-model="cn">RA
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
                <h4>Data Sciences And Analytics Laboratory: AD3411</h4>
                <input type="radio" value='10' class="option" v-model="dsalab">O
                <input type="radio" value="9" class="option" v-model="dsalab">A+
                <input type="radio" value="8" class="option" v-model="dsalab">A
                <input type="radio" value="7" class="option" v-model="dsalab">B+
                <input type="radio" value="6" class="option" v-model="dsalab">B
                <input type="radio" value="5" class="option" v-model="dsalab">C
                <input type="radio" value="0" class="option" v-model="dsalab">RA
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
            ps: '',
            os: '',
            ml: '',
            fdsa: '',
            cn: '',
            ess: '',
            dsalab: '',
            mllab: '',
            info: false,
            gpa: ''
        }
    },
    methods: {
        calc() {
            if (this.ps == '' || this.os == '' || this.ml == '' || this.fdsa == '' || this.cn == '' || this.ess == '' || this.dsalab == '' || this.mllab == '') {
                this.info = true
            }
            else {
                this.info = false
                const res = (4 * this.ps + 4 * this.os + 3 * this.ml + 3 * this.fdsa + 4 * this.cn + 2 * this.ess + 2 * this.dsalab + 2 * this.mllab) / 24
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