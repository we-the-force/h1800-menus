
import HomePage from '../pages/home.f7.html';
import RoomPage from '../pages/room.f7.html';


var routes = [
  
  
  {
    
    path: '(.*)',
    // pushStateRoot: 'menus',
    async: function(routeTo, reouteFrom, resolve, reject){
      var router = this;

      var app = router.app;
      app.preloader.show('Cargando...','white');
      app.request.promise.json('https://hacienda1800.com/panel/api/collections/get/menu').then(function(res){
        console.log(res);
        app.preloader.hide();
        resolve(
          {
            component: RoomPage
          },
          {
            context: {
              menu: res.data.entries
            }
          }
        );
      });
    },
  },
];

export default routes;