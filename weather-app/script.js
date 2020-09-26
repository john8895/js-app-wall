let vm = new Vue({
    el: '#myApp',
    data: {
        currentLocation: "臺中市",
        currTemp: 0,
    },
    mounted: function () {
        this.getWeather()
        // console.log(this.$refs.display.innerText)
    },
    computed: {

    },
    methods: {
        toggleSidebar: function (){
            const sidebar = document.getElementById('toggleSidebar')
            const overlay = document.getElementById('sidebarOverlay')
            if(sidebar.className.indexOf('open') === -1){
                sidebar.classList.add('open')
            }else{
                sidebar.classList.remove('open')
            }
            overlay.onclick = function (e){
                e.stopPropagation()
                if(e.target.className ==='sidebar-overlay'){
                    sidebar.classList.remove('open')
                }else{
                    sidebar.classList.add('open')
                }
            }
        },
        getToday: function (){
            const d = new Date();

        },
        getWeather: function () {
            const api = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-E4B43E55-7ECD-434C-B6BC-FA647F1336F3";
            axios.get(api)
                .then((res) => {
                    // console.log(res.data.records.locations[0].location)
                    this.dataProcess(res.data.records.locations[0].location)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        dataProcess: function (data){
            const weatherData = data
            // console.log(weatherData)
            weatherData.forEach(v=>{
                if(v.locationName === vm.currentLocation){
                    console.log(v)
                }
            })
        }
    }
})