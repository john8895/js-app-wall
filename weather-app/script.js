let vm = new Vue({
    el: '#myApp',
    data: {
        currentLocation: "臺中市",
        currTemp: 0,
    },
    mounted: function () {
        this.getWeather();
        this.getNowTime();
        // console.log(this.$refs.display.innerText)
    },
    computed: {},
    methods: {
        toggleSidebar: function () {
            const sidebar = document.getElementById('toggleSidebar')
            const overlay = document.getElementById('sidebarOverlay')
            if (sidebar.className.indexOf('open') === -1) {
                sidebar.classList.add('open')
            } else {
                sidebar.classList.remove('open')
            }
            overlay.onclick = function (e) {
                e.stopPropagation()
                if (e.target.className === 'sidebar-overlay') {
                    sidebar.classList.remove('open')
                } else {
                    sidebar.classList.add('open')
                }
            }
        },
        getNowTime: function () {
            const timeDate = new Date();
            console.log('timeDate:', timeDate);
            const tMonth = (timeDate.getMonth() + 1) > 9 ? (timeDate.getMonth() + 1) : '0' + (timeDate.getMonth() + 1);
            const tDate = timeDate.getDate() > 9 ? timeDate.getDate() : '0' + timeDate.getDate();
            const tHours = timeDate.getHours() > 9 ? timeDate.getHours() : '0' + timeDate.getHours();
            const tMinutes = timeDate.getMinutes() > 9 ? timeDate.getMinutes() : '0' + timeDate.getMinutes();
            console.log('目前時間:', tHours, ':', tMinutes)
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
        dataProcess: function (data) {
            const weatherData = data
            // console.log(weatherData)
            this.getWeatherIcon();
            weatherData.forEach(v => {
                if (v.locationName === vm.currentLocation) {
                    // 顯示指定位置的資料
                    console.log(v)
                    const currentTemper = v.weatherElement[1].time[0].elementValue[0].value;
                    console.log('目前平均氣溫:', currentTemper)
                    const weatherDetail = v.weatherElement[10].time[0].elementValue[0].value;
                    console.log('天氣狀態:', weatherDetail.split('。')[0])
                    // TODO: 天氣狀態圖示怎麼顯示
                    // 天氣圖示對照表：https://www.cwb.gov.tw/V8/C/K/Weather_Icon.html
                    // https://www.cwb.gov.tw/Data/js/WeatherIcon.js?_=1601091580326
                }
            })
        },
        getWeatherIcon: function (){
            const cors = "https://cors-anywhere.herokuapp.com/";
            const iconApi = "https://www.cwb.gov.tw/Data/js/WeatherIcon.js";
            const IconPath = 'https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon';
            /*
            * var Wx    = WeatherIcons[i].Wx;
				var Wname = WeatherIcons[i][VER];

				var MyTR = ''+
				'<tr>'+
					'<td>'+Wname+'</td>'+
					'<td><span class="icon"><img src="'+IconPath+'/day/'+Wx+'.svg" alt="'+Wname+'" title="'+Wname+'" class="img-responsive"></span></td>'+
					'<td><span class="icon"><img src="'+IconPath+'/night/'+Wx+'.svg" alt="'+Wname+'" title="'+Wname+'" class="img-responsive"></span></td>'+
				'</tr>';
            * */

            axios.get(cors+iconApi)
                .then(res=>{
                    console.log(res.data)
                })
                .catch(err=>{
                    console.error(err)
                })

        }


    }
})