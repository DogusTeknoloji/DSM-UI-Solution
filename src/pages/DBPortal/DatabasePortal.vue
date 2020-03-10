<template>
  <div id="app">
    <!-- <div id="editor" ref="editor">Getting Data...</div> -->
    <div id="" ref="">Database Portal is unavailable...</div>
    <div 
      id="iframe-wrapper"
      :style="iframe.wrapperStyle" 
    >
      <iframe 
        v-if="loaded"
        :src="iframe.src"
        :style="iframe.style"
        :height="iframe.style.height"
        :width="iframe.style.width"
        type="application/pdf"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      iframe: {
        src: 'http://dteksqlmnt/veritabaniportal/Default.aspx',
        style: null,
        wrapperStyle: null,
      }
    }
  },
  mounted() {
    let editor = this.$refs.editor;
    this.iframe.style = {
      position: 'absolute',
      width: window.innerWidth,
      height: window.innerHeight,
      top: -editor.offsetTop + "px",
      left: -editor.offsetLeft + 30 + "px",
    }    
    this.iframe.wrapperStyle = {
      overflow: 'auto',
      height: editor.clientHeight + "px",
      width: editor.clientWidth + "px",
    } 
    this.loaded = true;
  }
}
</script>