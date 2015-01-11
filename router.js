Router.configure({
    layoutTemplate:'layout'
});
Router.map(function(){
    this.route('home',{path:'/'});
    this.route('catipenceresi',{path:'/cati-penceresi'});
    this.route('catimerdiveni',{path:'/cati-merdiveni'});

})