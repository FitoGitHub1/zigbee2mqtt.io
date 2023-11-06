"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85268],{13451:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r={key:"v-36e39a8d",path:"/devices/DIYRuZ_Flower.html",title:"DIYRuZ DIYRuZ_Flower control via MQTT",lang:"en-US",frontmatter:{title:"DIYRuZ DIYRuZ_Flower control via MQTT",description:"Integrate your DIYRuZ DIYRuZ_Flower via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-11-01T12:47:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Soil_moisture (numeric)",slug:"soil-moisture-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Pressure (numeric)",slug:"pressure-numeric",children:[]},{level:3,title:"Temperature (numeric, ds endpoint)",slug:"temperature-numeric-ds-endpoint",children:[]},{level:3,title:"Temperature (numeric, bme endpoint)",slug:"temperature-numeric-bme-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/DIYRuZ_Flower.md",git:{updatedTime:169925657e4}}},70869:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var r=i(66252);const o=(0,r._)("h1",{id:"diyruz-diyruz-flower",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#diyruz-diyruz-flower","aria-hidden":"true"},"#"),(0,r.Uk)(" DIYRuZ DIYRuZ_Flower")],-1),a=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th"),(0,r._)("th")])],-1),u=(0,r._)("tr",null,[(0,r._)("td",null,"Model"),(0,r._)("td",null,"DIYRuZ_Flower")],-1),n=(0,r._)("tr",null,[(0,r._)("td",null,"Vendor"),(0,r._)("td",null,"DIYRuZ")],-1),l=(0,r._)("td",null,"Description",-1),d={href:"http://modkam.ru/?p=1700",target:"_blank",rel:"noopener noreferrer"},c=(0,r.Uk)("Flower sensor"),s=(0,r._)("tr",null,[(0,r._)("td",null,"Exposes"),(0,r._)("td",null,"soil_moisture, battery, illuminance, humidity, pressure, temperature, linkquality")],-1),h=(0,r._)("tr",null,[(0,r._)("td",null,"Picture"),(0,r._)("td",null,[(0,r._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DIYRuZ_Flower.jpg",alt:"DIYRuZ DIYRuZ_Flower"})])],-1),m=(0,r._)("h2",{id:"options",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,r.Uk)(" Options")],-1),p=(0,r.Uk)("How to use device type specific configuration"),f=(0,r.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>soil_moisture_precision</code>: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>soil_moisture_calibration</code>: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="soil-moisture-numeric" tabindex="-1"><a class="header-anchor" href="#soil-moisture-numeric" aria-hidden="true">#</a> Soil_moisture (numeric)</h3><p>Measured soil moisture value. Value can be found in the published state on the <code>soil_moisture</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pressure-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-numeric" aria-hidden="true">#</a> Pressure (numeric)</h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>hPa</code>.</p><h3 id="temperature-numeric-ds-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-ds-endpoint" aria-hidden="true">#</a> Temperature (numeric, ds endpoint)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature_ds</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="temperature-numeric-bme-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-bme-endpoint" aria-hidden="true">#</a> Temperature (numeric, bme endpoint)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature_bme</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),b={},v=(0,i(83744).Z)(b,[["render",function(e,t){const i=(0,r.up)("OutboundLink"),b=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r._)("table",null,[a,(0,r._)("tbody",null,[u,n,(0,r._)("tr",null,[l,(0,r._)("td",null,[(0,r._)("a",d,[c,(0,r.Wm)(i)])])]),s,h])]),m,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(b,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.w5)((()=>[p])),_:1})])]),f],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,r]of t)e[i]=r;return e}}}]);