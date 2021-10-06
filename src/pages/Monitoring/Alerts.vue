<template>
<div class="row">
    <div>
        <b-modal id="modal-contact" title="Contact Card">
            <p class="my-4">Text</p>
        </b-modal>
    </div>
    
    <div class="col-md-12">
        <h4 class="fw-semi-bold">Alert Action/ Escalation Inventory </h4>
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
                    <!-- <th scope="col">Action 1</th>
                    <th scope="col">Action 2</th>
                    <th scope="col">Action 3</th>
                    <th scope="col">Action 4</th> -->
                    <th scope="col">Alert Source</th>
                    <th scope="col">Domain</th>
                    <th scope="col">Notes</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(alert, i) in GET_LIST" :key="i">
                    <th scope="row">{{i+1}}</th>
                    <td>{{alert.alertDescription}}</td>
                    <!-- <td>{{alert.action1}}</td>
                    <td>{{alert.action2}}</td>
                    <td>{{alert.action3}}</td>
                    <td>{{alert.action4}}</td> -->
                    <td>{{alert.alertSource}}</td>
                    <td>{{alert.domain}}</td>
                    <td>{{alert.notes}}</td>
                    <td>

                        <b-button
                            class="btn btn-primary btn-sm d-flex text-nowrap align-items-center justify-items-center"
                            style="width:9rem;font-size:0.83rem;"
                            @click="onContactInfoClicked(alert.alertDescription, alert.alertId)">
                            <i class="fa fa-user mr-1"></i>
                            <span class="mx-auto">Contact Info</span>
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
    <div class="col-md-12 text-center" v-if="this.isLoading">
      <img src="@/assets/svg/loading.svg" />
    </div>
    <b-modal
      id="contactInfo-modal"
      cancel-variant="outline-secondary"
      ok-title="Ok"
      size="lg"
      centered
      title="Contact Info">
        <b-form>
            <b-form-group>
                <label for="alertMessage">Alert Message</label>
                <b-form-input id="alertMessage" type="text" disabled v-model="contactModalItems.alertMsg"/>
            </b-form-group>
        </b-form>
        <b-form>
            <b-form-group>
                <label for="priority">Contact Order</label>
                <b-form-input 
                    id="priority"
                    type="text"
                    disabled />
            </b-form-group>
            <b-form-group>
                <label for="contactFullName">Full Name</label>
                <b-form-input
                    id="contactFullName" 
                    type="text"
                    disabled />
            </b-form-group>
            <b-form-group>
                <label for="contactPhoneNumber1">Phone Number 1</label>
                <b-form-input
                    id="contactPhoneNumber1"
                    type="text"
                    disabled />
            </b-form-group>
            <b-form-group>
                <label for="contactPhoneNumber2">Phone Number 2</label>
                <b-form-input 
                    id="contactPhoneNumber2"
                    type="text"
                    disabled />
            </b-form-group>
            <b-form-group>
                <label for="contactEMail">E-Mail</label>
                <b-form-input 
                    id="contactEMail"
                    type="text"
                    disabled />
            </b-form-group>
        </b-form>
        <template #modal-footer="{ prevContact,nextContact }">
            <b-container fluid>
                <b-row>
                    <b-col align-self="start">
                        <b-button class="ml-n3 px-3" size="sm" 
                        v-show="contactModalItems.totalContactCount > 1 && contactModalItems.currentContactOrder != 1" 
                        variant="primary" 
                        @click="nextContact()">Previous Contact</b-button>
                    </b-col>
                    <b-col align-self="center">
                        <p class="text-center align-items-center my-auto">
                            Contact: [ {{ contactModalItems.currentContactOrder }} / {{ contactModalItems.totalContactCount }} ]
                        </p>
                    </b-col>
                    <b-col align-self="end">
                        <b-button class="mr-n3 px-3 pull-right" size="sm" 
                        v-show="contactModalItems.currentContactOrder < contactModalItems.totalContactCount" 
                        variant="primary"
                        @click="prevContact()">Next Contact</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </template>
    </b-modal>
</div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from 'vuex';
    // import { getContacts } from '@/api/Monitoring/alerts.js';
    export default {
        name: "AlertsPage",
        data() {
            return {
                defaultContactModalItems: {
                    alertMsg: '',
                    alertId: '',
                    contactPriority: 0,
                    contactFullName: '',
                    contactPhone1: '',
                    contactPhone2: '',
                    contactEMail: '',
                    currentContactOrder: 1,
                    totalContactCount: 1,
                },
                contactModalItems: {},
                isLoading: true,
                forbidden_page: false
            };
        },
        computed: {
            ...mapGetters({
                GET_LIST: 'alerts/GET_LIST',
                isLast: "server/GET_ISLAST",
            })
        },
        created() {
            this.SET_LIST([])
            window.addEventListener("scroll", this.handleScroll)
        },
        destroyed(){
            window.removeEventListener("scroll", this.handleScroll)
        },
        mounted() {
            this.getAlertList()
        },
        methods: {
            ...mapMutations({
                SET_LIST: 'alerts/SET_LIST',
                IncreasePage: "alerts/INCREASE_PAGE"
            }),
            ...mapActions({
                FETCH_LIST: 'alerts/action_getList'
            }),
            handleScroll() {
                let bottomOfWindow =
                Math.max(
                    window.pageYOffset,
                    document.documentElement.scrollTop,
                    document.body.scrollTop
                ) +
                    window.innerHeight ===
                    document.documentElement.offsetHeight;

                if (bottomOfWindow && !this.isLast  && !this.isSearch && !this.isLoading) {
                    this.IncreasePage();
                    this.getAlertList();
                }
            },
            resetContact()
            {
                this.contactModalItems = { ...this.defaultContactModalItems };
            },
            getAlertList(){
                this.isLoading = true
                this.FETCH_LIST().then(()=> {
                    this.isLoading = false
                }).catch(err => {
                    if (err == 403) {
                        this.forbidden_page = true;
                    }
                });
            },
            onContactInfoClicked(alertMsg, alertId){
                this.resetContact();
                this.contactModalItems.alertMsg = alertMsg
                this.contactModalItems.alertId = alertId                
                this.$bvModal.show('contactInfo-modal')
            }
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
