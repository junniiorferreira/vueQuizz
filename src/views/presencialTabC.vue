<template>
    <v-card>
        <div class="tab-content">
            <h2>Academia Santander, uma parceria de sucesso</h2>
            <div class="tab-block">
                <h4>O Desafio:</h4>
                <p class="content"></p>
            </div>
            <div class="tab-block">
                <h4>A solução:</h4>
                <p class="content"></p>
            </div>
            <div class="tab-block">
                <h4>Os resultados:</h4>
                <p class="content-no-bottom"></p>
                <ul></ul>
                <v-btn flat class="btn-next case">LEIA O CASE COMPLETO</v-btn>
            </div>            
        </div>
    </v-card>
</template>
<style>
.tabs__content .card .tab-content {
    padding: 40px;
}
.tab-content h2 {
    font-family: 'roboto-light';
    color: #666666;
    font-size: 26px;
    margin-bottom: 40px
}
.tab-block h4 {
    font-family: 'roboto-bold';
    font-size: 20px;
    color: #666666;
    margin-bottom: 5px;
}
.tab-block p.content {
    font-size: 20px;
    color: #666666;
    font-family: 'roboto-light';
    line-height: 25px;
    padding: 0;
    margin-bottom: 30px!important
}
.tab-block .content-no-bottom {
    font-size: 20px;
    color: #666666;
    font-family: 'roboto-light';
    line-height: 25px;
    padding: 0;
    margin-bottom: 0px!important;
}
.tab-block {
    padding: 40px;
    padding-bottom: 0;
    padding-top: 0;
}
.tab-block ul {
    margin-top: 20px;
}
.tab-block ul li {
    font-size: 20px;
    color: #666666;
    font-family: 'roboto-light';
    line-height: 25px;
    margin-bottom: 10px;    
}
.btn-next.case {
    font-size: 16px;
    font-family: 'roboto-bold';    
    height: 4px;
    border-radius: 5px;
    background-color: #b0b0b0!important;
    color: #fff;
    padding: 25px;
}    

</style>
