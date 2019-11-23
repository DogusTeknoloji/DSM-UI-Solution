<template>
    <div class="col-md-12">       
            <h4 class="fw-semi-bold">10 Most Called Urls</h4>
            <br />
            <div class="col-md-12 table-card">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Url</th>
                    <th scope="col">Request Method</th>
                    <th scope="col">Site Name</th>
                    <th scope="col">Server</th>
                    <th scope="col">Service Status</th>
                    <th scope="col">Browser</th>
                    <th scope="col">Count</th>


                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <router-link class="site-link" to="/app/server">/index.html</router-link>
                    </td>

                    <td>Post</td>
                    <td>d-teknoloji.com.tr</td>
                    <td>TestServer1</td>
                    <td>200</td>
                    <td>Mozilla</td>
                    <td>10000</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <router-link class="site-link" to="/app/server">/index.html</router-link>
                    </td>

                    <td>Post</td>
                    <td>d-teknoloji.com.tr</td>
                    <td>TestServer1</td>
                    <td>200</td>
                    <td>Mozilla</td>
                    <td>10000</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <router-link class="site-link" to="/app/server">/index.html</router-link>
                    </td>

                    <td>Post</td>
                    <td>d-teknoloji.com.tr</td>
                    <td>TestServer1</td>
                    <td>200</td>
                    <td>Mozilla</td>
                    <td>10000</td>
                  </tr>
                </tbody>
              </table>
            </div>
    </div>
</template>
<script>
export default {
      name: "MostCalledUrls",
  components: {},
  data() {
    return {
   
    };
  }
}
</script>
<style lang="scss" scoped>

</style>