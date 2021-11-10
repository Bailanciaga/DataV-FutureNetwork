<template>
  <div>
    <dv-flyline-chart-enhanced :config="config" :dev=true style="width: 1800px;height: 1012px;margin:60px 50px 10px 58px"/>
  </div>
</template>

<script>
  export default {
    name: "MainMap",
    data(){
      return {
        config:{
          points:[
            {
              name:'哈尔滨',
              coordinate:[0.737,0.26],
            },
            {
              name:'长春',
              coordinate:[0.72,0.325],
            },
            {
              name:'沈阳',
              coordinate:[0.69,0.395],
            },
            {
              name:'北京',
              coordinate:[0.615,0.435],
              halo:{
                show:true,
                radius: 80
              }
            },
            {
              name:'石家庄',
              coordinate:[0.595,0.49],
            },
            {
              name:'呼和浩特',
              coordinate:[0.558,0.413],
            },
            {
              name:'太原',
              coordinate:[0.567,0.50],
            },
            {
              name:'济南',
              coordinate:[0.625,0.52],
            },
            {
              name:'郑州',
              coordinate:[0.582,0.575],
            },
            {
              name:'西安',
              coordinate:[0.525,0.585],
            },
            {
              name:'银川',
              coordinate:[0.493,0.481],
            },
            {
              name:'西宁',
              coordinate:[0.44,0.53],
            },
            {
              name:'乌鲁木齐',
              coordinate:[0.265,0.319],
              halo: {
                show: true,
                color:'#fff200',
                radius:40
              },
            },
            {
              name:'上海',
              coordinate:[0.68,0.67],
              halo: {
                show: true,
                color:'#fff200',
                radius:40
              },
            },
            {
              name:'南京',
              coordinate:[0.645,0.65],
            },
            {
              name:'合肥',
              coordinate:[0.627,0.66],
            },
            {
              name:'武汉',
              coordinate:[0.591,0.685],
            },
            {
              name:'重庆',
              coordinate:[0.497,0.715],
            },
            {
              name:'兰州',
              coordinate:[0.465,0.543],
            },
            {
              name:'成都',
              coordinate:[0.47,0.69],
            },
            {
              name:'杭州',
              coordinate:[0.66,0.70],
            },
            {
              name:'南昌',
              coordinate:[0.61,0.74],
            },
            {
              name:'长沙',
              coordinate:[0.573,0.75],
            },
            {
              name:'贵阳',
              coordinate:[0.497,0.79],
              halo: {
                show: true,
                color:'#fff200',
                radius:40
              },
              icon:{
                src:'../static/img/mapCenterPoint.png',
                width:40,
                height:40
              }
            },
            {
              name:'昆明',
              coordinate:[0.44,0.83],
              halo: {
                show: true,
                color:'#fff200',
                radius:40
              },
            },
            {
              name:'南宁',
              coordinate:[0.517,0.88],
            },
            {
              name:'广州',
              coordinate:[0.58,0.87],
            },
            {
              name:'厦门',
              coordinate:[0.64,0.84],
            },
            {
              name:'福州',
              coordinate:[0.657,0.79],
            },
            {
              name:'海口',
              coordinate:[0.545,0.948],
            },
            {
              name:'圣地亚哥',
              coordinate:[0.912,0.84],
              halo: {
                show: true,
                color:'#fff200',
                radius:40
              },
            }
          ],
          lines:[
            {
              source:'贵阳',
              target:'北京',
              width:7,
              color:'#DC143C',
              orbitColor: 'rgba(103,224,227,0)',
              radius:300,
              duration:[20,25]
            },
            {
              source:'贵阳',
              target: '乌鲁木齐',
              width:7,
              color:'#fcfcfc',
              orbitColor: 'rgba(103,224,227,0)',
              radius:400,
              duration:19
            },
            {
              source:'贵阳',
              target: '昆明',
              width:7,
              color:'#f6f5f5',
              orbitColor: 'rgba(103,224,227,0)',
              radius:50,
              duration:[25,30],

            },
            {
              source:'贵阳',
              target:'上海',
              width:7,
              color:'#66f5f5',
              orbitColor: 'rgba(103,224,227,0)',
              radius:200,
              duration:[20,25]
            },
            {
              source:'圣地亚哥',
              target: '贵阳',
              width:7,
              color:'#fdfd00',
              orbitColor: 'rgba(103,224,227,0)',
              radius:300,
              duration:[30,35]
            },
          ],
          icon:{
            show:true,
            src: '../static/img/mapPoint.png'
          },
          k : -1,
          bgImgSrc:'../static/img/map2.png',

        }
      }
    }

  }
</script>

<style lang="less">

</style>
