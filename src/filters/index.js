export default {
  install(Vue) {
    Vue.filter('ms', ms => {
      var minutes = parseInt((ms % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = parseInt((ms % (1000 * 60)) / 1000);
      return (minutes > 9 ? minutes : '0' + minutes) + ":" + (seconds > 9 ? seconds : '0' + seconds);
    }),
      Vue.filter('dateFormat', time => {
        let date = new Date(time);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let currentTime = (month>9?month:'0'+month) + "月" + (day>9?day:'0'+day) + "日";
        return currentTime;
      })
  }
}