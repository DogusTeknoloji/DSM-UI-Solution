<template>
<div class="row">
    <div>
        <b-modal id="modal-contact" title="Contact Card">
            <p class="my-4">Text</p>
        </b-modal>
    </div>
    
    <div class="col-md-12">
        <h4 class="fw-semi-bold">Alerts</h4>
    </div>

    <br />
    <div class="col-md-12 table-card text-center" v-if="forbidden_page">
        <h5>This operation requires elevated permissions.</h5>
    </div>
    <div class="col-md-12 p-0 table-card" v-if="!forbidden_page">
        <table class="table table-hover table-stripped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Alert Description</th>
                    <th scope="col">Action 1</th>
                    <th scope="col">Action 2</th>
                    <th scope="col">Action 3</th>
                    <th scope="col">Action 4</th>
                    <th scope="col">Alert Source</th>
                    <th scope="col">Domain</th>
                    <th scope="col">Notes</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(esi, i) in GET_LIST" :key="i">
                    <th scope="row">{{i+1}}</th>
                    <td>{{esi.AlertDescription}}</td>
                    <td>{{esi.Action1}}</td>
                    <td>{{esi.Action2}}</td>
                    <td>{{esi.Action3}}</td>
                    <td>{{esi.Action4}}</td>
                    <td>{{esi.AlertSource}}</td>
                    <td>{{esi.Domain}}</td>
                    <td>{{esi.Notes}}</td>
                    <td>

                        <b-button v-b-modal.modal-contact
                            class="btn btn-primary btn-sm d-flex text-nowrap align-items-center justify-items-center"
                            style="width:9rem;font-size:0.83rem;">
                            <i class="fa fa-user mr-1"></i>
                            <span class="mx-auto">Contact Card</span>
                        </b-button>

                        <button type="button"
                            class="btn btn-primary btn-sm d-flex text-nowrap mt-1 align-items-center justify-items-center" 
                            style="width:9rem;font-size:0.83rem;">
                            <i class="fa fa-file-text-o mr-1"></i>
                            <span class="mx-auto">Action Document</span>
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
        name: "AlertsPage",
        data() {
            return {
                forbidden_page: false
            };
        },
        computed: {
            ...mapGetters('modules/esi', ['GET_LIST'])
        },
        created() {
            this.$store.registerModule("modules/esi", ESIModule);
            this.$store.commit("modules/esi/SET_LIST", []);
        },
        mounted() {
            this.getItemList();
        },
        beforeDestroy() {
            this.$store.unregisterModule("modules/esi");
        },
        methods: {
            ...mapActions("modules/esi", ["action_getList"]),
            getItemList() {
                this.action_getList().then(() => { }).catch(err => {
                    if (err == 403) {
                        this.forbidden_page = true;
                    }
                });
            },
            gotoServer(srvId) {
                this.$router.push("/app/server/" + srvId.toString());
            },
            gotoCompany(cmpId) {
                this.$router.push("/app/company/" + cmpId.toString());
            },
            gotoLink(esi) {
                var modifiedUrl = "";
                if (esi.url.includes("https://")) {
                    modifiedUrl = esi.url.replace("https://", "");
                    window.open("https://" + esi.username + ":" + esi.password + "@" + modifiedUrl, "_blank");
                }
                else {
                    modifiedUrl = esi.url.replace("http://", "");
                    window.open("http://" + esi.username + ":" + esi.password + "@" + modifiedUrl, "_blank");
                }
            },
            gotoUrlWOLogin(url) {
                window.open(url, "_blank");
            },
        }
    }
</script>
<style lang="scss" scoped>
    tbody {
        tr {
            cursor: default;
        }
    }

    .full-row {
        margin-left: 20px;
    }

    .link {
        color: #1571da;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        font-size: 9pt;
        cursor: pointer;
    }

    .link:hover {
        color: #011c3b;
    }

input[type="checkbox"] {
	display:none;
}
input[type="checkbox"]:checked ~ .modal,
input[type="checkbox"]:checked ~ .modal-background {
	display: block;
}

</style>
