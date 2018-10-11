<template>
    <div class="result-tabs result-tabs-mobile">
        <div class="result-tabs-header header-a">
            <p class="tab-mobile-title">PARA CONSIDERAÇÃO</p>
            <div class="mobile-tab mobile-tab-a">
                <digitalTabA/>                
            </div>
        </div>
        <div class="result-tabs-header header-b">
            <p class="tab-mobile-title">EXPERIMENTE</p>
            <div class="mobile-tab mobile-tab-b">
                <digitalTabB/>                
            </div>
        </div>
        <div class="result-tabs-header header-c">
            <p class="tab-mobile-title">CONHEÇA O CASE</p>
            <div class="mobile-tab mobile-tab-c">
                <digitalTabC/>                
            </div>
        </div>        
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

<style>
@media only screen and (max-width: 760px) and (min-width: 320px)  {
    .result-tabs-header.header-a p.tab-mobile-title {
        border-top: 2px solid #bbbbbb;
        font-family: 'roboto-bold';
        color: #a1a1a1;
        font-size: 12px;
        letter-spacing: 0.5px;
        margin-bottom: 20px!important;
    }    
    .result-tabs-header.header-b p.tab-mobile-title {
        border-top: 2px solid #bbbbbb;
        font-family: 'roboto-bold';
        color: #a1a1a1;
        font-size: 12px;
        letter-spacing: 0.5px;
        margin-bottom: 20px!important;
    } 
    .result-tabs-header.header-c p.tab-mobile-title {
        border-top: 2px solid #bbbbbb;
        font-family: 'roboto-bold';
        color: #a1a1a1;
        font-size: 12px;
        letter-spacing: 0.5px;
        margin-bottom: 20px!important;
    }            
    .result-tabs-mobile h2.container-title.primeiro {
        font-size: 15px;
        margin-top: 0;
        border-top: 2px solid #bbbbbb;
        padding-top: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .result-tabs-mobile ul.expansion-panel {
        list-style: none!important;
    }
    .result-tabs-mobile .expansion-panel__header {
        font-size: 13px;
        padding-top: 7px!important;
        padding-bottom: 7px!important;
    }
    .result-tabs-mobile .application--wrap {
        min-height: 0;
        padding-bottom: 5vh;
    }
    .result-tabs-mobile .expansion-panel__body .card .card__text {
        font-size: 13px;
        line-height: 1.6em;
    }
    /* digital */
    .mobile-tab.mobile-tab-b h2.container-title {
        margin-bottom: 30px;
    }
    .mobile-tab.mobile-tab-b .container-tab-left {
        margin-right: 0;
        margin-bottom: 30px;
    }   
    .mobile-tab.mobile-tab-b h3.title-tab {
        font-size: 16px;
        text-align: center;
        margin-bottom: 0;
    }     
    .mobile-tab.mobile-tab-b h4.subtitle-tab {
        font-size: 16px;
        margin-top: 7px;
        text-align: center;
    }
    .mobile-tab.mobile-tab-b .tab-todo {
        margin-top: 0px;
    }    
    .mobile-tab.mobile-tab-b .container-tab-right .tab-todo p {
        font-size: 13px;
        line-height: 20px;
        padding-left: 0;
        padding-right: 0;
    }    
    .mobile-tab.mobile-tab-b .container-tab {
        padding: 20px;
        padding-bottom: 40px;
    }    
    .mobile-tab-b .carousel__left .btn, .carousel__right .btn {
        color: #bbb;
    }    
    .mobile-tab-b .carousel__left {
        left: 5%;
        bottom: 10px!important;
    }   
    .mobile-tab-b .carousel__right {
        right: 5%;
        bottom: 10px!important;
    }        
    .mobile-tab-b button.btn.btn--icon.btn--small.theme--dark.carousel__controls__item {
        color: #b1b1b1;
    }    
    .mobile-tab-b .carousel__controls {
        padding-top: 0;
        padding-bottom: 12px;
    }
    .mobile-tab-b .carousel {
        padding-bottom: 20px;
        box-shadow: none;
    }   
    .mobile-tab-b .card {
        box-shadow: none;
    }    
    .mobile-tab-c .card .tab-content h2 {
        font-size: 15px!important;
        margin-top: 0;
        border-top: 2px solid #bbbbbb;
        padding-top: 35px;
        padding-bottom: 0;
        padding-left: 12px;
        padding-right: 12px;
    }
    .mobile-tab-c .tab-block {
        padding: 20px;
        text-align: center;
        padding-top: 0;
    }     
    .mobile-tab-c .tab-block h4 {
        font-size: 14px;
        margin-bottom: 10px;
    }
    .mobile-tab-c .tab-block p.content {
        font-size: 13px;
        line-height: 22px;
        margin-bottom: 20px!important;
    }
    .mobile-tab-c .tab-block .content-no-bottom {
        font-size: 13px;
        line-height: 22px;
        margin-bottom: 10px!important;
    }
    .mobile-tab-c .tab-block ul li {
        font-size: 13px;
        line-height: 22px;
    }    
    .mobile-tab.mobile-tab-c .card .tab-content .tab-block ul {
        list-style: disc inside;
        margin-left: 0;
        text-align: center;
    }
    .mobile-tab-c .btn-next.case {
        font-size: 12px;
        padding: 20px;
        width: 100%;
        margin-left: 0px;
    }
    .mobile-tab.mobile-tab-b {
        border-top: 2px solid #bbb;
    }    
    /* end digital */
}
</style>
