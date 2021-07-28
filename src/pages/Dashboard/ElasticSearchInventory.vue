<template>
    <div class="row">
         <div class="col-md-12">
            <h4 class="fw-semi-bold">Elastic Search Inventory</h4>
        </div>
        <br/>
        <div class="col-md-12 table-card text-center" v-if="forbidden_page">
            <h5>This operation requires elevated permissions.</h5>
        </div>
        <div class="col-md-12 table-card" v-if="!forbidden_page">
            <table class="table table-hover table-stripped">
                <thead>
                    <tr>
                        <th scope="col">Url</th>
                        <th scope="col">Username</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Scope</th>
                        <th scope="col">LoadbalancerIp</th>
                        <th scope="col">Hostname</th>
                        <th scope="col">Ip Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(esi, i) in GET_LIST" :key="i">
                        <td @click="gotoUrlWOLogin(esi.url)" class="link">{{esi.url}}</td>
                        <td>{{esi.username}}</td>
                        <td @click="gotoCompany(esi.companyId)" class="link">{{esi.companyName}}</td>
                        <td>{{esi.description}}</td>
                        <td v-if="esi.loadbalancerIp !== null">{{esi.loadbalancerIp}}</td>
                        <td v-else>No Ip Provided</td>
                        <td @click="gotoServer(esi.serverId)" class="link">{{esi.hostname}}</td>
                        <td>{{esi.ipAddress}}</td>
                        <td>
                            <button @click="gotoLink(esi)" class="btn ml-md-auto bg-success login-btn">
                                <span class="fw-semi-bold">Login to Kibana</span>
                            </button>
                        </td>
                    </tr>
                    <tr>  <td v-if="GET_LIST.length <1 || GET_LIST==null" colspan="9" align="center"> <span>Record is empty!</span> </td> </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ESIModule from '@/store/modules/elastic-search-inventory';
export default {
    name: "ElasticSearchInventory",
    data(){
        return {
            forbidden_page: false
        };
    },
    computed: {
     ...mapGetters('modules/esi', ['GET_LIST'])  
    },
    created(){
        this.$store.registerModule("modules/esi",ESIModule);
        this.$store.commit("modules/esi/SET_LIST",[]);
    },
    mounted(){
        this.getItemList();
    },
    beforeDestroy()
    {
        this.$store.unregisterModule("modules/esi");
    },
    methods: {
        ...mapActions("modules/esi",["action_getList"]),
        getItemList(){
            this.action_getList().then( () => {}).catch(err =>{
                if (err == 403){
                    this.forbidden_page=true;
                }
            });
        },
        gotoServer(srvId){
            this.$router.push("/app/server/" + srvId.toString());
        },
        gotoCompany(cmpId){
            this.$router.push("/app/company/" + cmpId.toString());
        },
        gotoLink(esi){
            var modifiedUrl = "";
            if (esi.url.includes("https://")){
                modifiedUrl = esi.url.replace("https://","");
                window.open("https://" + esi.username + ":" + esi.password + "@" + modifiedUrl,"_blank");
            }
            else{
                modifiedUrl = esi.url.replace("http://","");
                window.open("http://" + esi.username + ":" + esi.password + "@" + modifiedUrl,"_blank");
            }
        },
        gotoUrlWOLogin(url){
            window.open(url,"_blank");
        }
    }
}
</script>
<style lang="scss" scoped>
    tbody{
        tr {
           cursor: default;
        }
    }
    .full-row{
        margin-left: 20px;
    }
    
    .link{
        color: #1571da;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        font-size: 9pt;
        cursor: pointer;
    }
    .link:hover{
        color: #011c3b;
    }

    .login-btn{
        color: #1571da;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        font-size: 9pt;
        cursor: default;
    }
    .login-btn:hover{
        color: #011c3b;
        cursor: default;
    }
</style>