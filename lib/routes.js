	
if(Meteor.isClient){ 
	Accounts.onLogin(function() {
		FlowRouter.go('databases');
	});
	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});

}


FlowRouter.triggers.enter([ function(context, redirect){
	if (!Meteor.userId()) {FlowRouter.go('home')};	
}


	]);

/**RUTAS EN GENERAL*/
/*Cerrar la session*/
FlowRouter.route('/logout',{
		name:'logout',
		action(){

			Meteor.logout();
			BlazeLayout.render('HomeLayout');
		}

});


FlowRouter.route('/',{
		name:'home',
		action(){

			if (Meteor.userId()) {
				FlowRouter.go('databases');
			};
			BlazeLayout.render('HomeLayout');
		}

});

FlowRouter.route('/databases',{
		name:'databases',
		action(){
			BlazeLayout.render('MainLayout', { main:'Databases'});
		}

});