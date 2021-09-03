<template>
    <div class="row">
        <div class="col-md-12">
            <h4 class="fw-semi-bold">Monthly KPI Status</h4>
            <div class="page-letters"></div>
        </div>
        <br />
        <div class="col-md-12 text-right full-row mt-5">
            <small> </small>
        </div>
        <div class="col-md-12 text-right full-row">
            <b-button class="badge badge-resize excel-color" disabled @click="downloadExport()">
                <i class="glyphicon glyphicon-console" />
                Export to Excel
            </b-button>
        </div>
        <div class="col-md-12 table-card">
            <table class="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Application</th>
                        <th scope="col">Year</th>
                        <th scope="col">January</th>
                        <th scope="col">February </th>
                        <th scope="col">March  </th>
                        <th scope="col">April </th>
                        <th scope="col">May</th>
                        <th scope="col">June</th>
                        <th scope="col">July</th>
                        <th scope="col">August</th>
                        <th scope="col">September</th>
                        <th scope="col">October</th>
                        <th scope="col">November</th>
                        <th scope="col">December</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(s, i) in this.list" :key="i">
                        <th scope="row">{{i+1}}</th>
                        <td>{{s.application}}</td>
                        <td>{{s.year}}</td>
                        <td>{{s.ocak}}</td>
                        <td>{{s.subat}}</td>
                        <td>{{s.mart}}</td>
                        <td>{{s.nisan}}</td>
                        <td>{{s.mayis}}</td>
                        <td>{{s.haziran}}</td>
                        <td>{{s.temmuz}}</td>
                        <td>{{s.agustos}}</td>
                        <td>{{s.eylul}}</td>
                        <td>{{s.ekim}}</td>
                        <td>{{s.kasim}}</td>
                        <td>{{s.aralik}}</td>
                    </tr>
                    <tr>  <td v-if="this.list.length <1 || this.list==null" colspan="15" align="center"> <span>Record is empty!</span> </td> </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-12 text-center" v-if="this.isLoading">
            <img src="@/assets/svg/loading.svg" />
        </div>
    </div>
</template>
<script>
    import { getKpiStatusList } from '@/api/reports/kpistatus';
    export default {
        data() {
            return {
                isLoading: true,
                list: [],
            }
        },
        created() {
            this.getKpiList()
        },
        methods: {
           
            getKpiList() {
                this.isLoading = true
                debugger
                getKpiStatusList(1).then(response => {
                    this.list = response
                    debugger
                    this.isLoading = false
                })
            },
        }
    }
</script>


<style lang="scss" scoped>
    .page-letters {
        display: flex;
    }

    tbody {
        th {
            background-color: transparent !important;
           }
        tr {
            cursor: pointer;
        }
    }

    thead {
        th{
            position:sticky;
            top:0;
            z-index:1;
        }
    }
    .full-row {
        margin-left: 20px;
    }

    .excel-color {
        background-color: #21a366;
        color: #ffffff;
    }

/*    .excel-color:hover {
        background-color: #217346;
        color: #ffffff;
    }*/

    .badge-resize {
        height: 26px;
    }

    .link {
        color: #213773;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        font-size: 9pt;
    }

    .link-hidden {
        visibility: hidden;
    }

    .context-table {
        position: relative,
    }

    .context-absolute {
        position: absolute;
        height: 100%;
    }
</style>
