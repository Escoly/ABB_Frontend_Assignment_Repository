

const bbApi = {

    keys: [],

    retrieveFeatureStatus() {

        const status = () => Math.floor(Math.random() * 3);

        const featureStatus = status();
        
        return featureStatus;
    },


    retrieveControlData() {
        const controlStatus = () => Math.floor(Math.random() * 3);
        const randomNum = () => Math.floor(Math.random() * 99);

        const controlData = {
            controlStatusData: controlStatus(),
            controlDevData: randomNum(),
            controlDevOutToolData: randomNum(),
        }

        return controlData;
    },

    generateRandomKey(){
        let key = Math.floor(Math.random() * 999)

        if(!this.keys.includes(key)) {
            this.keys.push(key);
            return key;
        } else {
            setTimeout(()=> {
                this.generateRandomKey();
            },100)
        }
    }
}

export default bbApi;