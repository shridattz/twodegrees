var DashboardService = function(configService, restServiceProxy ) {
    this.config = configService;
    this.restServiceProxy = restServiceProxy;

};

DashboardService.prototype = {
    
    topscorer : function($scope){
        var url = this.config.siteUrl;
        return this.restServiceProxy.get(url ,{ 
            onSuccess : onSuccess,
            onError : onError,
            on400 : onError,
            on404 : onError
        });
    
    
    }


}