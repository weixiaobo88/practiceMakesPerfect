Spring 学习
==============

参考资料：https://spring.io/guides/gs/rest-service/

使用 Spring Boot，Building a RESTful Web Service

## 使用步骤

- 在命令行运行以下命令

```bash
cd current-directory
gradle wrapper
./gradlew bootRun
```

如果是需要构建成 jar 文件来运行，也可以运行

```
./gradlew build
java -jar web/build/libs/web.jar
```

- 在浏览器中输入URL

```bash
http://localhost:8080/greeting
http://localhost:8080/greeting?name=Linne
```

得到的结果分别是

```bash
{"id":1,"content":"Hello, World!"}
{"id":2,"content":"Hello, Linne!"}
```

## 用 Spring Boot 开发

使用 Gradle 需要引入的包有

```bash
org.springframework.boot:spring-boot-gradle-plugin:1.2.5.RELEASE
org.springframework.boot:spring-boot-starter-web
```


## 学习总结

1. 关于 Gradle
 
当前项目中的有两个子项目，core 和 web，其中 web 在编译前会先去编译 core，而在 core 中引入了 'spring-boot' 的 plugin， 在 web 中也需要引入 'spring-boot' 的 plugin，如果不引入会报错。

2. 关于 Spring Boot

在项目中引入了 Spring Boot，如果需要构建单独的 jar 文件，也就是使用 “./gradlew ” 需要手动指定 Application 的位置，不指定会报错找不到 Main 

```bash
springBoot {
    mainClass = "com.tw.core.Application"
}
```




