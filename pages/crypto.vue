<template>
  <page-section class="crypto-page">
    <div class="crypto">
      <p style="position: absolute; right:0; top:10px;color:rgba(110,110,110,0.7)">{{ $t('cryptopage.clue') }}</p>
      <div class="crypto-container my-6">
        <div class="crypto-header mx-2 items-start">
          <label for="crypto-search" class="my-6">{{ $t('cryptopage.ticker') }}</label>
          <input
              class=" w-1/2 mb-6 border-gray-800 border-2 "
              v-model="ticket"
              type="text"
              @keydown.enter="add"
          >
          <button @click="add">{{ $t('cryptopage.add') }}</button>
        </div>
        <template v-if="tickers.length">
          <div
              class="crypto-list p-2 flex-row flex-wrap"
          >
            <hr  class="w-full border-t border-gray-600 my-4">
            <div
                v-for="(t, index) of tickers"
                :key="index"
                @click="select(t)"
                :class="{ 'border-4' : sell === t }"
                class="px-4 py-5 m-6 items-center justify-center w-1/4 overflow-hidden shadow crypto-item border-solid cursor-pointer rounded-lg"
            >
              <div class="crypto-name">
                {{t.name}} - USD
              </div>
              <div class="crypto-price">
                {{t.price}}
              </div>
              <button
                  class="mt-6 delete-crypto"
                  @click.stop="handleDelete(t)">
                {{ $t('cryptopage.delete') }}
              </button>

            </div>
            <hr class="w-full border-t border-gray-600 my-4">
          </div>
          <section v-if="sell" class="m-2">
            <h2 class="mb-24">{{ $t('cryptopage.graph') }}</h2>
            <h3 class="text-lg font-medium  my-8">{{sell.name}} - USD - {{sell.price}}</h3>
            <div class="flex-row h-32 items-end border-gray-600 border-b border-l">
              <div
                  v-for="(bar, index) in normalzeGraph()"
                  :key="index"
                  :style="{'height': `${bar}%`}"
                  class="graph-line w-6">
              </div>


            </div>
          </section>
        </template>

      </div>
    </div>
  </page-section>


</template>

<script>
import PageSection from "~/components/common/page-section.vue";

export default {
  components: {PageSection},
  data() {
    return {
      ticket:"",
      tickers:[],
      sell:null,
      graph:[]
    }
  },
  methods:{
    add(){
      this.graph = []
      const currentTicket = {
        name:this.ticket,
        price:"-"
      }
      this.tickers.push(currentTicket)
      setInterval(async ()=>{
        const f= await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currentTicket.name}&tsyms=USD&api_key=7569704f1da549f0c2b643b901ec14671dd216618d4a2ee1d4ab79cb59dd180f`)
        const data = await f.json()
        this.tickers.find(t => t.name === currentTicket.name).price = data.USD > 1 ? data.USD.toFixed(2): data.USD.toPrecision(2)
        if (this.sell?.name === currentTicket.name){
          this.graph.push(data.USD)
        }
      }, 3000)
    },
    handleDelete(tickerToRemove){
      this.tickers= this.tickers.filter(t=> t !==tickerToRemove)
    },
    normalzeGraph(){
      const maxValue = Math.max(...this.graph);
      const minValue = Math.min(...this.graph);
      return this.graph.map( price =>
          10 + ((price - minValue) * 90 / (maxValue - minValue))
      )
    },
    select(ticker){
      this.sell = ticker;
      this.graph = [];
    },
  }
}
</script>

<style src="../assets/css/components/crypto.scss"/>
<style>
.dark .crypto-page{
  background-color: black;
}
</style>
