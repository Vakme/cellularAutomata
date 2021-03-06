import { Line, mixins  } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  props: ['options'],
  mixins: [reactiveProp],
  mounted () {
    this.chartData = {
      labels: [],
      datasets: [{
        label: 'Odleglosc Hamminga',
        data: [],
      }],
    };
    this.renderChart(this.chartData, this.options);
  }
}
