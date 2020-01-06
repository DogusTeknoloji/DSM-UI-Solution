<template>
  <div class="error-page">
    <b-container>
      <div class="errorContainer mx-auto">
        <h1 class="errorCode">404</h1>
        <p class="errorInfo">
            Oops, it seems this page does not exist.
        </p>
        <p class="errorHelp mb-3">
            
        </p>
        <b-form>
      
          <router-link tag="a" to="/app/dashboard">
            <b-button class="errorBtn" type="submit" variant="inverse">
            <i class="fa fa-home ml-xl" />   Go Home 
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
  name: 'ErrorPage',
};
</script>

<style src="./Error.scss" lang="scss" scoped />
