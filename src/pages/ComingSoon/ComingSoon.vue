<template>
  <div class="error-page">
    <b-container>
      <div class="errorContainer mx-auto">
        <div>
          
        </div>
        <b-form>
      
          <router-link tag="a" to="/app/dashboard">
            <b-button class="errorBtn" type="submit" variant="inverse">
            <i class="fa fa-home ml-xl" />   Go Dashboard 
            </b-button>
          </router-link>
        </b-form>
      </div>
      <footer class="pageFooter">
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ComingSoonPage',
};
</script>

<style src="./ComingSoon.scss" lang="scss" scoped />
