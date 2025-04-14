# Use an OpenJDK 11 base image
FROM openjdk:21-jre-slim
VOLUME /tmp
COPY target/crud-demo-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]