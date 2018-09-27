<template>
    <div class="result-tabs">
        <v-toolbar tabs>
            <v-tabs
            slot="extension"
            v-model="tabs"
            fixed-tabs
            color="transparent"
            >
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#mobile-tabs-5-1" class="primary--text">
                PARA CONSIDERAÇÃO
            </v-tab>

            <v-tab href="#mobile-tabs-5-2" class="primary--text">
                EXPERIMENTE
            </v-tab>

            <v-tab href="#mobile-tabs-5-3" class="primary--text">
                CONHEÇA O CASE
            </v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tabs" class="white elevation-1">
            <v-tab-item
            :id="'mobile-tabs-5-1'"
            :key="1"
            >
                <digitalTabA/>
            </v-tab-item>
            <v-tab-item
            :id="'mobile-tabs-5-2'"
            :key="2"
            >
                <digitalTabB/>
            </v-tab-item>
            <v-tab-item
            :id="'mobile-tabs-5-3'"
            :key="3"
            >
                <digitalTabC/>
            </v-tab-item>                        
        </v-tabs-items>
    </div>    
</template>

<script>
import digitalTabA from '@/views/digitalTabA.vue'
import digitalTabB from '@/views/digitalTabB.vue'
import digitalTabC from '@/views/digitalTabC.vue'
export default {
    components:{
        digitalTabA,
        digitalTabB,
        digitalTabC
    },
    data() {
        return {
            tabs: null,
        }
    }    
}
</script>
