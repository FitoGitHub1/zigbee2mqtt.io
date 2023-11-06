"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27551],{87084:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-39313515",path:"/devices/106-03.html",title:"Plugwise 106-03 control via MQTT",lang:"en-US",frontmatter:{title:"Plugwise 106-03 control via MQTT",description:"Integrate your Plugwise 106-03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-06-10T16:45:59.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Valve_position (numeric)",slug:"valve-position-numeric",children:[]},{level:3,title:"Force (enum)",slug:"force-enum",children:[]},{level:3,title:"Radio_strength (enum)",slug:"radio-strength-enum",children:[]},{level:3,title:"Calibrate_valve (binary)",slug:"calibrate-valve-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/106-03.md",git:{updatedTime:169925657e4}}},6653:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var i=o(66252);const a=(0,i.uE)('<h1 id="plugwise-106-03" tabindex="-1"><a class="header-anchor" href="#plugwise-106-03" aria-hidden="true">#</a> Plugwise 106-03</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>106-03</td></tr><tr><td>Vendor</td><td>Plugwise</td></tr><tr><td>Description</td><td>Tom thermostatic radiator valve</td></tr><tr><td>Exposes</td><td>battery, climate (occupied_heating_setpoint, local_temperature, system_mode, pi_heating_demand), valve_position, force, radio_strength, calibrate_valve, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/106-03.jpg" alt="Plugwise 106-03"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the button inside the thermostat once. The LED will blink 5 times green to confirm pairing. When the LED blinks 5 times red, pairing failed.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),d=(0,i.Uk)("How to use device type specific configuration"),c=(0,i.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="valve-position-numeric" tabindex="-1"><a class="header-anchor" href="#valve-position-numeric" aria-hidden="true">#</a> Valve_position (numeric)</h3><p>Directly control the radiator valve. The values range from 0 (valve closed) to 100 (valve fully open). Value can be found in the published state on the <code>valve_position</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_position&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="force-enum" tabindex="-1"><a class="header-anchor" href="#force-enum" aria-hidden="true">#</a> Force (enum)</h3><p>How hard the motor pushes the valve. The closer to the boiler, the higher the force needed. Value can be found in the published state on the <code>force</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;force&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;force&quot;: NEW_VALUE}</code>. The possible values are: <code>standard</code>, <code>high</code>, <code>very_high</code>.</p><h3 id="radio-strength-enum" tabindex="-1"><a class="header-anchor" href="#radio-strength-enum" aria-hidden="true">#</a> Radio_strength (enum)</h3><p>Transmits with higher power when range is not sufficient. Value can be found in the published state on the <code>radio_strength</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;radio_strength&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radio_strength&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>high</code>.</p><h3 id="calibrate-valve-binary" tabindex="-1"><a class="header-anchor" href="#calibrate-valve-binary" aria-hidden="true">#</a> Calibrate_valve (binary)</h3><p>Calibrates valve on next wakeup. Value can be found in the published state on the <code>calibrate_valve</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibrate_valve&quot;: NEW_VALUE}</code>. If value equals <code>calibrate</code> calibrate_valve is ON, if <code>idle</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),r={},l=(0,o(83744).Z)(r,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[d])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);