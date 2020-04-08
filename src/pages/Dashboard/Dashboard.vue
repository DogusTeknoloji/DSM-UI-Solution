<template>
  <div class="dashboard-page">
    <h1 class="page-title">
      Dashboard &nbsp;
      <small>
        <small>DSM - Monitor</small>
      </small>
    </h1>
    <b-row>
      <b-col xl="4" lg="4" sm="12">
        <Widget title="<h6> AGENT STATUS </h6><br>" customHeader>
          <div class="widget-body">
            <div class="stats-row">
              <div class="stat-item">
                <h5>Active Agents</h5>
                <h3>
                  <span class="text-grey">
                    <i class="fa fa-group" />
                  </span>
                  &nbsp;
                  <b>0</b>
                </h3>
              </div>
              <div class="stat-item">
                <h5>Total Agents</h5>
                <h3>
                    <span class="text-grey">
                    <i class="fa fa-group" />
                  </span>
                  &nbsp;
                  <b>0</b>
                </h3>
              </div>
            </div>
          </div>

          <small>
            <span class="circle bg-warning text-white">
              <i class="fa fa-chevron-up" />
            </span>
          </small>
          <!-- <span class="fw-semi-bold">&nbsp;17% higher</span>
          &nbsp;than last month -->
        </Widget>
      </b-col>
      <b-col xl="4" lg="4"  sm="12">
        <Widget title="<h6> UP/DOWN STATUS </h6><br>" customHeader>
          <div class="widget-body">
            <div class="stats-row">
              <div class="stat-item">
                <h5>Up Sites</h5>
                <h3>
                  <span class="text-success">
                    <i class="fa fa-chevron-up" />
                  </span> &nbsp;
                  <b>0</b>
                </h3>
              </div>
              <div class="stat-item">
                <h5>Down Sites</h5>
                <h3>
                  <span class="text-danger">
                    <i class="fa fa-chevron-down" />
                  </span> &nbsp;
                  <b>0</b>
                </h3>
              </div>
            </div>
          </div>

          <small>
            <span class="text-primary fw-semi-bold">
              <i class="glyphicon glyphicon-link" />
              &nbsp;Click here
            </span>
          </small>
          <span class="fw-semi-bold"></span>
          &nbsp;to show the down site list.
        </Widget>
      </b-col>
      <b-col xl="4" lg="4"  sm="12">
        <Widget title="<h6> ALERT COUNT </h6><br>" customHeader>
          <div class="widget-body">
            <div class="stats-row">
              <div class="stat-item">
                <h5>Warning Count</h5>
                <h3>
                  <span class="text-warning">
                    <i class="glyphicon glyphicon-exclamation-sign" />
                  </span> &nbsp;
                  <b>0</b>
                </h3>
              </div>
              <div class="stat-item">
                <h5>Error Count</h5>
                <h3>
                  <span class="text-danger">
                   
                    <i class=" glyphicon glyphicon-glyph-fire" />
                  </span> &nbsp;
                  <b>0</b>
                </h3>
              </div>
            </div>
          </div>

          <small>
            <span class="text-primary fw-semi-bold">
              <i class="glyphicon glyphicon-link" />
              &nbsp;Click here
            </span>
          </small>
          <span class="fw-semi-bold"></span>
          &nbsp;to show the alert list.
        </Widget>
      </b-col>
 
    </b-row>

    <b-row>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6><span class='fw-semi-bold'>Unavailable </span>Agent List</h6>"
          refresh
          close
          customHeader
        >
          <div class="widget-body p-0">
            <div class="list-group list-group-lg">
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr rounded-circle" style="border:1px solid #aaa">
                  <i class="glyphicon glyphicon-user" />
                </span>
                <div>
                  <h6 class="m-0 fw-semi-bold">-</h6>
                  <h5
                    class="help-block text-ellipsis m-0 "
                  >_</h5>
                </div>
              </a>
               <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr rounded-circle" style="border:1px solid #aaa">
                  <i class="glyphicon glyphicon-user" />
                </span>
                <div>
                  <h6 class="m-0 fw-semi-bold">-</h6>
                  <h5
                    class="help-block text-ellipsis m-0 "
                  >-</h5>
                </div>
              </a> <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr rounded-circle" style="border:1px solid #aaa">
                  <i class="glyphicon glyphicon-user" />
                </span>
                <div>
                  <h6 class="m-0 fw-semi-bold">-</h6>
                  <h5
                    class="help-block text-ellipsis m-0 "
                  >-</h5>
                </div>
              </a>
               <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr rounded-circle" style="border:1px solid #aaa">
                  <i class="glyphicon glyphicon-user" />
                </span>
                <div>
                  <h6 class="m-0 fw-semi-bold">-</h6>
                  <h5
                    class="help-block text-ellipsis m-0 "
                  >-</h5>
                </div>
              </a>
            </div>
          </div>
         
        </Widget>
      </b-col>
   
      <b-col lg="8" xs="12">
        <Widget
          title="<h6>Request</h6>"
          refresh
          close
          customHeader
        >
        <line-chart :chart-data="lineChartData" />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import Widget from "@/components/Widget/Widget";
import LineChart from './components/LineChart'

import {mapGetters, mapActions} from "vuex";
import DashboardModule from '@/store/dashboard';

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
const todos = [
  {
    description: "Take Sebastian to basketball practice.",
    isComplete: false,
    dates: { weekdays: 6, weeklyInterval: 2 }, // Every other Friday
    color: "#ff8080" // Red
  },
  {
    description: "German courses",
    isComplete: false,
    dates: new Date(),
    color: "#64a4ff" // Red
  },
  {
    description: "Constitution Day",
    isComplete: false,
    dates: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // in 6 days
    color: "#6ae696" // Red
  }
];

export default {
  name: "Dashboard",
  components: {
    Widget,
    LineChart
  },
  data() {
    return {
      checkedArr: [false, false, false],
      dataCollection: null,
      todos,
      lineChartData: lineChartData.newVisitis
    };
  },
  computed:{
    ...mapGetters('Dashboard',['GET_MSG']),
  },
  created(){
    this.$store.registerModule("Dashboard",DashboardModule);
  },
  mounted() {
    this.fillData();
    this.getMsg();
  },
  beforeDestroy(){
    this.$store.unregisterModule("Dashboard");
  },
  methods: {
    ...mapActions("Dashboard",["action_getMsg"]),
    checkTable(id) {
      let arr = [];
      if (id === 0) {
        const val = !this.checkedArr[0];
        for (let i = 0; i < this.checkedArr.length; i += 1) {
          arr[i] = val;
        }
      } else {
        arr = this.checkedArr;
        arr[id] = !arr[id];
      }
      if (arr[0]) {
        let count = 1;
        for (let i = 1; i < arr.length; i += 1) {
          if (arr[i]) {
            count += 1;
          }
        }
        if (count !== arr.length) {
          arr[0] = !arr[0];
        }
      }
      Vue.set(this, "checkedArr", arr);
    },
    fillData() {
      this.dataCollection = {
        labels: [
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt()
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            borderColor: "transparent",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          },
          {
            label: "Data Two",
            backgroundColor: "#7c87f8",
            borderColor: "transparent",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    getMsg(){
      this.action_getMsg().then(()=>{ console.log('Ok');});
    }
  },
};
</script>

<style src="./Dashboard.scss" lang="scss" />
