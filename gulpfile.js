/*创建gulp实例*/
var gulp = require("gulp");

/*创建browser-sync实例*/
var browserSync = require("browser-sync").create();

gulp.task("server",function(){
	browserSync.init({
		/*自带服务器，因此不再需要http-server命令*/
		server: {
			/*服务器在哪个目录下*/
			baseDir: "./www/"
		}
	});
})
/*刷新浏览器*/
gulp.task("refresh",function(){
	/*刷新浏览器*/
	browserSync.reload();
})
//	/*j简单用例，测试task执行事件*/
//	gulp.task("default",function(){
//		console.log("hello");
//	});

/*先有css,js,html等文件
再启动server
再监控文件是否有变化*/
gulp.task("default",["html","css","js","github","server","watch"]);


/*将src下面的index.html复制到www下面*/
gulp.task("html",function(){
	/*原始文件*/
	gulp.src("./src/index.html")
	/*处理过程*/
	/*www后面的目录不能省去，代表www是目录，
	目标文件可以写index.html，也可以不写*/
	.pipe(gulp.dest("./www/"));
});

/*将css文件夹下面的所有css文件复制到www下面*/
gulp.task("css",function(){
	gulp.src("./src/css/**/*.css")
	.pipe(gulp.dest("./www/css/"));
})
//	子目录通配符
//	一个星星，代表第一级子目录
//	两个星星，代表所有子目录
//	css->main->main.css
//	css->main->main2->main2.css
//	./src/css/*/*.css可以将第一级子目录main文件夹及其下面的main.css复制到www中
//	./src/css/*/*.css可以将所有子目录main文件夹及其下面的main.css & main2文件夹及下面的main2.css复制到www中
//	*.*代表所有文件

/*复制js文件夹*/
gulp.task("js",function(){
	gulp.src("./src/js/**/*.js")
	.pipe(gulp.dest("./www/js/"));
});

/*复制src下面的github文件复制到www*/
gulp.task("github",function(){
	gulp.src("./src/github/**/*.*")
	.pipe(gulp.dest("./www/github/"));
});
/*监听事件*/
gulp.task("watch",function(){
	// gulp.watch("./src/index.html",["html"]);
	gulp.watch("./src/github/**/*.*",["github"]);
	/*只要www目录下文件有变化，就刷新浏览器*/
	// gulp.watch("./www/github/**/*.*",["refresh"]);
	gulp.watch("./www/github/project_travel/html/*.html",["refresh"]);
	gulp.watch("./www/github/project_travel/css/*.css",["refresh"]);
});