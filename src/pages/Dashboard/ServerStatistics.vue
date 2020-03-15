<template>
  <div class="dashboard-page">
    <h1 class="page-title">
      Dashboard &nbsp;
      <small>
        <small>Server Statistics</small>
      </small>
    </h1>
    <b-row>
      <b-col xl="6" lg="6" sm="18">
        <Widget title="<h6> Application Servers </h6><br>" customHeader>
             <line-chart :chart-data="lineChartData" />
        </Widget>
      </b-col>
      <b-col xl="6" lg="6"  sm="18">
        <Widget title="<h6> UP/DOWN STATUS </h6><br>" customHeader>
          <div class="widget-body">
            
          </div>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col xl="6" lg="6" sm="18">
        <Widget title="<h6> Application Servers </h6><br>" customHeader>
            <apexchart type="bar" height="350" :series="cd.apex.column.series" :options="cd.apex.column.options" />
        </Widget>
      </b-col>
      <b-col xl="6" lg="6"  sm="18">
        <Widget title="<h6> UP/DOWN STATUS </h6><br>" customHeader>
          <div class="widget-body">
            
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>
<script>

import Widget from "@/components/Widget/Widget";
import Map from "./components/Map/Map";
import AnimatedNumber from "animated-number-vue";
import AreaChart from "./components/AreaChart/AreaChart";
import LineChart from './components/LineChart'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default{
    name: "Dashboard",
    components:{
        Widget,
        Map,
        AnimatedNumber,
        AreaChart,
        LineChart
    },
    data() {
       return {
            lineChartData: lineChartData.newVisitis
        };
    },
    mounted(){
        this.fillData()
    }
}
</script>
<style src="./Dashboard.scss" lang="scss" />