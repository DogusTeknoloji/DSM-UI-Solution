<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    const currentPath = this.$router.history.current.path;

    if (window.localStorage.getItem("authenticated") === "false") {
      if (currentPath !== "/login"){
        this.$router.push("/login");
      }
    }

    if (currentPath === "/" || currentPath === "/app") {
      if (currentPath !== "/app/dashboard"){
        this.$router.push("/app/dashboard");
      }
    }
  },
};
</script>

<style src="./styles/theme.scss" lang="scss" />
